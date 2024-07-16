import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerBencana from "../../Image/Banner/GempaBumi.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/SpaceNight.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const options = [
  {
    name: "Penyebab",
    scroll: true,
    backdrop: true,
    title: "Penyebab Gempa Bumi",
    text: `
      Gempa bumi bisa disebabkan oleh beberapa faktor, di antaranya:
      <br><br>
      <li>Pergerakan Lempeng Tektonik
        <ul>
          Lempeng-lempeng tektonik yang berada di bawah permukaan bumi terus bergerak. Ketika lempeng-lempeng ini bertabrakan, bergeser, atau saling menjauh, energi yang tersimpan di dalamnya dilepaskan, menyebabkan gempa bumi.
        </ul>
      </li>
      <li>Aktivitas Vulkanik
        <ul>
          Letusan gunung berapi dapat menyebabkan gempa bumi, dikenal sebagai gempa vulkanik.
        </ul>
      </li>
      <li>Patahan atau Sesar
        <ul>
          Patahan atau sesar adalah retakan di kerak bumi di mana pergerakan bisa terjadi. Ketika tekanan di sepanjang sesar ini menjadi terlalu besar, kerak bumi bisa bergerak tiba-tiba, memicu gempa.
        </ul>
      </li>
      <li>Aktivitas Manusia
        <ul>
          Aktivitas seperti penambangan, pengisian waduk besar, atau pengeboran minyak juga dapat menyebabkan gempa bumi kecil yang disebut sebagai gempa bumi induksi.
        </ul>
      </li>
    `,
  },
  {
    name: "Skala",
    scroll: true,
    backdrop: true,
    title: "Skala dan Pengukuran",
    text: `
      Gempa bumi diukur dengan menggunakan alat yang disebut seismometer, dan besarnya diukur dalam skala yang dikenal sebagai skala Richter atau skala magnitudo momen (Mw). Kedua skala ini mengukur besarnya energi yang dilepaskan oleh gempa.
    `,
  },
  {
    name: "Dampak",
    scroll: true,
    backdrop: true,
    title: "Dampak Gempa Bumi",
    text: `
      Gempa bumi dapat menyebabkan kerusakan yang parah tergantung pada besarnya, kedalaman pusat gempa (hiposenter), dan jarak dari pusat gempa ke permukaan bumi (epicenter). Beberapa dampak yang mungkin terjadi adalah:
      <br><br>
      <li>Kerusakan Bangunan
        <ul>
          Bangunan dan infrastruktur bisa runtuh atau rusak parah.
        </ul>
      </li>
      <li>Tanah Longsor
        <ul>
          Getaran gempa bisa menyebabkan tanah longsor di daerah pegunungan.
        </ul>
      </li>
      <li>Tsunami
        <ul>
          Gempa bawah laut bisa memicu gelombang besar atau tsunami yang dapat menyebabkan kerusakan di wilayah pesisir.
        </ul>
      </li>
      <li>Korban Jiwa dan Luka-luka
        <ul>
          Gempa bumi besar bisa menyebabkan banyak korban jiwa dan luka-luka.
        </ul>
      </li>
    `,
  },
];

const accordionItems1 = [
  {
    header: "Pendidikan dan Kesadaran",
    body: "Meningkatkan kesadaran masyarakat tentang risiko gempa bumi dan cara mengurangi dampaknya melalui pelatihan dan pendidikan.",
  },
  {
    header: "Perencanaan Tata Ruang",
    body: "Menghindari pembangunan di daerah rawan gempa dan mengimplementasikan peraturan bangunan yang tahan gempa.",
  },
  {
    header: "Peningkatan Struktur Bangunan",
    body: "Memastikan bangunan memenuhi standar ketahanan gempa, termasuk rumah, sekolah, dan fasilitas umum lainnya.",
  },
  {
    header: "Infrastruktur",
    body: "Membangun dan memperbaiki infrastruktur seperti jembatan, jalan, dan jaringan listrik agar tahan gempa.",
  },
  {
    header: "Rencana Darurat",
    body: "Mengembangkan dan menguji rencana darurat untuk keluarga, komunitas, dan instansi pemerintah.",
  },
  {
    header: "Latihan Evakuasi",
    body: "Mengadakan latihan evakuasi secara berkala di sekolah, tempat kerja, dan komunitas.",
  },
  {
    header: "Perlengkapan Darurat",
    body: "Menyediakan perlengkapan darurat yang mencakup air, makanan, obat-obatan, senter, baterai cadangan, dan radio.",
  },
  {
    header: "Komunikasi",
    body: "Mengembangkan sistem komunikasi yang dapat diandalkan untuk menginformasikan masyarakat tentang gempa bumi dan langkah-langkah yang harus diambil.",
  },
  {
    header: "Titik Kumpul",
    body: "Menentukan lokasi titik kumpul yang aman dan mudah diakses setelah gempa terjadi.",
  },
];

