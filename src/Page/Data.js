import "./Data.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Component/NavigationBar";
import DataBencana from "../Component/DataBencana";

function Data() {
  return (
    <div className="Data">
      <NavigationBar />
      <div>
        <h1 className="text-center">Data Bencana</h1>
        <br/>
        <div className="row justify-content-center">
          <div className="mx-auto">
            <div className="d-flex justify-content-center">
              <DataBencana itemsPerPage={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
