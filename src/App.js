import "./App.css";
import TableReservations from "./components/TableReservations";
import ReservationsDetails from "./components/ReservationsDetails";
import NavBar from "./components/NavBar";
import MetaTags from "./MetaTags";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <MetaTags />
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
    </>
  );
}

export default App;
