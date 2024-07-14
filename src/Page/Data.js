import "./Data.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Component/NavigationBar";
import DataBencana from "../Component/DataBencana";
import Footer from "../Component/Footer";
import BannerPhoto from "../Component/BannerPhoto";
import BannerHome from "../Image/Banner/EarthDisaster.jpg";
import bgvideo from "../Video/Dust.mp4";
import BackgroundVideo from "../Component/BackgroundVideo";

function Data() {
  const contentStyle = {
    position: "relative",
    zIndex: 0,
    color: "white",
    textAlign: "center",
  };
  return (
    <div className="Data" style={contentStyle}>
      <BackgroundVideo src={bgvideo} />
      <BannerPhoto imageUrl={BannerHome} />
      <NavigationBar />
      <div>
        <h1 className="text-center">Data Bencana</h1>
        <br />
        <div className="d-flex justify-content-center" style={{ marginBottom: "100px" }}>
          <DataBencana itemsPerPage={10} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Data;
