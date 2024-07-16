// src/components/DataBencana.js

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDisasters } from "../redux/actions/disasterActions";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddDataBencana from "./AddDataBencana";
import EditDataBencana from "./EditDataBencana";
import DeleteDataBencana from "./DeleteDataBencana";

function DataBencana() {
  const dispatch = useDispatch();
  const disasterState = useSelector((state) => state.disaster);
  const { data, loading, error } = disasterState;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(fetchDisasters());
  }, [dispatch]);

  const handleEdit = (data) => {
    setEditData(data);
    setShowEditModal(true);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to first page when items per page change
  };

  return (
    <div style={{ marginTop: "-25px", width: "1500px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="success"
          onClick={() => setShowModal(true)}
          style={{ width: "220px", height: "auto", marginBottom: "0px" }}
        >
          Tambah Data Bencana
        </Button>
        <Form.Group controlId="itemsPerPage" style={{ width: "220px" }}>
          <Form.Label style={{ fontSize: "20px"}}>Data / Halaman</Form.Label>
          <Form.Control
            as="select"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            style={{ textAlign: "left", height: "auto", paddingLeft: "10px" }}
            className="bg-dark text-white"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </Form.Control>
        </Form.Group>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th style={{ width: "100px" }}>Tanggal</th>
            <th style={{ width: "170px" }}>Provinsi</th>
            <th style={{ width: "150px" }}>Kota / Kabupaten</th>
            <th style={{ width: "230px" }}>Alamat</th>
            <th style={{ width: "190px" }}>Bencana</th>
            <th style={{ width: "px" }}>Penyebab</th>
            <th style={{ width: "110px" }}>Korban Jiwa</th>
            <th style={{ width: "150px" }}>Menu</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan="8">Loading...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan="8">Error: {error.message}</td>
            </tr>
          )}
          {!loading &&
            !error &&
            currentData.map((item) => (
              <tr key={item.id}>
                <td style={{ textAlign: "left" }}>{item.tanggal_bencana}</td>
                <td style={{ textAlign: "left" }}>{item.provinsi}</td>
                <td style={{ textAlign: "left" }}>{item.kota_kabupaten}</td>
                <td style={{ textAlign: "left" }}>{item.alamat_lokasi}</td>
                <td style={{ textAlign: "left" }}>{item.bencana_alam}</td>
                <td style={{ textAlign: "justify" }}>
                  {item.penjelasan_penyebab}
                </td>
                <td style={{ textAlign: "center" }}>{item.korban_jiwa}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(item)}>
                    Edit
                  </Button>{" "}
                  <DeleteDataBencana id={item.id} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Sebelumnya
        </Button>
        <span style={{ margin: "0 30px" }}>
          Halaman {currentPage} dari {totalPages}
        </span>
        <Button onClick={nextPage} disabled={currentPage === totalPages}>
          Selanjutnya
        </Button>
      </div>
      <AddDataBencana
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />
      <EditDataBencana
        showEditModal={showEditModal}
        handleCloseEdit={() => setShowEditModal(false)}
        editData={editData}
      />
    </div>
  );
}

export default DataBencana;
