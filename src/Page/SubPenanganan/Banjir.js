import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerBencana from "../../Image/Banner/Banjir.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/SpaceNight.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const options = [
  {
    name: "Penyebab",
    scroll: true,
    backdrop: true,
    title: "Penyebab Banjir",
    text: `
      Banjir bisa disebabkan oleh beberapa faktor, di antaranya:
      <br><br>
      <li>Curah Hujan yang Tinggi
        <ul>
          Hujan lebat dalam waktu singkat atau hujan yang berlangsung lama dapat menyebabkan banjir, terutama jika tanah tidak dapat menyerap air dengan cukup cepat.
        </ul>
      </li>
      <li>Sungai Meluap
        <ul>
          Sungai bisa meluap karena hujan deras, salju yang mencair, atau kombinasi keduanya, menyebabkan air mengalir ke daratan sekitarnya.
        </ul>
      </li>
      <li>Banjir Pantai
        <ul>
          Gelombang pasang, badai, atau tsunami bisa menyebabkan air laut naik dan menggenangi daerah pesisir.
        </ul>
      </li>
      <li>Tanggul atau Bendungan Jebol
        <ul>
          Tanggul atau bendungan yang rusak atau jebol bisa menyebabkan air mengalir dengan cepat dan menggenangi daerah di sekitarnya.
        </ul>
      </li>
      <li>Drainase yang Buruk
        <ul>
          Sistem drainase yang tidak memadai atau tersumbat bisa menyebabkan air hujan tidak mengalir dengan lancar, sehingga terjadi genangan.
        </ul>
      </li>
      <li>Penebangan Hutan
        <ul>
          Deforestasi mengurangi kemampuan tanah untuk menyerap air hujan, sehingga meningkatkan risiko banjir.
        </ul>
      </li>
    `,
  },
  {
    name: "Jenis",
    scroll: true,
    backdrop: true,
    title: "Jenis-jenis Banjir",
    text: `
      Berikut adalah jenis-jenis banjir:
      <br><br>
      <li>Banjir Bandang
        <ul>
          Banjir yang terjadi secara tiba-tiba dengan aliran air yang sangat cepat. Biasanya disebabkan oleh hujan deras atau tanggul jebol.
        </ul>
      </li>
      <li>Banjir Sungai
        <ul>
          Terjadi ketika sungai meluap karena curah hujan yang tinggi atau salju yang mencair.
        </ul>
      </li>
      <li>Banjir Pasang
        <ul>
          Terjadi di daerah pesisir karena gelombang tinggi, badai, atau tsunami.
        </ul>
      </li>
      <li>Banjir Daerah Rendah
        <ul>
          Genangan air di daerah yang topografinya rendah, sering kali disebabkan oleh drainase yang buruk.
        </ul>
      </li>
    `,
  },
  {
    name: "Dampak",
    scroll: true,
    backdrop: true,
    title: "Dampak Banjir",
    text: `
      Banjir dapat memiliki berbagai dampak negatif, antara lain:
      <br><br>
      <li>Kerusakan Infrastruktur
        <ul>
          Jalan, jembatan, bangunan, dan fasilitas umum bisa rusak atau hancur akibat banjir.
        </ul>
      </li>
      <li>Korban Jiwa dan Luka-luka
        <ul>
          Banjir bisa menyebabkan korban jiwa dan cedera karena arus air yang kuat dan puing-puing yang terbawa.
        </ul>
      </li>
      <li>Kerugian Ekonomi
        <ul>
          Banjir dapat merusak lahan pertanian, mengganggu aktivitas bisnis, dan menyebabkan kerugian ekonomi yang besar.
        </ul>
      </li>
      <li>Kesehatan Masyarakat
        <ul>
          Air banjir bisa membawa penyakit menular, seperti kolera dan leptospirosis, serta meningkatkan risiko infeksi.
        </ul>
      </li>
      <li>Lingkungan
        <ul>
          Banjir dapat merusak habitat satwa liar dan mengakibatkan pencemaran lingkungan akibat bahan kimia dan limbah yang terbawa air.
        </ul>
      </li>
    `,
  },
];


