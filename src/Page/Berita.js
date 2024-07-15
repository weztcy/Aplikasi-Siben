import React from "react";
import NavigationBar from "../Component/NavigationBar";
import BeritaCard from "../Component/BeritaCard";
import "./Berita.css"; // CSS file for additional styling
import gambar1 from "../Image/Berita/rumah-warga-terbawa-longsor-di-bogor_169.jpeg";
import gambar2 from "../Image/Berita/bangunan-sdn-2-sukadana-di-kecamatan-tukdana-kabupaten-indramayu-ambruk-saat-hujan-deras-disertai-angin-melanda-wilayah-kecama_169.jpeg";
import gambar3 from "../Image/Berita/449cdbec-ab8e-490b-ac50-deaf98da1c46_169.jpeg";
import gambar4 from "../Image/Berita/gelombang-air-laut-pasang-masuk-ke-permukiman-warga-di-kabupaten-kepulauan-selayar_169.jpeg";
import gambar5 from "../Image/Berita/longsor-di-sigi_169.jpeg";
import gambar6 from "../Image/Berita/banjir-di-kecamatan-lengkong-kabupaten-sukabumi_169.jpeg";
import gambar7 from "../Image/Berita/tanah-longsor-di-banjar-dinas-batu-gede-desa-duda-timur-kecamatan-selat-karangasem-minggu-962024-dok-bpbd-karangasem_169.jpeg";
import gambar8 from "../Image/Berita/penanganan-longsor-di-jalan-wilayah-sang-hyang-ambu-desa-bugbug-karangasem-jumat-762024-i-wayan-selamat-juniasadetikbali_169.jpeg";
import Footer from "../Component/Footer";
import BannerPhoto from "../Component/BannerPhoto";
import BannerHome from "../Image/Banner/EarthDisaster.jpg";
import bgvideo from "../Video/RainWater.mp4";
import BackgroundVideo from "../Component/BackgroundVideo";

const articles = [
  {
    id: 1,
    date: "2024-07-08",
    title:
      "Rumah Warga di Bogor Jebol Terbawa Longsor, Penghuni Diimbau Mengungsi",
    imageUrl: gambar1,
    author: "Rizky Adha Mahendra",
    linkUrl:
      "https://news.detik.com/berita/d-7427769/rumah-warga-di-bogor-jebol-terbawa-longsor-penghuni-diimbau-mengungsi",
  },
  {
    id: 2,
    date: "2024-07-07",
    title: "Atap 3 Ruang Kelas di SDN Sukadana Ambruk gegara Hujan Deras",
    imageUrl: gambar2,
    author: "Sudedi Rasmadi",
    linkUrl:
      "https://www.detik.com/jabar/cirebon-raya/d-7426948/atap-3-ruang-kelas-di-sdn-sukadana-ambruk-gegara-hujan-deras",
  },
  {
    id: 3,
    date: "2024-07-05",
    title: "Mengenal Tas Survival Kit untuk Hadapi Bencana Alam",
    imageUrl: gambar3,
    author: "Kanya Anindita Mutiarasari",
    linkUrl:
      "https://news.detik.com/berita/d-7424045/mengenal-tas-survival-kit-untuk-hadapi-bencana-alam",
  },
  {
    id: 4,
    date: "2024-07-03",
    title:
      "20 Rumah di Selayar Rusak Diterjang Gelombang Pasang, Sebagian Warga Pindah",
    imageUrl: gambar4,
    author: "Nur Hidayah Said",
    linkUrl:
      "https://www.detik.com/sulsel/berita/d-7420923/20-rumah-di-selayar-rusak-diterjang-gelombang-pasang-sebagian-warga-pindah",
  },
  {
    id: 5,
    date: "2024-07-01",
    title: "Longsor Terjang 9 Rumah Warga di Sigi Sulteng, 17 KK Terdampak",
    imageUrl: gambar5,
    author: "Hafis Hamdan",
    linkUrl:
      "https://www.detik.com/sulsel/berita/d-7417891/longsor-terjang-9-rumah-warga-di-sigi-sulteng-17-kk-terdampak",
  },
  {
    id: 6,
    date: "2024-06-29",
    title: "Banjir hingga Longsor Landa Lengkong Kabupaten Sukabumi",
    imageUrl: gambar6,
    author: "Syahdan Alamsyah",
    linkUrl:
      "https://www.detik.com/jabar/berita/d-7415235/banjir-hingga-longsor-landa-lengkong-kabupaten-sukabumi",
  },
  {
    id: 7,
    date: "2024-06-09",
    title: "Bencana Terus Terjang Karangasem meski Intensitas Hujan Turun",
    imageUrl: gambar7,
    author: "I Wayan Sui Suadnyana, I Wayan Selamat Juniasa",
    linkUrl:
      "https://www.detik.com/bali/berita/d-7382247/bencana-terus-terjang-karangasem-meski-intensitas-hujan-turun",
  },
  {
    id: 8,
    date: "2024-06-29",
    title:
      "27 Bencana Landa Karangasem Imbas Hujan Deras, Tanah Longsor hingga Banjir",
    imageUrl: gambar8,
    author: "I Wayan Sui Suadnyana, I Wayan Selamat Juniasa",
    linkUrl:
      "https://www.detik.com/bali/berita/d-7379888/27-bencana-landa-karangasem-imbas-hujan-deras-tanah-longsor-hingga-banjir",
  },
  // Tambahkan artikel lainnya sesuai kebutuhan
];
function Berita() {
  const contentStyle = {
    position: "relative",
    zIndex: 0,
    color: "white",
    textAlign: "center",
  };
 
  return (
    <div className="Berita" style={contentStyle}>
      <BackgroundVideo src={bgvideo} />
      <BannerPhoto imageUrl={BannerHome} />
      <NavigationBar />
      <div style={{ marginBottom: "100px" }}>
        <h1>Berita Bencana</h1>
        {articles.map((article) => (
          <BeritaCard
            key={article.id}
            date={article.date}
            title={article.title}
            imageUrl={article.imageUrl}
            author={article.author}
            linkUrl={article.linkUrl}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Berita;
