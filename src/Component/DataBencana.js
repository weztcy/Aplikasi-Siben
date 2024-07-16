// src/components/DataBencana.js

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDisasters } from "../redux/actions/disasterActions";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function DataBencana({ itemsPerPage }) {
  const dispatch = useDispatch();
  const disasterState = useSelector((state) => state.disaster);
  const { data, loading, error } = disasterState;
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
    dispatch(fetchDisasters());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://siben.inihikam.my.id/disasters/${id}`);
      dispatch(fetchDisasters());
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
      await axios.put(`https://siben.inihikam.my.id/disasters/${editData.id}`, {
        tanggal_bencana: formData.tanggalBencana,
        provinsi: formData.provinsi,
        kota_kabupaten: formData.kotaKabupaten,
        alamat_lokasi: formData.alamatLokasi,
        bencana_alam: formData.bencanaAlam,
        penjelasan_penyebab: formData.penjelasanPenyebab,
        korban_jiwa: formData.korbanJiwa,
      });
      setShowEditModal(false);
      dispatch(fetchDisasters());
      setFormData({
        tanggalBencana: "",
        provinsi: "",
        kotaKabupaten: "",
        alamatLokasi: "",
        bencanaAlam: "",
        penjelasanPenyebab: "",
        korbanJiwa: 0,
      });
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
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://siben.inihikam.my.id/disasters", {
        tanggal_bencana: formData.tanggalBencana,
        provinsi: formData.provinsi,
        kota_kabupaten: formData.kotaKabupaten,
        alamat_lokasi: formData.alamatLokasi,
        bencana_alam: formData.bencanaAlam,
        penjelasan_penyebab: formData.penjelasanPenyebab,
        korban_jiwa: formData.korbanJiwa,
      });
      setShowModal(false);
      dispatch(fetchDisasters());
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div style={{ marginTop: "-25px", width: "1500px" }}>
      <Button
        variant="success"
        onClick={() => setShowModal(true)}
        style={{ width: "600px", height: "60px", marginBottom: "20px" }}
      >
        Tambah Data Bencana
      </Button>
      <Table striped bordered hover>
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
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
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
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Data Bencana</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="tanggalBencana">
              <Form.Label>Tanggal Bencana</Form.Label>
              <Form.Control
                type="date"
                name="tanggalBencana"
                value={formData.tanggalBencana}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="provinsi">
              <Form.Label>Provinsi</Form.Label>
              <Form.Control
                as="select"
                name="provinsi"
                value={formData.provinsi}
                onChange={handleChange}
              >
                <option value="">Pilih Provinsi</option>
                <option value="Bali">Bali</option>
                <option value="Bangka Belitung">Bangka Belitung</option>
                <option value="Banten">Banten</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="Daerah Istimewa Yogyakarta">
                  Daerah Istimewa Yogyakarta
                </option>
                <option value="DKI Jakarta">DKI Jakarta</option>
                <option value="Gorontalo">Gorontalo</option>
                <option value="Jambi">Jambi</option>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="Jawa Timur">Jawa Timur</option>
                <option value="Kalimantan Barat">Kalimantan Barat</option>
                <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                <option value="Kalimantan Timur">Kalimantan Timur</option>
                <option value="Kalimantan Utara">Kalimantan Utara</option>
                <option value="Kepulauan Riau">Kepulauan Riau</option>
                <option value="Lampung">Lampung</option>
                <option value="Maluku">Maluku</option>
                <option value="Maluku Utara">Maluku Utara</option>
                <option value="Nanggroe Aceh Darussalam">
                  Nanggroe Aceh Darussalam
                </option>
                <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                <option value="Papua">Papua</option>
                <option value="Papua Barat">Papua Barat</option>
                <option value="Papua Barat Daya">Papua Barat Daya</option>
                <option value="Papua Pegunungan">Papua Pegunungan</option>
                <option value="Papua Selatan">Papua Selatan</option>
                <option value="Papua Tengah">Papua Tengah</option>
                <option value="Riau">Riau</option>
                <option value="Sulawesi Barat">Sulawesi Barat</option>
                <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                <option value="Sulawesi Utara">Sulawesi Utara</option>
                <option value="Sumatera Barat">Sumatera Barat</option>
                <option value="Sumatera Selatan">Sumatera Selatan</option>
                <option value="Sumatera Utara">Sumatera Utara</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="kotaKabupaten">
              <Form.Label>Kota / Kabupaten</Form.Label>
              <Form.Control
                type="text"
                name="kotaKabupaten"
                value={formData.kotaKabupaten}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="alamatLokasi">
              <Form.Label>Alamat Lokasi</Form.Label>
              <Form.Control
                type="text"
                name="alamatLokasi"
                value={formData.alamatLokasi}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="bencanaAlam">
              <Form.Label>Bencana Alam</Form.Label>
              <Form.Control
                as="select"
                name="bencanaAlam"
                value={formData.bencanaAlam}
                onChange={handleChange}
              >
                <option value="">Pilih Bencana</option>
                <option value="Gempa Bumi">Gempa Bumi</option>
                <option value="Tsunami">Tsunami</option>
                <option value="Gunung Meletus">Gunung Meletus</option>
                <option value="Banjir">Banjir</option>
                <option value="Tanah Longsor">Tanah Longsor</option>
                <option value="Angin Topan">Angin Topan</option>
                <option value="Kekeringan">Kekeringan</option>
                <option value="Kebakaran Hutan">Kebakaran Hutan</option>
                <option value="Gelombang Panas">Gelombang Panas</option>
                <option value="Badai Petir">Badai Petir</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="penjelasanPenyebab">
              <Form.Label>Penjelasan Penyebab</Form.Label>
              <Form.Control
                type="text"
                name="penjelasanPenyebab"
                value={formData.penjelasanPenyebab}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="korbanJiwa">
              <Form.Label>Korban Jiwa</Form.Label>
              <Form.Control
                type="number"
                name="korbanJiwa"
                value={formData.korbanJiwa}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data Bencana</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEdit}>
            <Form.Group controlId="tanggalBencana">
              <Form.Label>Tanggal Bencana</Form.Label>
              <Form.Control
                type="date"
                name="tanggalBencana"
                value={formData.tanggalBencana}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="provinsi">
              <Form.Label>Provinsi</Form.Label>
              <Form.Control
                as="select"
                name="provinsi"
                value={formData.provinsi}
                onChange={handleChange}
              >
                <option value="">Pilih Provinsi</option>
                <option value="Bali">Bali</option>
                <option value="Bangka Belitung">Bangka Belitung</option>
                <option value="Banten">Banten</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="Daerah Istimewa Yogyakarta">
                  Daerah Istimewa Yogyakarta
                </option>
                <option value="DKI Jakarta">DKI Jakarta</option>
                <option value="Gorontalo">Gorontalo</option>
                <option value="Jambi">Jambi</option>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="Jawa Timur">Jawa Timur</option>
                <option value="Kalimantan Barat">Kalimantan Barat</option>
                <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                <option value="Kalimantan Timur">Kalimantan Timur</option>
                <option value="Kalimantan Utara">Kalimantan Utara</option>
                <option value="Kepulauan Riau">Kepulauan Riau</option>
                <option value="Lampung">Lampung</option>
                <option value="Maluku">Maluku</option>
                <option value="Maluku Utara">Maluku Utara</option>
                <option value="Nanggroe Aceh Darussalam">
                  Nanggroe Aceh Darussalam
                </option>
                <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                <option value="Papua">Papua</option>
                <option value="Papua Barat">Papua Barat</option>
                <option value="Papua Barat Daya">Papua Barat Daya</option>
                <option value="Papua Pegunungan">Papua Pegunungan</option>
                <option value="Papua Selatan">Papua Selatan</option>
                <option value="Papua Tengah">Papua Tengah</option>
                <option value="Riau">Riau</option>
                <option value="Sulawesi Barat">Sulawesi Barat</option>
                <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                <option value="Sulawesi Utara">Sulawesi Utara</option>
                <option value="Sumatera Barat">Sumatera Barat</option>
                <option value="Sumatera Selatan">Sumatera Selatan</option>
                <option value="Sumatera Utara">Sumatera Utara</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="kotaKabupaten">
              <Form.Label>Kota / Kabupaten</Form.Label>
              <Form.Control
                type="text"
                name="kotaKabupaten"
                value={formData.kotaKabupaten}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="alamatLokasi">
              <Form.Label>Alamat Lokasi</Form.Label>
              <Form.Control
                type="text"
                name="alamatLokasi"
                value={formData.alamatLokasi}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="bencanaAlam">
              <Form.Label>Bencana Alam</Form.Label>
              <Form.Control
                as="select"
                name="bencanaAlam"
                value={formData.bencanaAlam}
                onChange={handleChange}
              >
                <option value="">Pilih Bencana</option>
                <option value="Gempa Bumi">Gempa Bumi</option>
                <option value="Tsunami">Tsunami</option>
                <option value="Gunung Meletus">Gunung Meletus</option>
                <option value="Banjir">Banjir</option>
                <option value="Tanah Longsor">Tanah Longsor</option>
                <option value="Angin Topan">Angin Topan</option>
                <option value="Kekeringan">Kekeringan</option>
                <option value="Kebakaran Hutan">Kebakaran Hutan</option>
                <option value="Gelombang Panas">Gelombang Panas</option>
                <option value="Badai Petir">Badai Petir</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="penjelasanPenyebab">
              <Form.Label>Penjelasan Penyebab</Form.Label>
              <Form.Control
                type="text"
                name="penjelasanPenyebab"
                value={formData.penjelasanPenyebab}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="korbanJiwa">
              <Form.Label>Korban Jiwa</Form.Label>
              <Form.Control
                type="number"
                name="korbanJiwa"
                value={formData.korbanJiwa}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DataBencana;