const accordionItems1 = [
  {
    header: "Pendidikan dan Kesadaran",
    body: "Meningkatkan kesadaran masyarakat tentang risiko banjir dan cara mengantisipasi serta mengurangi dampaknya.",
  },
  {
    header: "Perencanaan Tata Ruang",
    body: "Mengembangkan regulasi tata ruang yang mempertimbangkan potensi banjir, termasuk zona evakuasi dan pembatasan pembangunan di daerah rawan.",
  },
  {
    header: "Drainase dan Infrastruktur",
    body: "Meningkatkan sistem drainase dan infrastruktur penanganan air hujan untuk mengurangi risiko banjir.",
  },
  {
    header: "Peringatan Dini",
    body: "Membangun dan memelihara sistem peringatan dini banjir yang efektif untuk memberi waktu yang cukup bagi masyarakat untuk mengambil tindakan.",
  },
  {
    header: "Evakuasi",
    body: "Mengembangkan rencana evakuasi yang jelas dan melakukan simulasi secara berkala.",
  },
  {
    header: "Pendidikan Penanganan Darurat",
    body: "Melatih masyarakat dalam keterampilan penanganan darurat seperti penyelamatan diri dan pertolongan pertama.",
  },
  {
    header: "Penguatan Bangunan",
    body: "Menggalakkan penggunaan bahan bangunan tahan air dan mengangkat bangunan di daerah rawan banjir.",
  },
  {
    header: "Komitmen Komunitas",
    body: "Mendorong partisipasi aktif masyarakat dalam program mitigasi banjir dan pemantauan kondisi sungai serta saluran air.",
  },
];

const accordionItems2 = [
  {
    header: "Tetap Tenang",
    body: "Jangan panik, tetap tenang untuk dapat mengambil keputusan yang tepat dan cepat.",
  },
  {
    header: "Pindah ke Tempat Aman",
    body: "Segera pindah ke tempat yang lebih tinggi atau ke zona evakuasi yang telah ditentukan.",
  },
  {
    header: "Jauhi Air Mengalir",
    body: "Hindari kontak langsung dengan air mengalir yang dapat membawa material berbahaya.",
  },
  {
    header: "Dengarkan Informasi Terbaru",
    body: "Dengarkan radio atau sumber informasi lainnya untuk informasi terbaru dan instruksi dari pihak berwenang.",
  },
  {
    header: "Bantu Korban",
    body: "Berikan pertolongan pertama kepada korban yang terluka dan membutuhkan bantuan.",
  },
];

const accordionItems3 = [
  {
    header: "Penilaian Kerusakan",
    body: "Melakukan penilaian kerusakan untuk menentukan langkah-langkah pemulihan yang dibutuhkan.",
  },
  {
    header: "Pembersihan dan Perbaikan",
    body: "Membersihkan dan memulihkan infrastruktur yang rusak serta membersihkan lumpur dan puing-puing.",
  },
  {
    header: "Bantuan Kemanusiaan",
    body: "Menyediakan bantuan kemanusiaan seperti makanan, air bersih, dan tempat penampungan sementara.",
  },
  {
    header: "Dukungan Psikologis",
    body: "Memberikan dukungan psikologis kepada korban untuk membantu mereka pulih dari trauma yang dialami.",
  },
  {
    header: "Pemulihan Ekonomi",
    body: "Mendukung pemulihan ekonomi lokal dengan membangun kembali usaha kecil dan menstabilkan mata pencaharian masyarakat.",
  },
  {
    header: "Evaluasi dan Pembelajaran",
    body: "Mengevaluasi respons terhadap banjir dan memperbaiki sistem mitigasi serta kesiapsiagaan untuk kejadian banjir masa depan.",
  },
];

function Banjir() {
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
        <h1>Banjir</h1>
        <p className="Penjelasan">
          Banjir adalah peristiwa alam di mana air meluap atau menggenangi
          daratan yang biasanya kering. Banjir dapat terjadi karena berbagai
          penyebab dan memiliki dampak yang signifikan terhadap lingkungan,
          infrastruktur, dan masyarakat.
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
              title="Respons saat Banjir Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Banjir:"
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

export default Banjir;
