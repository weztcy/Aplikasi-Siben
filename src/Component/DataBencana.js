import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function DataBencana({ itemsPerPage }) {
  const [dataToShow, setDataToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [formData, setFormData] = useState({
    tanggalBencana: "",
    provinsi: "",
    kotaKabupaten: "",
    alamatLokasi: "",
    bencanaAlam: "",
    penjelasanPenyebab: "",
    korbanJiwa: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://34.126.120.92:3000/disasters");
      setDataToShow(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://34.126.120.92:3000/disasters/${id}`);
      fetchData(); // Refresh data after delete
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleEdit = (data) => {
    setEditData(data);
    setShowEditModal(true);
    setFormData({
      tanggalBencana: data.tanggal_bencana,
      provinsi: data.provinsi,
      kotaKabupaten: data.kota_kabupaten,
      alamatLokasi: data.alamat_lokasi,
      bencanaAlam: data.bencana_alam,
      penjelasanPenyebab: data.penjelasan_penyebab,
      korbanJiwa: data.korban_jiwa,
    });
  };

  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://34.126.120.92:3000/disasters/${editData.id}`, {
        tanggal_bencana: formData.tanggalBencana,
        provinsi: formData.provinsi,
        kota_kabupaten: formData.kotaKabupaten,
        alamat_lokasi: formData.alamatLokasi,
        bencana_alam: formData.bencanaAlam,
        penjelasan_penyebab: formData.penjelasanPenyebab,
        korban_jiwa: formData.korbanJiwa,
      });
      setShowEditModal(false);
      fetchData(); // Refresh data after edit
      setFormData({
        tanggalBencana: "",
        provinsi: "",
        kotaKabupaten: "",
        alamatLokasi: "",
        bencanaAlam: "",
        penjelasanPenyebab: "",
        korbanJiwa: 0,
      }); // Reset form fields
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = dataToShow.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dataToShow.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://34.126.120.92:3000/disasters", {
        tanggal_bencana: formData.tanggalBencana,
        provinsi: formData.provinsi,
        kota_kabupaten: formData.kotaKabupaten,
        alamat_lokasi: formData.alamatLokasi,
        bencana_alam: formData.bencanaAlam,
        penjelasan_penyebab: formData.penjelasanPenyebab,
        korban_jiwa: formData.korbanJiwa,
      });
      setShowModal(false);
      fetchData(); // Refresh data after adding new entry
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div style={{ margin: "0px", width: "1500px" }}>
      <Button variant="success" onClick={() => setShowModal(true)} style={{ width: "600px", height: "60px", marginBottom: "10px", marginBottom: "20px" }}>
        Tambah Data Bencana
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{width: "100px" }}>Tanggal</th>
            <th style={{width: "170px" }}>Provinsi</th>
            <th style={{width: "150px" }}>Kota / Kabupaten</th>
            <th style={{width: "220px" }}>Alamat</th>
            <th style={{width: "190px" }}>Bencana</th>
            <th style={{width: "px" }}>Penyebab</th>
            <th style={{width: "110px" }}>Korban Jiwa</th>
            <th style={{width: "150px" }}>Menu</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((data, index) => (
              <tr key={index}>
                <td style={{ textAlign:"left",}}>{data.tanggal_bencana}</td>
                <td style={{ textAlign:"left",}}>{data.provinsi}</td>
                <td style={{ textAlign:"left",}}>{data.kota_kabupaten}</td>
                <td style={{ textAlign:"left",}}>{data.alamat_lokasi}</td>
                <td style={{ textAlign:"left",}}>{data.bencana_alam}</td>
                <td style={{ textAlign:"left",}}>{data.penjelasan_penyebab}</td>
                <td style={{ textAlign:"center",}}>{data.korban_jiwa}</td>
                <td style={{ textAlign:"center",}}>
                  <Button variant="primary" onClick={() => handleEdit(data)}>
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(data.id)}
                  >
                    Hapus
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">Tidak ada data tersedia</td>
            </tr>
          )}
        </tbody>
      </Table>
      <div style={{ textAlign: "right", marginTop: "20px", marginBottom: "20px" }}>
        {currentPage > 1 && (
          <Button variant="primary" onClick={prevPage} style={{marginRight:"10px"}}>
            Sebelumnya
          </Button>
        )}{" "}
        {currentPage < totalPages && (
          <Button variant="primary" onClick={nextPage}>
            Selanjutnya
          </Button>
        )}
      </div>

      {/* Modal untuk tambah data */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Data Bencana</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTanggal">
              <Form.Label>Tanggal Bencana</Form.Label>
              <Form.Control
                type="date"
                name="tanggalBencana"
                value={formData.tanggalBencana}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProvinsi">
              <Form.Label>Provinsi</Form.Label>
              <Form.Control
                type="text"
                name="provinsi"
                value={formData.provinsi}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formKotaKabupaten">
              <Form.Label>Kota / Kabupaten</Form.Label>
              <Form.Control
                type="text"
                name="kotaKabupaten"
                value={formData.kotaKabupaten}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formAlamat">
              <Form.Label>Alamat Lokasi</Form.Label>
              <Form.Control
                type="text"
                name="alamatLokasi"
                value={formData.alamatLokasi}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBencana">
              <Form.Label>Bencana Alam</Form.Label>
              <Form.Control
                type="text"
                name="bencanaAlam"
                value={formData.bencanaAlam}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPenyebab">
              <Form.Label>Penjelasan Penyebab</Form.Label>
              <Form.Control
                type="text"
                name="penjelasanPenyebab"
                value={formData.penjelasanPenyebab}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formKorbanJiwa">
              <Form.Label>Korban Jiwa</Form.Label>
              <Form.Control
                type="number"
                name="korbanJiwa"
                value={formData.korbanJiwa}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Simpan
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal untuk edit data */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data Bencana</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEdit}>
            <Form.Group controlId="editFormTanggal">
              <Form.Label>Tanggal Bencana</Form.Label>
              <Form.Control
                type="date"
                name="tanggalBencana"
                value={formData.tanggalBencana}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="editFormProvinsi">
              <Form.Label>Provinsi</Form.Label>
              <Form.Control
                type="text"
                name="provinsi"
                value={formData.provinsi}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="editFormKotaKabupaten">
              <Form.Label>Kota / Kabupaten</Form.Label>
              <Form.Control
                type="text"
                name="kotaKabupaten"
                value={formData.kotaKabupaten}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="editFormAlamat">
              <Form.Label>Alamat Lokasi</Form.Label>
              <Form.Control
                type="text"
                name="alamatLokasi"
                value={formData.alamatLokasi}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="editFormBencana">
              <Form.Label>Bencana Alam</Form.Label>
              <Form.Control
                type="text"
                name="bencanaAlam"
                value={formData.bencanaAlam}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="editFormPenyebab">
              <Form.Label>Penjelasan Penyebab</Form.Label>
              <Form.Control
                type="text"
                name="penjelasanPenyebab"
                value={formData.penjelasanPenyebab}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="editFormKorbanJiwa">
              <Form.Label>Korban Jiwa</Form.Label>
              <Form.Control
                type="number"
                name="korbanJiwa"
                value={formData.korbanJiwa}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Simpan Perubahan
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DataBencana;
