import React, { useEffect, useState } from "react";
import API from "../../api";
import PersonTile from "./PersonTile";
import LocationButtons from "./LocationButtons";
import PeopleSearch from "./PeopleSearch";

export const errorMessage = "Could not retrieve data.";


export default function People() {
  const [employees, setEmployees] = useState([]);
  const [location, setLocation] = useState("Cincinnati");
  const [name, setName] = useState("");

  useEffect(() => {
    API.get(`/employees?queryOffice=${location}`)
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log("error");
        setEmployees(errorMessage);
      });
  }, [location]);

  const arr = employees.filter((person) => {
    return person.name.toLowerCase().includes(name.toLowerCase());
  });

  const employeeList = arr.map(({ photo, name, role }) => (
    <PersonTile 
      key={photo} 
      name={name} 
      role={role} 
      photo={photo}
    />
  ));
  
  return (
    <div className="container" data-testid="people-page">
      <LocationButtons location={location} setLocation={setLocation} />
      <PeopleSearch name={name} setName={setName} />
      <div className="row justify-content-center">
        {employeeList}
      </div>
    </div>
  );
}
