import "./App.css";
import TableReservations from "./components/TableReservations";
import ReservationsDetails from "./components/ReservationsDetails";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main container">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<TableReservations />} />
          <Route
            path="/ReservationsDetails"
            element={<ReservationsDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
