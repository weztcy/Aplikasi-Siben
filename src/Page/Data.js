import "./Data.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Component/NavigationBar";
import DataBencana from "../Component/DataBencana";
import Footer from "../Component/Footer";

function Data() {
  return (
    <div className="Data">
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
