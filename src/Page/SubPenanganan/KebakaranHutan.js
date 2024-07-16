import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerBencana from "../../Image/Banner/KebakaranHutan.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/SpaceNight.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const options = [
  {
    name: "Penyebab",
    scroll: true,
    backdrop: true,
    title: "Penyebab Kebakaran Hutan",
    text: `
      Kebakaran hutan dapat disebabkan oleh beberapa faktor, baik alamiah maupun buatan manusia:
      <br><br>
      Penyebab Alamiah
      <li>Petir
        <ul>
          Petir yang menyambar pohon atau vegetasi kering dapat memicu kebakaran.
        </ul>
      </li>
      <li>Kondisi Cuaca Ekstrem
        <ul>
          Suhu tinggi, angin kencang, dan kelembaban rendah meningkatkan risiko kebakaran.
        </ul>
      </li>
      <li>Letusan Gunung Berapi
        <ul>
          Lava atau abu panas dari letusan gunung berapi bisa menyebabkan kebakaran.
        </ul>
      </li>
      <br>
      Penyebab Manusia
      <li>Pembakaran Terbuka
        <ul>
          Pembakaran sampah atau lahan yang tidak terkontrol bisa menyebar menjadi kebakaran hutan.
        </ul>
      </li>
      <li>Kegiatan Pertanian
        <ul>
          Pembukaan lahan dengan cara dibakar (slash-and-burn) untuk pertanian atau perkebunan.
        </ul>
      </li>
      <li>Kecelakaan
        <ul>
          Kebakaran akibat api unggun, puntung rokok, atau percikan api dari mesin yang tidak dipadamkan dengan benar.
        </ul>
      </li>
      <li>Sengaja Dibakar
        <ul>
          Kebakaran yang disengaja seperti pembalasan atau perusakan.
        </ul>
      </li>
    `,
  },
  {
    name: "Dampak",
    scroll: true,
    backdrop: true,
    title: "Dampak Kebakaran Hutan",
    text: `
      Kebakaran hutan memiliki berbagai dampak negatif, antara lain:
      <br><br>
      <li>Kerusakan Ekosistem
        <ul>
          Kebakaran hutan merusak habitat satwa liar, menghancurkan vegetasi, dan mengganggu keseimbangan ekosistem.
        </ul>
      </li>
      <li>Polusi Udara
        <ul>
          Asap dan partikel dari kebakaran hutan bisa menyebabkan polusi udara, mengganggu kesehatan manusia dengan gangguan pernapasan dan penyakit paru-paru.
        </ul>
      </li>
      <li>Perubahan Iklim
        <ul>
          Kebakaran hutan melepaskan karbon dioksida dan gas rumah kaca ke atmosfer, berkontribusi pada pemanasan global.
        </ul>
      </li>
      <li>Kerugian Ekonomi
        <ul>
          Kerusakan lahan pertanian, hutan produksi, dan infrastruktur menyebabkan kerugian ekonomi yang besar.
        </ul>
      </li>
      <li>Krisis Air
        <ul>
          Kebakaran hutan dapat mengurangi kualitas air dan ketersediaan sumber air bersih.
        </ul>
      </li>
      <li>Evakuasi dan Displacement
        <ul>
          Kebakaran besar bisa menyebabkan evakuasi massal dan kehilangan tempat tinggal bagi banyak orang.
        </ul>
      </li>
    `,
  },
];


const accordionItems1 = [
  {
    header: "Pencegahan Kebakaran",
    body: "Mengimplementasikan program pencegahan kebakaran hutan seperti pemeliharaan jalur pemisah api, patroli rutin, dan edukasi masyarakat.",
  },
  {
    header: "Perencanaan Penataan Ruang",
    body: "Mengembangkan perencanaan tata ruang yang mempertimbangkan risiko kebakaran hutan dan zona perlindungan.",
  },
  {
    header: "Pengelolaan Lahan",
    body: "Melakukan pengelolaan lahan yang berkelanjutan untuk mengurangi material bakar dan menciptakan zona defensif.",
  },
  {
    header: "Sistem Peringatan Dini",
    body: "Membangun dan memelihara sistem peringatan dini kebakaran hutan untuk mendeteksi awal dan merespons dengan cepat.",
  },
  {
    header: "Pelatihan dan Pendidikan",
    body: "Melakukan pelatihan reguler kepada petugas dan masyarakat dalam penanganan kebakaran hutan dan pencegahan.",
  },
  {
    header: "Kemitraan Komunitas",
    body: "Membangun kemitraan yang kuat antara pemerintah, komunitas lokal, dan sektor swasta untuk respons yang lebih efektif.",
  },
  {
    header: "Pengawasan dan Penegakan Hukum",
    body: "Meningkatkan pengawasan dan penegakan hukum terhadap aktivitas ilegal yang dapat memicu kebakaran hutan.",
  },
];

const accordionItems2 = [
  {
    header: "Tetap Tenang",
    body: "Tetap tenang dan jangan panik untuk dapat mengambil langkah-langkah yang tepat.",
  },
  {
    header: "Segera Evakuasi",
    body: "Segera evakuasi diri dan keluarga ke zona aman atau tempat perlindungan terdekat.",
  },
  {
    header: "Hindari Jalur Api",
    body: "Jauhi area yang terkena dampak langsung api atau kabut asap yang tebal.",
  },
  {
    header: "Dengarkan Instruksi Resmi",
    body: "Dengarkan instruksi dari petugas darurat dan otoritas setempat untuk langkah selanjutnya.",
  },
  {
    header: "Bantu Korban",
    body: "Bantu korban yang membutuhkan pertolongan darurat jika aman untuk melakukannya.",
  },
];

const accordionItems3 = [
  {
    header: "Penilaian Kerusakan",
    body: "Melakukan penilaian kerusakan untuk menentukan prioritas dan langkah pemulihan yang dibutuhkan.",
  },
  {
    header: "Rehabilitasi Ekosistem",
    body: "Memulihkan ekosistem yang terpengaruh oleh kebakaran hutan melalui reboisasi dan restorasi alami.",
  },
  {
    header: "Bantuan Kemanusiaan",
    body: "Menyediakan bantuan kemanusiaan seperti makanan, air bersih, dan tempat penampungan bagi korban.",
  },
  {
    header: "Dukungan Psikologis",
    body: "Memberikan dukungan psikologis kepada masyarakat yang mengalami dampak emosional akibat kebakaran hutan.",
  },
  {
    header: "Pemulihan Ekonomi",
    body: "Mendukung pemulihan ekonomi lokal dengan mendukung usaha kecil dan menstabilkan mata pencaharian masyarakat.",
  },
];

function KebakaranHutan() {
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
        <h1>Kebakaran Hutan</h1>
        <p className="Penjelasan">
          Kebakaran hutan adalah peristiwa di mana api menyebar dengan cepat
          melalui lahan yang tertutup vegetasi seperti hutan, padang rumput,
          atau lahan gambut. Kebakaran hutan dapat terjadi secara alami atau
          akibat aktivitas manusia, dan memiliki dampak yang signifikan terhadap
          lingkungan, ekonomi, dan kesehatan manusia.
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
              title="Respons saat Kebakaran Hutan Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Kebakaran Hutan:"
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

export default KebakaranHutan;
