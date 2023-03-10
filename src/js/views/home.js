import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../component/card";

export const Home = () => {
	const {contactList} = useContext(Context);

  // ----------------------------------- GET ALL AGENDAS
  const [agendas, setAgendas] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const result = await fetch('https://assets.breatheco.de/apis/fake/contact/agenda');
      const jsonResult = await result.json();

      setAgendas(jsonResult);
  }
  getContacts();
  }, [])
  console.log(agendas);

	return (
		<div className="home">
			<div className="d-flex justify-content-end mx-5 p-4">
				<Link to="/newContact">
					<button className="btn btn-primary">Add new contact</button>
				</Link>
			</div>
			{contactList.result.map(result =>
				<Card
					key={Math.random()}
					id={result.id}
					fullName={result.full_name}
					phone={result.phone}
					email={result.email}
					address={result.address}
				/>
			)}
		</div>
	)
};