const accordionItems2 = [
  {
    header: "Tetap Tenang",
    body: "Jangan panik, segera berlindung di bawah meja atau furnitur yang kokoh untuk melindungi diri dari benda yang jatuh.",
  },
  {
    header: "Jauh dari Jendela",
    body: "Hindari jendela, kaca, dan benda-benda yang dapat pecah atau jatuh.",
  },
  {
    header: "Dalam Ruangan",
    body: "Jika berada di dalam ruangan, tetaplah di dalam. Jika berada di luar ruangan, hindari bangunan, pohon, dan tiang listrik.",
  },
  {
    header: "Tangga dan Lift",
    body: "Jangan menggunakan tangga atau lift selama gempa.",
  },
  {
    header: "Keluar dengan Aman",
    body: "Setelah gempa berhenti, keluar dengan hati-hati dari bangunan, periksa kerusakan sebelum keluar.",
  },
  {
    header: "Periksa Cedera",
    body: "Periksa apakah ada yang terluka dan berikan pertolongan pertama jika memungkinkan.",
  },
  {
    header: "Waspada Terhadap Gempa Susulan",
    body: "Siapkan diri untuk gempa susulan yang mungkin terjadi.",
  },
  {
    header: "Informasi",
    body: "Dengarkan radio atau sumber informasi terpercaya untuk mengetahui kondisi terkini dan instruksi dari pihak berwenang.",
  },
];

const accordionItems3 = [
  {
    header: "Penilaian Kerusakan",
    body: "Periksa kerusakan bangunan dan infrastrukturnya, pastikan bangunan aman sebelum kembali masuk.",
  },
  {
    header: "Kesehatan",
    body: "Pastikan tidak ada ancaman kesehatan seperti kebocoran gas, air yang terkontaminasi, atau penyakit menular.",
  },
  {
    header: "Bantuan Medis",
    body: "Segera minta bantuan medis untuk yang terluka atau membutuhkan perawatan.",
  },
  {
    header: "Tempat Penampungan",
    body: "Manfaatkan tempat penampungan sementara yang disediakan pemerintah atau organisasi bantuan.",
  },
  {
    header: "Dukungan Psikologis",
    body: "Berikan dukungan psikologis kepada korban gempa, terutama anak-anak dan kelompok rentan.",
  },
  {
    header: "Pembangunan Kembali",
    body: "Rekonstruksi bangunan dan infrastruktur yang rusak dengan memperhatikan standar ketahanan gempa.",
  },
  {
    header: "Pemulihan Ekonomi",
    body: "Bantu pemulihan ekonomi lokal dengan mendukung usaha kecil dan penyediaan lapangan kerja.",
  },
  {
    header: "Perbaikan Sistem",
    body: "Evaluasi dan perbaiki sistem kesiapsiagaan dan respons untuk menghadapi bencana di masa depan.",
  },
];

function GempaBumi() {
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
        <h1>Gempa Bumi</h1>
        <p className="Penjelasan">
          Gempa bumi adalah getaran atau guncangan yang terjadi di permukaan
          bumi akibat pelepasan energi secara tiba-tiba di dalam kerak bumi.
          Energi ini dilepaskan dalam bentuk gelombang seismik, yang menyebabkan
          getaran yang dapat dirasakan di permukaan bumi.
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
              title="Respons saat Gempa Bumi Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Gempa Bumi:"
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

export default GempaBumi;