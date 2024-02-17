import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Reservation from "./images/reservation.jpg";
import "./components css/TableReservations.css";

export default function TableReservations() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    date: "",
    time: "",
    numberOfGuests: "",
    occasion: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Data sent");
    setData({
      date: "",
      time: "",
      numberOfGuests: "",
      occasion: "",
    });

    navigate("/ReservationsDetails");
  };

  return (
    <>
      <section className="reservations-title">
        <h1>Table Reservations</h1>
        <p>
          "Savor the exquisite tastes of Chicago's premier Mediterranean dining
          experience.
          <br />
          We eagerly await the opportunity to extend our warmest hospitality to
          you at our esteemed restaurant."
        </p>
        <img className="reservations-img" src={Reservation} alt="" />
      </section>
      <form
        className="reservations-container"
        onSubmit={submitHandler}
        action=""
      >
        <label htmlFor="date" className="form-label">
          Choose a Date
        </label>
        <input
          required
          id="date"
          name="date"
          value={data.date}
          onChange={changeHandler}
          type="date"
        />
        <label className="form-label" htmlFor="time">
          Choose time
        </label>
        <select
          name="time"
          value={data.time}
          onChange={changeHandler}
          id="time"
        >
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
        <label className="form-label" htmlFor="numberOfGuests">
          Number of Guests
        </label>
        <input
          name="numberOfGuests"
          value={data.numberOfGuests}
          onChange={changeHandler}
          placeholder="1"
          min={1}
          max={10}
          id="numberOfGuests"
          type="number"
        />
        <label className="form-label" htmlFor="occasion">
          Occasion
        </label>
        <select
          name="occasion"
          value={data.occasion}
          onChange={changeHandler}
          id="occasion"
        >
          <option value=""></option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Reserve a table" />
      </form>
    </>
  );
}
