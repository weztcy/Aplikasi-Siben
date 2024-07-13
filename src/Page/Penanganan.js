import React from "react";
import NavigationBar from "../Component/NavigationBar";
import PenangananCard from "../Component/PenangananCard";
import GempaBumi from "../Image/Bencana/Earthquake.jpg";
import Tsunami from "../Image/Bencana/Tsunami.jpg";
import GunungMeletus from "../Image/Bencana/Volcano.jpg";
import Banjir from "../Image/Bencana/Flood.jpg";
import TanahLongsor from "../Image/Bencana/Landslide.jpg";
import AnginTopan from "../Image/Bencana/Cyclone.jpg";
import Kekeringan from "../Image/Bencana/Drought.jpg";
import KebakaranHutan from "../Image/Bencana/Wildfire.jpg";
import GelombangPanas from "../Image/Bencana/Heatwave.jpg";
import BadaiPetir from "../Image/Bencana/Thunderstorm.jpg";
import { Container, Row, Col } from "react-bootstrap";
import "./Penanganan.css";
import Footer from "../Component/Footer";

function Penanganan() {
  const disasterCards = [
    {
      imageSrc: GempaBumi,
      title: "Gempa Bumi",
      text: "Gempa bumi adalah getaran yang terjadi pada permukaan bumi akibat pelepasan energi dalam bentuk gelombang seismik.",
      link: "/gempa-bumi",
    },
    {
      imageSrc: Tsunami,
      title: "Tsunami",
      text: "Tsunami adalah gelombang besar yang disebabkan oleh perubahan tiba-tiba di dasar laut, seperti gempa bumi, letusan gunung berapi, atau longsor laut.",
      link: "/tsunami",
    },
    {
      imageSrc: GunungMeletus,
      title: "Gunung Meletus",
      text: "Gunung meletus adalah peristiwa pelepasan gas, abu, dan batuan panas dari dalam gunung berapi yang dapat menyebabkan kerusakan lingkungan dan bahaya bagi penduduk sekitarnya.",
      link: "/gunung-meletus",
    },
    {
      imageSrc: Banjir,
      title: "Banjir",
      text: "Banjir adalah peristiwa naiknya permukaan air sungai, danau, atau laut yang dapat menyebabkan genangan air di daerah sekitarnya.",
      link: "/banjir",
    },
    {
      imageSrc: TanahLongsor,
      title: "Tanah Longsor",
      text: "Tanah longsor adalah pergerakan tanah secara tiba-tiba dari suatu lereng atau bukit yang dapat merusak bangunan dan mengancam keselamatan penduduk di sekitarnya.",
      link: "/tanah-longsor",
    },
    {
      imageSrc: AnginTopan,
      title: "Angin Topan",
      text: "Angin topan adalah angin kencang dengan kecepatan tinggi yang sering disertai hujan deras dan badai petir, dapat menyebabkan kerusakan hebat pada bangunan dan infrastruktur.",
      link: "/angin-topan",
    },
    {
      imageSrc: Kekeringan,
      title: "Kekeringan",
      text: "Kekeringan adalah kondisi cuaca yang panjang dan tidak adanya hujan yang cukup untuk memenuhi kebutuhan air, baik untuk pertanian, pemukiman, atau kebutuhan industri.",
      link: "/kekeringan",
    },
    {
      imageSrc: KebakaranHutan,
      title: "Kebakaran Hutan",
      text: "Kebakaran hutan adalah api yang merambat cepat di area hutan atau lahan gambut yang dapat menyebabkan kerusakan lingkungan, hilangnya habitat, dan polusi udara.",
      link: "/kebakaran-hutan",
    },
    {
      imageSrc: GelombangPanas,
      title: "Gelombang Panas",
      text: "Gelombang panas adalah periode cuaca panas yang ekstrem dan berkepanjangan yang dapat menyebabkan kelelahan, dehidrasi, bahkan kematian bagi manusia dan hewan.",
      link: "/gelombang-panas",
    },
    {
      imageSrc: BadaiPetir,
      title: "Badai Petir",
      text: "Badai petir adalah badai yang disertai kilat dan petir yang kuat, disertai hujan deras dan angin kencang, dapat menyebabkan kerusakan dan bahaya listrik bagi manusia.",
      link: "/badai-petir",
    },
  ];

  const renderDisasterCards = () => {
    return disasterCards.map((card, index) => (
      <Col key={index} md={6} style={{marginBottom: "10px"}}>
        <PenangananCard
          imageSrc={card.imageSrc}
          title={card.title}
          text={card.text}
          link={card.link}
        />
      </Col>
    ));
  };

  return (
    <div className="Penanganan">
      <NavigationBar />
      <Container style={{ marginBottom: "80px" }}>
        <h1>Penanganan Bencana</h1>
        <Row>{renderDisasterCards()}</Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Penanganan;
