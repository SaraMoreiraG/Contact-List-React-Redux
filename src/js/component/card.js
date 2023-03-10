import React, { useState } from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot, faPhoneFlip, faEnvelope, faPencil, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import DeleteContact from './deleteContact';
import EditContact from './editContact';

function Card( {id, fullName, phone, email, address, setContactList} ) {
	const [modalDelete, setModalDelete] = useState(false);

	const [fullscreen, setFullscreen] = useState(true);
	const [modalEdit, setModalEdit] = useState(false);
	function handleModalEdit(breakpoint) {
		setFullscreen(breakpoint);
		setModalEdit(true);
	}

	return (
		<div id={id} className='container border text-center border-secondary-subtle mx-5 p-3'>
			<div className='row flex-wrap justify-content-center px-2'>
				<div className='foto col-md-2 col-sm-3'>
					<img
						className='rounded-circle'
						src='https://avatars.githubusercontent.com/u/102431124?v=4'
						alt='Contact'
					/>
				</div>
				<div className='details col-md-8 col-sm-7 col-xs-5 text-start'>
					<h1 className='fs-4'>{fullName}</h1>
					<div className='adress d-flex flex-row'>
						<FontAwesomeIcon icon={faLocationDot} className='me-2'></FontAwesomeIcon>
						<p>{address}</p>
					</div>
					<div className='phone d-flex flex-row'>
						<FontAwesomeIcon icon={faPhoneFlip} className='me-2'></FontAwesomeIcon>
						<p>{phone}</p>
					</div>
					<div className='email d-flex flex-row text-wrap'>
						<FontAwesomeIcon icon={faEnvelope} className='me-2'></FontAwesomeIcon>
						<p>{email}</p>
					</div>
				</div>
				<div className='edit col-md-2 d-flex align-items-start justify-content-center'>
					<button type="button" className="btn btn-link" onClick={() => handleModalEdit(true)}>
						<FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
					</button>

					<button type="button" className="btn btn-link" onClick={() => setModalDelete(true)}>
						<FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
					</button>
				</div>
				{modalDelete && <DeleteContact show={modalDelete} setShow={setModalDelete} id={id} setContactList={setContactList}/>}
				{modalEdit && <EditContact show={modalEdit} setShow={setModalEdit} fullscreen={fullscreen}
								id={id} fullName={fullName} phone={phone} email={email} address={address} />}
			</div>
		</div>
	)
}

export default Card
