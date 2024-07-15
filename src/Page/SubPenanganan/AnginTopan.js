import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerBencana from "../../Image/Banner/AnginTopan.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/SpaceNight.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const options = [
  {
    name: "Penyebab",
    scroll: true,
    backdrop: true,
    title: "Penyebab Angin Topan",
    text: `
      Angin topan terbentuk melalui beberapa proses, antara lain:
      <br><br>
      <li>Suhu Permukaan Laut yang Hangat
        <ul>
          Angin topan membutuhkan air laut yang hangat (biasanya lebih dari 26,5°C) untuk membentuk dan mempertahankan energinya.
        </ul>
      </li>
      <li>Kelembaban Tinggi
        <ul>
          Kelembaban tinggi di atmosfer bagian bawah membantu pembentukan awan dan hujan yang intens.
        </ul>
      </li>
      <li>Gangguan Atmosfer
        <ul>
          Gelombang tropis atau gangguan lain di atmosfer dapat memicu pembentukan angin topan.
        </ul>
      </li>
      <li>Rotasi Bumi
        <ul>
          Efek Coriolis yang disebabkan oleh rotasi bumi membantu angin topan berputar.
        </ul>
      </li>
      <li>Perbedaan Tekanan Udara
        <ul>
          Perbedaan tekanan antara pusat rendah dan daerah sekitarnya menyebabkan angin berhembus ke arah pusat topan, menciptakan angin yang sangat kuat.
        </ul>
      </li>
    `,
  },
  {
    name: "Struktur",
    scroll: true,
    backdrop: true,
    title: "Struktur Angin Topan",
    text: `
      Angin topan memiliki struktur yang khas, yang terdiri dari:
      <br><br>
      <li>Mata Topan
        <ul>
          Area tenang di pusat angin topan dengan cuaca relatif baik dan tekanan udara yang sangat rendah.
        </ul>
      </li>
      <li>Dinding Mata Topan
        <ul>
          Zona di sekitar mata yang terdiri dari awan tebal, hujan lebat, dan angin terkuat. Dinding mata adalah bagian paling berbahaya dari topan.
        </ul>
      </li>
      <li>Badan Topan
        <ul>
          Wilayah di luar dinding mata yang terdiri dari pita awan spiral dengan hujan deras dan angin kencang.
        </ul>
      </li>
    `,
  },
  {
    name: "Kategori",
    scroll: true,
    backdrop: true,
    title: "Kategori Angin Topan",
    text: `
      Angin topan dikategorikan berdasarkan kecepatan anginnya menggunakan Skala Saffir-Simpson:
      <br><br>
      <li>Kategori 1
      <ul>
        Kecepatan angin 119-153 km/jam
      </ul>
      </li>
      <li>Kategori 2
        <ul>
          Kecepatan angin 154-177 km/jam
        </ul>
      </li>
      <li>Kategori 3
        <ul>
          Kecepatan angin 178-208 km/jam
        </ul>
      </li>
      <li>Kategori 4
        <ul>
          Kecepatan angin 209-251 km/jam
        </ul>
      </li>
      <li>Kategori 5
        <ul>
          Kecepatan angin lebih dari 251 km/jam
        </ul>
      </li>
    `,
  },
  {
    name: "Dampak",
    scroll: true,
    backdrop: true,
    title: "Dampak Angin Topan",
    text: `
      Angin topan dapat menyebabkan berbagai dampak, antara lain:
      <br><br>
      <li>Kerusakan Infrastruktur
        <ul>
          Angin kencang dan hujan deras dapat merusak bangunan, jembatan, jalan, dan infrastruktur lainnya.
        </ul>
      </li>
      <li>Banjir
        <ul>
          Hujan lebat dan gelombang pasang dapat menyebabkan banjir parah di wilayah pesisir dan daratan rendah.
        </ul>
      </li>
      <li>Korban Jiwa dan Cedera
        <ul>
          Angin topan bisa menyebabkan banyak korban jiwa dan luka-luka akibat runtuhan bangunan, banjir, dan puing-puing yang terbawa angin.
        </ul>
      </li>
      <li>Gangguan Listrik dan Komunikasi
        <ul>
          Angin kencang dapat merusak jaringan listrik dan komunikasi, menyebabkan pemadaman listrik dan gangguan komunikasi.
        </ul>
      </li>
      <li>Kerugian Ekonomi
        <ul>
          Kerusakan properti, lahan pertanian, dan gangguan bisnis dapat menyebabkan kerugian ekonomi yang besar.
        </ul>
      </li>
    `,
  },
];

