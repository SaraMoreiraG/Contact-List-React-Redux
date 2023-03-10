import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewContact() {
	const fullName = useRef();
	const email = useRef();
	const phone = useRef();
	const address = useRef();

	console.log(fullName, email, phone, address);

	const handleSave = async () => {
		const newContact = {
			full_name: `${fullName.current.value}`,
			email: `${email.current.value}`,
			agenda_slug: "sara_moreira",
			address: `${address.current.value}`,
			phone: `${phone.current.value}`,
		}
		fetch('https://assets.breatheco.de/apis/fake/contact', {
			method: 'PUT',
			body: JSON.stringify(newContact),
			headers:{
			'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => console.log('Success:', response))
		.catch(error => console.error(error));
	}

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

					<div className="d-grid gap-2">
						<Button onClick={handleSave} variant="primary" type="submit">
							Save
						</Button>
					</div>

					<Button href='/' variant="link" className="p-0">
						or get back to contacts
					</Button>
				</Form>
		</>
	);
}

export default NewContact;
