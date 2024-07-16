import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerBencana from "../../Image/Banner/Kekeringan.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/SpaceNight.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const options = [
  {
    name: "Penyebab",
    scroll: true,
    backdrop: true,
    title: "Penyebab Kekeringan",
    text: `
      Kekeringan dapat disebabkan oleh berbagai faktor, baik alamiah maupun buatan manusia, seperti:
      <br><br>
      <li>Curah Hujan Rendah
        <ul>
          Kurangnya curah hujan yang berkepanjangan adalah penyebab utama kekeringan.
        </ul>
      </li>
      <li>Perubahan Iklim
        <ul>
          Perubahan pola cuaca akibat pemanasan global dapat menyebabkan periode kekeringan yang lebih sering dan parah.
        </ul>
      </li>
      <li>Penggundulan Hutan
        <ul>
          Penebangan pohon secara besar-besaran mengurangi kemampuan tanah untuk menyimpan air, mempercepat terjadinya kekeringan.
        </ul>
      </li>
      <li>Overirigasi
        <ul>
          Penggunaan air berlebihan untuk irigasi pertanian dapat menguras sumber air yang tersedia.
        </ul>
      </li>
      <li>Pengelolaan Air yang Buruk
        <ul>
          Sistem pengelolaan air yang tidak efisien dapat menyebabkan pemborosan air dan memperburuk kondisi kekeringan.
        </ul>
      </li>
      <li>Kegiatan Manusia
        <ul>
          Urbanisasi, industri, dan pertanian tidak berkelanjutan dapat menguras sumber air dan memperparah kekeringan.
        </ul>
      </li>
    `,
  },
  {
    name: "Jenis",
    scroll: true,
    backdrop: true,
    title: "Jenis-jenis Kekeringan",
    text: `
      Berikut adalah jenis-jenis kekeringan:
      <br><br>
      <li>Kekeringan Meteorologis
        <ul>
          Kurangnya curah hujan dibandingkan dengan rata-rata jangka panjang di suatu daerah.
        </ul>
      </li>
      <li>Kekeringan Hidrologis
        <ul>
          Terjadi ketika sumber air permukaan dan bawah tanah, seperti sungai dan akuifer, menurun ke tingkat yang sangat rendah.
        </ul>
      </li>
      <li>Kekeringan Pertanian
        <ul>
          Kekurangan air tanah dan kelembaban tanah yang mempengaruhi tanaman dan hasil pertanian.
        </ul>
      </li>
      <li>Kekeringan Sosioekonomi
        <ul>
          Permintaan air melebihi pasokan yang tersedia, mengganggu kehidupan sosial dan ekonomi masyarakat.
        </ul>
      </li>
    `,
  },
  {
    name: "Dampak",
    scroll: true,
    backdrop: true,
    title: "Dampak Kekeringan",
    text: `
      Kekeringan dapat menyebabkan berbagai dampak negatif, antara lain:
      <br><br>
      <li>Kerugian Pertanian
        <ul>
          Mengurangi hasil panen, menyebabkan gagal panen, dan merusak tanaman, berdampak pada pendapatan petani dan pasokan makanan.
        </ul>
      </li>
      <li>Krisis Air
        <ul>
          Kekurangan air minum bersih dapat menyebabkan krisis kesehatan dan sanitasi.
        </ul>
      </li>
      <li>Kebakaran Hutan
        <ul>
          Risiko kebakaran hutan meningkat karena vegetasi menjadi kering dan mudah terbakar.
        </ul>
      </li>
      <li>Kerusakan Ekosistem
        <ul>
          Mengganggu habitat satwa liar dan menyebabkan kematian massal hewan serta tanaman.
        </ul>
      </li>
      <li>Gangguan Ekonomi
        <ul>
          Menyebabkan kerugian ekonomi signifikan di sektor pertanian, peternakan, dan industri yang bergantung pada air.
        </ul>
      </li>
      <li>Migrasi dan Konflik
        <ul>
          Kekurangan air dapat memicu migrasi massal dan konflik sosial antara komunitas yang bersaing untuk mendapatkan sumber air.
        </ul>
      </li>
    `,
  },
];


