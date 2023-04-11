import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { URL_HOST } from "../../urlHost";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage

  const [cars, setCars] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get(`${URL_HOST}/api/cars/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div>
      <Link to="/SearchPage">Go Search</Link>
    </div>
    // <div className="container">
    //   <h1>Home Page for {user.username}!</h1>
    //   {cars &&
    //     cars.map((car) => (
    //       <p key={car.id}>
    //         {car.year} {car.model} {car.make}
    //       </p>
    //     ))}
    // </div>
  );
};

export default HomePage;
