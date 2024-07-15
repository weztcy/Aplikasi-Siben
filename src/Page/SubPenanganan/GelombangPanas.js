import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerBencana from "../../Image/Banner/GelombangPanas.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/SpaceNight.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const options = [
  {
    name: "Penyebab",
    scroll: true,
    backdrop: true,
    title: "Penyebab Gelombang Panas",
    text: `
      Gelombang panas dapat terjadi karena beberapa faktor, antara lain:
      <br><br>
      <li>Kubah Panas (Heat Dome)
        <ul>
          Tekanan tinggi di atmosfer menyebabkan udara panas terjebak di dekat permukaan bumi, yang dikenal sebagai kubah panas.
        </ul>
      </li>
      <li>Perubahan Iklim
        <ul>
          Pemanasan global meningkatkan frekuensi dan intensitas gelombang panas karena suhu rata-rata bumi yang terus meningkat.
        </ul>
      </li>
      <li>Kondisi Atmosfer
        <ul>
          Sirkulasi atmosfer tertentu dapat membawa udara panas ke suatu wilayah dan mencegah udara dingin masuk.
        </ul>
      </li>
      <li>Urbanisasi
        <ul>
          Area perkotaan seringkali lebih panas karena efek pulau panas perkotaan, di mana beton dan aspal menyerap dan memancarkan lebih banyak panas.
        </ul>
      </li>
    `,
  },
  {
    name: "Dampak",
    scroll: true,
    backdrop: true,
    title: "Dampak Gelombang Panas",
    text: `
      Gelombang panas dapat memiliki dampak negatif berikut:
      <br><br>
      <li>Kesehatan Manusia
        <ul>
          Risiko kesehatan seperti heatstroke, dehidrasi, dan penyakit terkait panas meningkat, terutama pada kelompok rentan seperti orang tua dan anak-anak.
        </ul>
      </li>
      <li>Lingkungan
        <ul>
          Gelombang panas dapat menyebabkan kekeringan, mengurangi kelembaban tanah, dan meningkatkan risiko kebakaran hutan.
        </ul>
      </li>
      <li>Pertanian
        <ul>
          Tanaman dan ternak dapat terkena dampak buruk, mengurangi hasil panen dan menyebabkan kematian ternak.
        </ul>
      </li>
      <li>Ekonomi
        <ul>
          Meningkatnya penggunaan energi untuk pendinginan dapat menyebabkan tekanan pada jaringan listrik dan meningkatkan biaya energi, serta mengganggu bisnis dan industri.
        </ul>
      </li>
      <li>Infrastruktur
        <ul>
          Jalan raya, rel kereta api, dan bangunan bisa mengalami kerusakan akibat suhu ekstrem.
        </ul>
      </li>
    `,
  },
  {
    name: "Tindakan",
    scroll: true,
    backdrop: true,
    title: "Tindakan Pencegahan dan Mitigasi",
    text: `
      Untuk mengurangi risiko dan dampak gelombang panas, beberapa langkah pencegahan dan mitigasi dapat dilakukan:
      <br><br>
      <li>Sistem Peringatan Dini
        <ul>
          Mengembangkan dan mengimplementasikan sistem peringatan dini untuk memberitahu masyarakat tentang gelombang panas yang akan datang.
        </ul>
      </li>
      <li>Rencana Tanggap Darurat
        <ul>
          Merancang rencana tanggap darurat termasuk tempat penampungan ber-AC dan panduan tindakan untuk masyarakat.
        </ul>
      </li>
      <li>Edukasi Publik
        <ul>
          Mengedukasi masyarakat tentang cara melindungi diri dari panas ekstrem, seperti minum banyak air dan menghindari aktivitas fisik berat.
        </ul>
      </li>
      <li>Pengelolaan Kota yang Lebih Baik
        <ul>
          Meningkatkan ruang hijau dan mengurangi efek pulau panas perkotaan, serta mendorong desain bangunan yang lebih tahan terhadap panas.
        </ul>
      </li>
      <li>Konservasi Air
        <ul>
          Mengadopsi praktik konservasi air untuk memastikan ketersediaan air selama periode panas ekstrem.
        </ul>
      </li>
      <li>Perencanaan Pertanian
        <ul>
          Mengembangkan varietas tanaman yang tahan panas dan strategi pengelolaan ternak untuk menghadapi kondisi panas ekstrem.
        </ul>
      </li>
    `,
  },
  {
    name: "Tips",
    scroll: true,
    backdrop: true,
    title: "Tips untuk Menghadapi Gelombang Panas",
    text: `
      Beberapa tips yang dapat membantu menghadapi gelombang panas meliputi:
      <br><br>
      <li>Minum Air Secara Teratur
        <ul>
          Pastikan untuk tetap terhidrasi dengan minum banyak air, bahkan jika tidak merasa haus.
        </ul>
      </li>
      <li>Hindari Aktivitas Berat
        <ul>
          Cobalah untuk menghindari aktivitas fisik berat, terutama selama jam-jam terpanas hari.
        </ul>
      </li>
      <li>Cari Tempat Sejuk
        <ul>
          Tinggal di dalam ruangan dengan pendingin udara atau kipas angin, dan hindari paparan langsung sinar matahari.
        </ul>
      </li>
      <li>Kenakan Pakaian Ringan
        <ul>
          Pilih pakaian yang ringan, longgar, dan berwarna terang untuk membantu menjaga tubuh tetap sejuk.
        </ul>
      </li>
      <li>Jaga Ventilasi yang Baik
        <ul>
          Gunakan tirai atau gorden untuk menutupi jendela dan menjaga rumah tetap sejuk, serta buka jendela pada malam hari untuk membiarkan udara sejuk masuk.
        </ul>
      </li>
    `,
  },
];


