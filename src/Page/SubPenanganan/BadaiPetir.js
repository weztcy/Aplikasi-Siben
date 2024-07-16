import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerBencana from "../../Image/Banner/BadaiPetir.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/SpaceNight.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const options = [
  {
    name: "Penyebab",
    scroll: true,
    backdrop: true,
    title: "Penyebab Badai Petir",
    text: `
      Badai petir terbentuk karena kombinasi beberapa faktor, antara lain:
      <br><br>
      <li>Kelembaban Tinggi
        <ul>
          Udara yang mengandung banyak uap air cenderung menghasilkan badai petir karena uap air ini dapat mengembun dan membentuk awan cumulonimbus.
        </ul>
      </li>
      <li>Udara yang Tidak Stabil
        <ul>
          Kondisi di mana udara hangat di permukaan bumi naik dengan cepat dan bertemu dengan udara dingin di atmosfer, menyebabkan pembentukan awan badai.
        </ul>
      </li>
      <li>Pemicu
        <ul>
          Pemanasan permukaan bumi oleh sinar matahari, front cuaca, atau pertemuan massa udara yang berbeda dapat menyebabkan udara hangat naik dan memulai badai petir.
        </ul>
      </li>
    `,
  },
  {
    name: "Struktur",
    scroll: true,
    backdrop: true,
    title: "Struktur Badai Petir",
    text: `
      Badai petir biasanya terdiri dari beberapa komponen utama, termasuk:
      <br><br>
      <li>Awan Cumulonimbus
        <ul>
          Awan tebal dan tinggi yang sering kali berbentuk seperti landasan di bagian atasnya. Awan ini adalah tempat terjadinya petir dan guntur.
        </ul>
      </li>
      <li>Arus Udara Naik
        <ul>
          Udara hangat dan lembab naik ke dalam awan, menyebabkan kondensasi dan pembentukan awan.
        </ul>
      </li>
      <li>Arus Udara Turun
        <ul>
          Udara dingin turun dari awan membawa hujan deras dan kadang-kadang hujan es.
        </ul>
      </li>
    `,
  },
  {
    name: "Jenis",
    scroll: true,
    backdrop: true,
    title: "Jenis-jenis Badai Petir",
    text: `
      Ada beberapa jenis badai petir, antara lain:
      <br><br>
      <li>Badai Petir Tunggal (Single-cell Thunderstorm)
        <ul>
          Badai petir relatif kecil yang terdiri dari satu sel badai dengan siklus hidup sekitar satu jam.
        </ul>
      </li>
      <li>Badai Petir Multisel (Multi-cell Thunderstorm)
        <ul>
          Badai yang terdiri dari beberapa sel badai yang berkembang secara bersamaan atau berurutan, dapat berlangsung lebih lama dan lebih intens daripada badai petir tunggal.
        </ul>
      </li>
      <li>Badai Petir Supercell (Supercell Thunderstorm)
        <ul>
          Badai petir yang sangat kuat dengan struktur rotasi yang dikenal sebagai mesocyclone, sering disertai dengan angin kencang, hujan es besar, dan potensi angin puting beliung.
        </ul>
      </li>
      <li>Badai Petir Garis (Squall Line)
        <ul>
          Badai yang membentuk garis panjang yang dapat menyebabkan angin kencang dan hujan deras di sepanjang garis tersebut.
        </ul>
      </li>
    `,
  },
  {
    name: "Dampak",
    scroll: true,
    backdrop: true,
    title: "Dampak Badai Petir",
    text: `
      Badai petir dapat memiliki dampak negatif berikut:
      <br><br>
      <li>Kerusakan Properti
        <ul>
          Angin kencang dan hujan es dapat merusak bangunan, kendaraan, dan tanaman.
        </ul>
      </li>
      <li>Kebakaran
        <ul>
          Kilat dapat menyebabkan kebakaran hutan atau kebakaran bangunan jika menyambar material yang mudah terbakar.
        </ul>
      </li>
      <li>Banjir Bandang
        <ul>
          Hujan deras dapat menyebabkan banjir bandang, terutama di daerah yang tidak memiliki sistem drainase yang baik.
        </ul>
      </li>
      <li>Gangguan Jaringan Listrik
        <ul>
          Kilat dapat menyebabkan pemadaman listrik dan merusak peralatan listrik.
        </ul>
      </li>
      <li>Bahaya bagi Penerbangan
        <ul>
          Turbulensi dan kondisi cuaca ekstrem dapat membahayakan penerbangan.
        </ul>
      </li>
    `,
  },
  {
    name: "Tips",
    scroll: true,
    backdrop: true,
    title: "Tips Keamanan Saat Badai Petir",
    text: `
      Beberapa tips untuk keamanan saat badai petir meliputi:
      <br><br>
      <li>Tetap di Dalam Ruangan
        <ul>
          Saat badai petir, lebih aman berada di dalam rumah atau bangunan yang kokoh.
        </ul>
      </li>
      <li>Hindari Peralatan Elektronik
        <ul>
          Jangan menggunakan peralatan listrik atau elektronik selama badai petir untuk menghindari risiko sambaran petir.
        </ul>
      </li>
      <li>Jauhi Jendela dan Pintu
        <ul>
          Tetap menjauh dari jendela, pintu, dan dinding luar untuk mengurangi risiko cedera akibat angin kencang atau pecahan kaca.
        </ul>
      </li>
      <li>Cari Perlindungan Segera
        <ul>
          Jika Anda berada di luar, cari perlindungan di dalam bangunan terdekat atau di dalam kendaraan dengan jendela tertutup.
        </ul>
      </li>
    `,
  },
];

