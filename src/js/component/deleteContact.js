import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Context } from '../store/appContext';

function DeleteContact({ show, setShow, id }) {
	const { actions } = useContext(Context);

	return (
		<>
			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Are you sure?</Modal.Title>
				</Modal.Header>
				<Modal.Body>If you delete this thing the entire universe will go down!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>
					Oh no!
					</Button>
					<Button variant="primary" onClick={() => actions.deleteContact(id) && setShow(false)}>
					Yes baby!
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default DeleteContact
