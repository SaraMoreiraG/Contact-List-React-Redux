import React, { useContext, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../store/appContext';

function EditContact({ show, setShow, fullscreen, id, fullName, phone, email, address }) {
	const { actions } = useContext(Context);
	const newFullName = useRef();
	const newEmail = useRef();
	const newPhone = useRef();
	const newAddress = useRef();

	return (
		<>
			<Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
				<div className='header text-center p-4'>
					<h1>Edit contact</h1>
				</div>
				<Form className='px-5'>
					<Form.Group className="mb-3" controlId="formFullName">
						<Form.Label className='fw-semibold'>Full Name</Form.Label>
						<Form.Control ref={newFullName} type="text" placeholder={fullName} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formEmail">
						<Form.Label className='fw-semibold'>Email</Form.Label>
						<Form.Control ref={newEmail} type="email" placeholder={email} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formPhone">
						<Form.Label className='fw-semibold'>Phone</Form.Label>
						<Form.Control ref={newPhone} type="phone" placeholder={phone} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formAddress">
						<Form.Label className='fw-semibold'>Address</Form.Label>
						<Form.Control ref={newAddress} type="text" placeholder={address} />
					</Form.Group>

					<div className="d-grid gap-2">
						<Button
							onClick={() => actions.editContact(
								id,
								newFullName.current.value,
								newEmail.current.value,
								newAddress.current.value,
								newPhone.current.value
							) && setShow(false)}
							variant="primary">
								Update
						</Button>
					</div>

					<Button variant="link" onClick={() => setShow(false)} className="p-0">
						or get back to contacts
					</Button>
				</Form>
			</Modal>
		</>
	);
}

export default EditContact;