const accordionItems1 = [
  {
    header: "Pendidikan Keselamatan",
    body: "Meningkatkan pendidikan keselamatan terkait badai petir kepada masyarakat, termasuk tentang tempat perlindungan dan perilaku aman.",
  },
  {
    header: "Penanggulangan Risiko",
    body: "Menilai dan mengurangi risiko kebakaran yang disebabkan oleh petir dengan pengelolaan vegetasi dan pemantauan terus-menerus.",
  },
  {
    header: "Perencanaan Darurat",
    body: "Mengembangkan rencana darurat yang mencakup prosedur evakuasi dan komunikasi darurat selama badai petir.",
  },
  {
    header: "Pemantauan Cuaca",
    body: "Menggunakan sistem pemantauan cuaca yang efektif untuk memantau perkembangan badai petir dan memberikan peringatan dini.",
  },
  {
    header: "Proteksi Bangunan",
    body: "Memasang sistem proteksi petir pada bangunan-bangunan penting dan menghindari penggunaan peralatan elektronik selama badai petir.",
  },
  {
    header: "Komitmen Keselamatan",
    body: "Mengajak masyarakat untuk berkomitmen pada keselamatan pribadi dan mengambil tindakan pencegahan yang sesuai.",
  },
];

const accordionItems2 = [
  {
    header: "Cari Tempat Perlindungan",
    body: "Cari tempat perlindungan seperti bangunan tertutup atau kendaraan yang berada di dalam.",
  },
  {
    header: "Jauhi Tempat Terbuka",
    body: "Jauhi tempat terbuka, pohon tinggi, tiang listrik, dan air terjun.",
  },
  {
    header: "Hindari Air",
    body: "Hindari air seperti kolam renang, dan pancuran karena air adalah konduktor listrik.",
  },
  {
    header: "Tetap di Tempat Aman",
    body: "Tetap berada di tempat perlindungan hingga badai petir berlalu dan aman untuk keluar.",
  },
  {
    header: "Bantu Korban",
    body: "Bantu korban yang terkena dampak petir jika aman untuk melakukannya dan berikan pertolongan pertama jika diperlukan.",
  },
];

const accordionItems3 = [
  {
    header: "Evaluasi Kerusakan",
    body: "Melakukan evaluasi kerusakan dan dampak badai petir terhadap infrastruktur dan lingkungan sekitar.",
  },
  {
    header: "Perbaikan Infrastruktur",
    body: "Memulihkan dan memperbaiki infrastruktur yang rusak akibat petir seperti listrik dan komunikasi.",
  },
  {
    header: "Edukasi Masyarakat",
    body: "Memberikan edukasi kepada masyarakat tentang pemahaman lebih lanjut mengenai bahaya petir dan langkah-langkah untuk mengurangi risiko.",
  },
  {
    header: "Penguatan Sistem Proteksi",
    body: "Menguatkan sistem proteksi petir pada bangunan-bangunan penting serta meningkatkan kesadaran akan perlunya perlindungan petir.",
  },
];

function BadaiPetir() {
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
        <h1>Badai Petir</h1>
        <p className="Penjelasan">
          Badai petir adalah fenomena cuaca yang ditandai oleh kehadiran kilat
          dan guntur, sering disertai oleh hujan deras, angin kencang, dan
          kadang-kadang hujan es. Badai petir bisa sangat berbahaya dan merusak,
          terutama jika disertai dengan angin puting beliung atau banjir
          bandang.
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
              title="Respons saat Badai Petir Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Badai Petir:"
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

export default BadaiPetir;