const accordionItems1 = [
  {
    header: "Konservasi Air",
    body: "Mendorong konservasi air melalui pendidikan dan program penghematan air untuk mengurangi kebutuhan air.",
  },
  {
    header: "Diversifikasi Sumber Air",
    body: "Mengembangkan sumber-sumber air alternatif seperti sumur dangkal, penampungan air hujan, atau desalinasi air laut.",
  },
  {
    header: "Pengelolaan Sumber Daya Air",
    body: "Meningkatkan pengelolaan sumber daya air dengan mengatur penggunaan air secara efisien dan adil.",
  },
  {
    header: "Perencanaan Pertanian Berkelanjutan",
    body: "Mengembangkan praktik pertanian berkelanjutan yang lebih efisien dalam penggunaan air.",
  },
  {
    header: "Pendataan Dan Pemantauan Kondisi",
    body: "Melakukan pendataan dan pemantauan kondisi tanah dan sumber air secara berkala untuk mendeteksi potensi kekeringan.",
  },
  {
    header: "Pendidikan Masyarakat",
    body: "Meningkatkan kesadaran masyarakat tentang pentingnya konservasi air dan langkah-langkah mitigasi kekeringan.",
  },
  {
    header: "Kemitraan dan Kolaborasi",
    body: "Membangun kemitraan antara pemerintah, masyarakat, dan sektor swasta untuk mengelola kekeringan secara efektif.",
  },
];

const accordionItems2 = [
  {
    header: "Penghematan Air",
    body: "Mendorong masyarakat untuk menghemat penggunaan air dengan membatasi penggunaan air untuk keperluan penting saja.",
  },
  {
    header: "Distribusi Air Bersih",
    body: "Mengatur distribusi air bersih kepada komunitas yang terdampak kekeringan.",
  },
  {
    header: "Bantuan Kemanusiaan",
    body: "Menyediakan bantuan kemanusiaan seperti makanan dan air bersih kepada mereka yang paling terdampak.",
  },
  {
    header: "Edukasi Mengenai Kesehatan",
    body: "Memberikan edukasi mengenai kesehatan terkait kekeringan dan penyakit yang dapat timbul akibat kondisi tersebut.",
  },
];

const accordionItems3 = [
  {
    header: "Penilaian Kebutuhan",
    body: "Melakukan penilaian kebutuhan masyarakat dan infrastruktur untuk menentukan prioritas pemulihan.",
  },
  {
    header: "Rehabilitasi Sumber Daya Air",
    body: "Melakukan rehabilitasi sumber daya air dan pengembalian fungsi ekosistem yang terpengaruh oleh kekeringan.",
  },
  {
    header: "Pendukung Psikologis",
    body: "Memberikan dukungan psikologis kepada masyarakat yang mengalami dampak psikologis akibat kekeringan.",
  },
  {
    header: "Pengembangan Kelembagaan",
    body: "Menguatkan kelembagaan dan kapasitas lokal dalam menghadapi kekeringan di masa mendatang.",
  },
  {
    header: "Evaluasi dan Pembelajaran",
    body: "Mengevaluasi respons terhadap kekeringan dan memperbaiki sistem mitigasi serta kesiapsiagaan untuk kejadian serupa di masa depan.",
  },
];

function Kekeringan() {
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
        <h1>Kekeringan</h1>
        <p className="Penjelasan">
          Kekeringan adalah kondisi cuaca di mana terjadi kekurangan air yang
          berkepanjangan dan di bawah tingkat normal, biasanya disebabkan oleh
          curah hujan yang sangat sedikit atau tidak ada sama sekali. Kekeringan
          dapat memiliki dampak serius terhadap lingkungan, pertanian, pasokan
          air, dan kehidupan manusia.
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
              title="Respons saat Kekeringan Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Kekeringan:"
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

export default Kekeringan;