const accordionItems1 = [
  {
    header: "Pendidikan Masyarakat",
    body: "Meningkatkan kesadaran masyarakat tentang risiko gelombang panas dan cara-cara mengurangi dampaknya melalui edukasi dan kampanye publik.",
  },
  {
    header: "Pengaturan Suhu Ruangan",
    body: "Mendorong pengaturan suhu ruangan yang nyaman dengan ventilasi yang baik dan penggunaan penyejuk udara jika memungkinkan.",
  },
  {
    header: "Penyediaan Tempat Perlindungan",
    body: "Menyediakan tempat perlindungan seperti pusat pendinginan umum untuk masyarakat yang tidak memiliki akses terhadap penyejuk udara.",
  },
  {
    header: "Air Minum",
    body: "Memastikan ketersediaan air minum yang cukup untuk menghindari dehidrasi.",
  },
  {
    header: "Pemantauan Kesehatan Masyarakat",
    body: "Memonitor kesehatan masyarakat khususnya kelompok rentan seperti anak-anak, lansia, dan mereka dengan penyakit kronis.",
  },
  {
    header: "Penyediaan Informasi Cuaca",
    body: "Menyediakan informasi cuaca dan peringatan dini tentang gelombang panas melalui berbagai media komunikasi.",
  },
  {
    header: "Perencanaan Darurat",
    body: "Mengembangkan rencana darurat untuk menghadapi gelombang panas termasuk prosedur evakuasi jika diperlukan.",
  },
];

const accordionItems2 = [
  {
    header: "Minum Banyak Air",
    body: "Minum banyak air untuk menjaga tubuh tetap terhidrasi.",
  },
  {
    header: "Hindari Aktivitas Luar Ruangan",
    body: "Menghindari aktivitas luar ruangan terutama pada saat siang hari yang panas.",
  },
  {
    header: "Gunakan Pakaian yang Tepat",
    body: "Menggunakan pakaian yang longgar, berwarna terang, dan berbahan ringan untuk mengurangi panas tubuh.",
  },
  {
    header: "Cari Tempat Sejuk",
    body: "Mencari tempat yang sejuk seperti pusat pendinginan umum atau ruangan ber-AC jika memungkinkan.",
  },
  {
    header: "Pantau Kesehatan",
    body: "Memantau gejala panas berlebih dan segera mencari bantuan medis jika diperlukan.",
  },
];

const accordionItems3 = [
  {
    header: "Evaluasi Dampak Kesehatan",
    body: "Menilai dampak kesehatan masyarakat dan memberikan perawatan medis lanjutan jika diperlukan.",
  },
  {
    header: "Rehabilitasi Infrastruktur",
    body: "Memulihkan infrastruktur yang terpengaruh dan memperbaiki fasilitas publik seperti air bersih dan listrik.",
  },
  {
    header: "Edukasi Pasca-Bencana",
    body: "Memberikan edukasi kepada masyarakat tentang pencegahan dan respons terhadap gelombang panas di masa mendatang.",
  },
  {
    header: "Evaluasi Sistem Peringatan Dini",
    body: "Mengevaluasi efektivitas sistem peringatan dini dan melakukan perbaikan jika diperlukan.",
  },
];

function GelombangPanas() {
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
        <h1>Gelombang Panas</h1>
        <p className="Penjelasan">
          Gelombang panas adalah periode cuaca yang sangat panas yang
          berlangsung selama beberapa hari hingga beberapa minggu. Kondisi ini
          biasanya disertai dengan kelembaban tinggi dan suhu malam yang tetap
          tinggi, menyebabkan tekanan panas yang signifikan pada manusia, hewan,
          dan lingkungan.
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
              title="Respons saat Gelombang Panas Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Gelombang Panas:"
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

export default GelombangPanas;
