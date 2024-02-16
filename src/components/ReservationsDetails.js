import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./components css/ReservationsDetails.css";

export default function ReservationsDetails() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    allergies: "",
  });

  const detailsHandler = (e) => {
    const { name, value } = e.target;
    setDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitDetailsHandler = (e) => {
    e.preventDefault();
    alert(
      "Your reservation was succesful a confirmation email was sent. See you soon!"
    );
    setDetails({
      name: "",
      email: "",
      allergies: "",
    });
    navigate("/");
  };

  return (
    <form onSubmit={submitDetailsHandler} action="">
      <label className="details-label" htmlFor="">
        Name
      </label>
      <input
        required
        name="name"
        value={details.name}
        onChange={detailsHandler}
        type="text"
      />
      <label className="details-label" htmlFor="">
        Email
      </label>
      <input
        required
        name="email"
        value={details.email}
        onChange={detailsHandler}
        type="email"
      />
      <label htmlFor="">Allergies</label>
      <input
        name="allergies"
        value={details.allergies}
        onChange={detailsHandler}
        type="checkbox"
      />
      <input type="submit" value="Confirm details" />
    </form>
  );
}
