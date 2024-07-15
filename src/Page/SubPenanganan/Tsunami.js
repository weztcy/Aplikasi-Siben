import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerBencana from "../../Image/Banner/Tsunami.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/SpaceNight.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const options = [
  {
    name: "Penyebab",
    scroll: true,
    backdrop: true,
    title: "Penyebab Tsunami",
    text: `
      Beberapa penyebab utama tsunami meliputi:
      <br><br>
      <li>Gempa Bumi Bawah Laut
        <ul>
          Ini adalah penyebab paling umum dari tsunami. Ketika gempa bumi terjadi di bawah laut, perubahan mendadak di dasar laut menyebabkan pergeseran besar volume air, menghasilkan gelombang yang bisa menyebar ke seluruh lautan.
        </ul>
      </li>
      <li>Letusan Gunung Berapi
        <ul>
          Letusan gunung berapi bawah laut atau di dekat pantai bisa memindahkan sejumlah besar air, memicu tsunami.
        </ul>
      </li>
      <li>Tanah Longsor Bawah Laut
        <ul>
          Tanah longsor di dasar laut atau di tepi pantai bisa menggeser air secara tiba-tiba, menyebabkan gelombang tsunami.
        </ul>
      </li>
      <li>Dampak Meteorit
        <ul>
          Meskipun jarang, dampak meteorit besar yang jatuh ke laut dapat menyebabkan tsunami.
        </ul>
      </li>
    `,
  },
  {
    name: "Mekanisme",
    scroll: true,
    backdrop: true,
    title: "Mekanisme Terjadinya Tsunami",
    text: `
      Tsunami terjadi melalui beberapa tahapan mekanisme:
      <br><br>
      <li>Inisiasi
        <ul>
          Gempa bumi atau gangguan lainnya menyebabkan perpindahan besar volume air.
        </ul>
      </li>
      <li>Propagasi
        <ul>
          Gelombang tsunami mulai menyebar dari sumbernya dengan kecepatan tinggi, sering kali lebih dari 800 km/jam di laut dalam.
        </ul>
      </li>
      <li>Amplifikasi
        <ul>
          Saat gelombang mendekati pantai, kedalaman air yang menurun menyebabkan gelombang melambat dan tinggi gelombang meningkat secara drastis.
        </ul>
      </li>
      <li>Inundasi
        <ul>
          Gelombang tsunami menghantam pantai, membanjiri daratan dengan air dan membawa puing-puing, sering kali menyebabkan kerusakan besar.
        </ul>
      </li>
    `,
  },
  {
    name: "Dampak",
    scroll: true,
    backdrop: true,
    title: "Dampak Tsunami",
    text: `
      Tsunami bisa menyebabkan berbagai dampak yang merugikan, termasuk:
      <br><br>
      <li>Kerusakan Infrastruktur
        <ul>
          Bangunan, jembatan, jalan, dan infrastruktur lainnya bisa rusak parah atau hancur oleh kekuatan air yang datang.
        </ul>
      </li>
      <li>Korban Jiwa dan Luka-luka
        <ul>
          Tsunami bisa menyebabkan banyak korban jiwa dan cedera karena kekuatan air dan puing-puing yang terbawa.
        </ul>
      </li>
      <li>Banjir
        <ul>
          Air laut yang masuk ke daratan bisa menyebabkan banjir yang merusak lahan pertanian dan sumber air bersih.
        </ul>
      </li>
      <li>Lingkungan
        <ul>
          Ekosistem pesisir, termasuk terumbu karang dan hutan bakau, bisa rusak oleh tsunami.
        </ul>
      </li>
    `,
  },
];


const accordionItems1 = [
  {
    header: "Pendidikan dan Kesadaran",
    body: "Meningkatkan kesadaran masyarakat tentang risiko tsunami dan cara mengidentifikasi tanda-tanda peringatan."
  },
  {
    header: "Perencanaan Tata Ruang",
    body: "Mengembangkan zona evakuasi dan menghindari pembangunan di daerah rendah yang rawan tergenang air laut."
  },
  {
    header: "Sistem Peringatan Dini",
    body: "Membangun dan memelihara sistem peringatan dini tsunami yang efektif dan memastikan masyarakat dapat menerima informasi dengan cepat."
  },
  {
    header: "Evakuasi",
    body: "Mengembangkan rencana evakuasi yang terinci dan mengadakan latihan evakuasi secara berkala."
  },
  {
    header: "Infrastruktur Pelindung",
    body: "Membangun struktur pelindung seperti tanggul, danau buatan, atau vegetasi pantai yang dapat meredam gelombang tsunami."
  },
  {
    header: "Pendidikan Penanganan Darurat",
    body: "Melatih masyarakat dalam keterampilan penanganan darurat dan pertolongan pertama untuk membantu korban tsunami."
  },
  {
    header: "Komitmen Masyarakat",
    body: "Menggalang komitmen masyarakat untuk berpartisipasi aktif dalam upaya mitigasi dan kesiapsiagaan tsunami."
  }
];

const accordionItems2 = [
  {
    header: "Tetap Tenang",
    body: "Jangan panik, tetap tenang untuk dapat mengambil keputusan yang tepat dan cepat."
  },
  {
    header: "Segera Menuju Ke Tempat Tinggi",
    body: "Segera bergerak menuju ke daerah yang lebih tinggi atau ke zona evakuasi yang telah ditentukan."
  },
  {
    header: "Hindari Pantai",
    body: "Jauhi daerah pantai, muara sungai, dan area terbuka lainnya yang rentan terkena tsunami."
  },
  {
    header: "Dengarkan Informasi Terbaru",
    body: "Dengarkan radio atau sumber informasi lainnya untuk informasi terbaru dan instruksi dari pihak berwenang."
  },
  {
    header: "Bantu Korban",
    body: "Berikan pertolongan pertama kepada korban yang terluka jika aman untuk melakukannya."
  }
];

const accordionItems3 = [
  {
    header: "Penilaian Kerusakan",
    body: "Melakukan penilaian kerusakan untuk menentukan langkah-langkah pemulihan yang dibutuhkan."
  },
  {
    header: "Pembersihan dan Perbaikan Infrastruktur",
    body: "Memulai proses pembersihan material puing dan memulihkan infrastruktur yang rusak."
  },
  {
    header: "Bantuan Medis dan Psikologis",
    body: "Menyediakan bantuan medis untuk korban yang terluka dan dukungan psikologis untuk yang memerlukan."
  },
  {
    header: "Rekonstruksi Perumahan dan Fasilitas Umum",
    body: "Rekonstruksi perumahan, sekolah, rumah sakit, dan fasilitas umum lainnya yang rusak akibat tsunami."
  },
  {
    header: "Pemulihan Ekonomi",
    body: "Mendorong pemulihan ekonomi lokal dengan mendukung usaha kecil dan menstabilkan mata pencaharian masyarakat."
  },
  {
    header: "Evaluasi dan Pembelajaran",
    body: "Mengadakan evaluasi terhadap respons dan rencana mitigasi yang ada untuk memperbaiki dan mempersiapkan diri lebih baik di masa depan."
  }
];

function Tsunami() {
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
        <h1>Tsunami</h1>
        <p className="Penjelasan">
          Tsunami adalah serangkaian gelombang laut besar yang disebabkan oleh
          gangguan besar di bawah permukaan laut, seperti gempa bumi, letusan
          gunung berapi, atau tanah longsor. Tsunami bisa menyebabkan kerusakan
          besar di wilayah pesisir dan seringkali datang dengan sedikit
          peringatan.
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
              title="Respons saat Tsunami Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Tsunami:"
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

export default Tsunami;
