import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const NewContact = () => {
	const { actions } = useContext(Context);
	const fullName = useRef();
	const email = useRef();
	const phone = useRef();
	const address = useRef();

	return (
		<>
			<div className='header text-center p-4'>
				<h1>Add a new contact</h1>
			</div>
			<Form className='px-5'>
				<Form.Group className="mb-3" controlId="formFullName">
					<Form.Label className='fw-semibold'>Full Name</Form.Label>
					<Form.Control ref={fullName} type="text" placeholder="Full Name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formEmail">
					<Form.Label className='fw-semibold'>Email</Form.Label>
					<Form.Control ref={email} type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPhone">
					<Form.Label className='fw-semibold'>Phone</Form.Label>
					<Form.Control ref={phone} type="phone" placeholder="Enter phone" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formAddress">
					<Form.Label className='fw-semibold'>Address</Form.Label>
					<Form.Control ref={address} type="text" placeholder="Enter address" />
				</Form.Group>

				<Link to={"/"}>
					<div className="d-grid gap-2">
						<Button
							onClick={() => actions.createContact(
								fullName.current.value,
								email.current.value,
								address.current.value,
								phone.current.value
							)} variant="primary">
							Save
						</Button>
					</div>
				</Link>

				<Button href='/' variant="link" className="p-0">
					or get back to contacts
				</Button>
			</Form>
		</>
	);
};
