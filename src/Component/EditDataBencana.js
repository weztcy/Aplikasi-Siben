import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDisasters } from "../redux/actions/disasterActions";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function EditDataBencana({ showEditModal, handleCloseEdit, editData }) {
  const dispatch = useDispatch();
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
    if (editData) {
      setFormData({
        tanggalBencana: editData.tanggal_bencana,
        provinsi: editData.provinsi,
        kotaKabupaten: editData.kota_kabupaten,
        alamatLokasi: editData.alamat_lokasi,
        bencanaAlam: editData.bencana_alam,
        penjelasanPenyebab: editData.penjelasan_penyebab,
        korbanJiwa: editData.korban_jiwa,
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      handleCloseEdit();
      dispatch(fetchDisasters());
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  return (
    <Modal show={showEditModal} onHide={handleCloseEdit}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data Bencana</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmitEdit}>
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="tanggalBencana"
          >
            <Form.Label>Tanggal Bencana</Form.Label>
            <Form.Control
              type="date"
              name="tanggalBencana"
              value={formData.tanggalBencana}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: "10px" }} controlId="provinsi">
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
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="kotaKabupaten"
          >
            <Form.Label>Kota / Kabupaten</Form.Label>
            <Form.Control
              type="text"
              name="kotaKabupaten"
              value={formData.kotaKabupaten}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: "10px" }} controlId="alamatLokasi">
            <Form.Label>Alamat Lokasi</Form.Label>
            <Form.Control
              type="text"
              name="alamatLokasi"
              value={formData.alamatLokasi}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: "10px" }} controlId="bencanaAlam">
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
          <Form.Group
            style={{ marginBottom: "10px" }}
            controlId="penjelasanPenyebab"
          >
            <Form.Label>Penjelasan Penyebab</Form.Label>
            <Form.Control
              type="text"
              name="penjelasanPenyebab"
              value={formData.penjelasanPenyebab}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: "10px" }} controlId="korbanJiwa">
            <Form.Label>Korban Jiwa</Form.Label>
            <Form.Control
              type="number"
              name="korbanJiwa"
              value={formData.korbanJiwa}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ width: "100%", marginTop: "20px", height: "60px" }}
          >
            Simpan Perubahan
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditDataBencana;