import React from "react";
import NavigationBar from "../../Component/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import "./SubPenanganan.css";
import KontenBencanaCard from "../../Component/KontenBencanaCard";
import step1Image from "../../Image/Konten/Step1.jpg";
import step2Image from "../../Image/Konten/Step2.jpg";
import step3Image from "../../Image/Konten/Step3.jpg";
import BannerPhoto from "../../Component/BannerPhoto";
import BannerBencana from "../../Image/Banner/GunungMeletus.jpeg";
import Footer from "../../Component/Footer";
import BencanaOffcard from "../../Component/BencanaOffcard";
import bgvideo from "../../Video/SpaceNight.mp4";
import BackgroundVideo from "../../Component/BackgroundVideo";

const options = [
  {
    name: "Penyebab",
    scroll: true,
    backdrop: true,
    title: "Penyebab Gunung Meletus",
    text: `
      Gunung berapi meletus karena adanya tekanan dari magma (batuan cair) yang terbentuk di dalam bumi. Beberapa faktor penyebabnya meliputi:
      <br><br>
      <li>Tekanan Magma
        <ul>
          Tekanan dari magma yang naik ke permukaan bumi dapat menyebabkan letusan. Magma yang mengandung gas terperangkap memiliki tekanan yang tinggi, dan saat mencapai permukaan, gas tersebut melepaskan tekanan, menyebabkan letusan eksplosif.
        </ul>
      </li>
      <li>Aktivitas Tektonik
        <ul>
          Pergerakan lempeng tektonik bisa memicu aktivitas vulkanik. Ketika lempeng-lempeng bumi bertabrakan atau bergeser, magma dari dalam bumi bisa naik ke permukaan melalui retakan atau celah.
        </ul>
      </li>
      <li>Panas Bumi
        <ul>
          Panas dari dalam bumi yang sangat tinggi dapat mencairkan batuan dan membentuk magma, yang kemudian bisa naik ke permukaan dan menyebabkan letusan.
        </ul>
      </li>
    `,
  },
  {
    name: "Jenis",
    scroll: true,
    backdrop: true,
    title: "Jenis-jenis Erupsi Gunung Berapi",
    text: `
      Erupsi gunung berapi dapat dibedakan berdasarkan karakteristiknya:
      <br><br>
      <li>Erupsi Efusif
        <ul>
          Lava mengalir keluar dari gunung berapi dengan relatif tenang tanpa ledakan besar. Lava ini biasanya bersifat basaltik dan mengalir dengan cepat.
        </ul>
      </li>
      <li>Erupsi Eksplosif
        <ul>
          Letusan yang disertai ledakan besar, mengeluarkan abu, gas, dan material piroklastik dengan kekuatan besar. Erupsi jenis ini bisa sangat berbahaya dan merusak.
        </ul>
      </li>
      <li>Erupsi Strombolian
        <ul>
          Letusan periodik dengan ledakan kecil hingga menengah, seringkali disertai lontaran lava pijar.
        </ul>
      </li>
      <li>Erupsi Plinian
        <ul>
          Letusan sangat eksplosif yang mengeluarkan kolom abu tinggi ke atmosfer dan bisa menyebabkan hujan abu yang luas.
        </ul>
      </li>
    `,
  },
  {
    name: "Dampak",
    scroll: true,
    backdrop: true,
    title: "Dampak Gunung Meletus",
    text: `
      Letusan gunung berapi dapat memiliki berbagai dampak, baik langsung maupun tidak langsung:
      <br><br>
      <li>Kerusakan Lingkungan
        <ul>
          Lava, abu, dan material piroklastik bisa merusak vegetasi, mengubur lahan pertanian, dan merusak bangunan.
        </ul>
      </li>
      <li>Korban Jiwa dan Cedera
        <ul>
          Letusan besar bisa menyebabkan korban jiwa dan cedera akibat runtuhan material, gas beracun, atau panas yang ekstrem.
        </ul>
      </li>
      <li>Gangguan Transportasi
        <ul>
          Abu vulkanik yang beterbangan bisa mengganggu penerbangan dan menutupi jalan.
        </ul>
      </li>
      <li>Bencana Sekunder
        <ul>
          Letusan bisa memicu bencana sekunder seperti banjir lahar, longsor, dan tsunami (jika letusan terjadi di bawah laut).
        </ul>
      </li>
      <li>Perubahan Iklim
        <ul>
          Abu vulkanik dan gas seperti sulfur dioksida yang dilepaskan ke atmosfer bisa mempengaruhi iklim dengan mendinginkan suhu global sementara.
        </ul>
      </li>
    `,
  },
];

const accordionItems1 = [
  {
    header: "Pendidikan dan Kesadaran",
    body: "Meningkatkan kesadaran masyarakat tentang risiko gunung meletus dan cara mengurangi dampaknya melalui pelatihan dan pendidikan.",
  },
  {
    header: "Perencanaan Tata Ruang",
    body: "Menghindari pembangunan di daerah rawan letusan dan mengimplementasikan peraturan bangunan yang sesuai.",
  },
  {
    header: "Peningkatan Struktur Bangunan",
    body: "Memastikan bangunan memenuhi standar ketahanan terhadap abu vulkanik dan material letusan lainnya.",
  },
  {
    header: "Infrastruktur",
    body: "Membangun dan memperbaiki infrastruktur seperti jalan evakuasi dan tempat penampungan yang aman dari letusan.",
  },
  {
    header: "Rencana Darurat",
    body: "Mengembangkan dan menguji rencana darurat untuk keluarga, komunitas, dan instansi pemerintah dalam menghadapi letusan gunung berapi.",
  },
  {
    header: "Latihan Evakuasi",
    body: "Mengadakan latihan evakuasi secara berkala di sekolah, tempat kerja, dan komunitas.",
  },
  {
    header: "Perlengkapan Darurat",
    body: "Menyediakan perlengkapan darurat yang mencakup masker, kacamata pelindung, air, makanan, obat-obatan, dan radio.",
  },
  {
    header: "Komunikasi",
    body: "Mengembangkan sistem komunikasi yang dapat diandalkan untuk menginformasikan masyarakat tentang status gunung berapi dan langkah-langkah yang harus diambil.",
  },
  {
    header: "Titik Kumpul",
    body: "Menentukan lokasi titik kumpul yang aman dan mudah diakses setelah letusan terjadi.",
  },
];

const accordionItems2 = [
  {
    header: "Tetap Tenang",
    body: "Jangan panik, segera berlindung di tempat yang aman dari material letusan seperti batu dan abu.",
  },
  {
    header: "Lindungi Diri",
    body: "Gunakan masker dan kacamata pelindung untuk melindungi diri dari abu vulkanik.",
  },
  {
    header: "Evakuasi Segera",
    body: "Ikuti instruksi evakuasi dari pihak berwenang dan segera menuju ke tempat penampungan yang aman.",
  },
  {
    header: "Hindari Area Berbahaya",
    body: "Jauhkan diri dari sungai atau aliran lahar yang berpotensi membawa material letusan.",
  },
  {
    header: "Pantau Informasi",
    body: "Dengarkan radio atau sumber informasi terpercaya untuk mengetahui kondisi terkini dan instruksi dari pihak berwenang.",
  },
  {
    header: "Periksa Kesehatan",
    body: "Periksa kesehatan diri dan orang lain, terutama pernapasan yang mungkin terganggu oleh abu vulkanik.",
  },
];

const accordionItems3 = [
  {
    header: "Penilaian Kerusakan",
    body: "Periksa kerusakan bangunan dan infrastrukturnya, pastikan bangunan aman sebelum kembali masuk.",
  },
  {
    header: "Pembersihan Abu",
    body: "Bersihkan abu vulkanik dengan hati-hati untuk mencegah gangguan kesehatan.",
  },
  {
    header: "Bantuan Medis",
    body: "Segera minta bantuan medis untuk yang terluka atau mengalami gangguan pernapasan.",
  },
  {
    header: "Tempat Penampungan",
    body: "Manfaatkan tempat penampungan sementara yang disediakan pemerintah atau organisasi bantuan.",
  },
  {
    header: "Dukungan Psikologis",
    body: "Berikan dukungan psikologis kepada korban letusan, terutama anak-anak dan kelompok rentan.",
  },
  {
    header: "Pembangunan Kembali",
    body: "Rekonstruksi bangunan dan infrastruktur yang rusak dengan memperhatikan standar ketahanan terhadap letusan.",
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

function GunungMeletus() {
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
        <h1>Gunung Meletus</h1>
        <p className="Penjelasan">
          Gunung meletus atau erupsi gunung berapi adalah peristiwa keluarnya
          material dari dalam bumi ke permukaan melalui kawah atau rekahan di
          gunung berapi. Material yang dikeluarkan bisa berupa lava, gas
          vulkanik, abu vulkanik, dan batuan piroklastik. Erupsi gunung berapi
          bisa sangat destruktif dan mempengaruhi lingkungan sekitar, serta
          kehidupan manusia.
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
              title="Respons saat Gunung Meletus Terjadi:"
              imageSrc={step2Image}
              accordionItems={accordionItems2}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <KontenBencanaCard
              title="Pemulihan setelah Gunung Meletus:"
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

export default GunungMeletus;