const accordionItems1 = [
  {
    header: "Pendidikan dan Kesadaran",
    body: "Meningkatkan kesadaran masyarakat tentang risiko angin topan dan langkah-langkah persiapan yang harus diambil.",
  },
  {
    header: "Perencanaan Rumah Tangga",
    body: "Mengembangkan rencana darurat keluarga yang mencakup tempat persembunyian dan persediaan darurat.",
  },
  {
    header: "Perkuatan Bangunan",
    body: "Memastikan bangunan memenuhi standar ketahanan terhadap angin topan, termasuk pemasangan jendela tahan angin dan struktur atap yang kuat.",
  },
  {
    header: "Sistem Peringatan Dini",
    body: "Membangun dan memelihara sistem peringatan dini angin topan untuk memberi waktu reaksi yang cukup kepada masyarakat.",
  },
  {
    header: "Evakuasi",
    body: "Mengembangkan rencana evakuasi yang jelas dan melatih masyarakat untuk merespons dengan cepat saat perlu dievakuasi.",
  },
  {
    header: "Penyediaan Perlengkapan Darurat",
    body: "Menyediakan perlengkapan darurat seperti senter, baterai cadangan, makanan, air bersih, dan obat-obatan.",
  },
  {
    header: "Pendataan Komunitas",
    body: "Mengumpulkan informasi dan mendata komunitas untuk mempermudah proses evakuasi dan bantuan setelah angin topan.",
  },
];

const accordionItems2 = [
  {
    header: "Tetap Tenang",
    body: "Pertahankan ketenangan untuk dapat mengambil keputusan yang tepat dan efektif.",
  },
  {
    header: "Masuk ke Tempat Persembunyian",
    body: "Segera masuk ke tempat persembunyian terdekat atau bangunan yang aman dari dampak angin topan.",
  },
  {
    header: "Jauhi Jendela dan Pintu",
    body: "Hindari jendela dan pintu, dan cari tempat di dalam ruangan yang paling aman.",
  },
  {
    header: "Dengarkan Informasi Terbaru",
    body: "Dengarkan radio atau sumber informasi lainnya untuk informasi terbaru dan instruksi dari pihak berwenang.",
  },
  {
    header: "Bantu Korban",
    body: "Berikan pertolongan pertama kepada korban yang terluka jika aman untuk melakukannya.",
  },
];

const accordionItems3 = [
  {
    header: "Penilaian Kerusakan",
    body: "Melakukan penilaian kerusakan untuk menentukan langkah-langkah pemulihan yang diperlukan.",
  },
  {
    header: "Pembersihan dan Perbaikan",
    body: "Membersihkan puing-puing dan memulihkan infrastruktur yang rusak untuk memulai proses pemulihan.",
  },
  {
    header: "Bantuan Kemanusiaan",
    body: "Menyediakan bantuan kemanusiaan seperti makanan, air bersih, dan perlindungan bagi yang terdampak.",
  },
  {
    header: "Dukungan Psikologis",
    body: "Memberikan dukungan psikologis kepada korban untuk membantu mereka pulih dari trauma yang dialami.",
  },
  {
    header: "Perbaikan Sistem Peringatan",
    body: "Meningkatkan dan memperbaiki sistem peringatan dini serta infrastruktur yang mendukung mitigasi angin topan di masa depan.",
  },
];

function AnginTopan() {
  const contentStyle = {
    position: "relative",
    zIndex: 0,
    color: "white",
    textAlign: "center",
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: "50px",
  };
  const buttonStyle = {
    flex: "1 1 calc(33.333% - 10px)",
    boxSizing: "border-box",
  };
  return (
    <div className="SubPenanganan" style={contentStyle}>
      <BackgroundVideo src={bgvideo} />
      <BannerPhoto imageUrl={BannerBencana} />
      <NavigationBar />
      <Container fluid>
        <h1>Angin Topan</h1>
        <p className="Penjelasan">
          Angin topan, juga dikenal sebagai siklon tropis, adalah sistem cuaca
          bertekanan rendah yang kuat yang terbentuk di lautan tropis dan
          subtropis. Angin topan ditandai dengan angin kencang, hujan deras, dan
          sering kali gelombang besar. Angin topan dapat menyebabkan kerusakan
          yang signifikan di wilayah yang dilaluinya.
        </p>
        <div style={containerStyle}>
          {options.map((option, index) => (
            <div style={buttonStyle} key={index}>
              <BencanaOffcard {...option} />
            </div>
          ))}
        </div>

        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Mitigasi dan Kesiapsiagaan:"
              imageSrc={step1Image}
              accordionItems={accordionItems1}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Respons saat Angin Topan Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Angin Topan:"
              imageSrc={step3Image}
              accordionItems={accordionItems3}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default AnginTopan;
