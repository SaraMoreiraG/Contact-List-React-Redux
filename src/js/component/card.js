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
		<div id={id} className='container p-3'>
			<div className='border border-secondary-subtle p-3'>
				<div className='row flex-wrap justify-content-center px-2'>

					<div className='col-lg-2 col-sm-6 col-xs-3'>
						<div className='thumbnail'>
							<div className='img-container'>
								<img
									className='image'
									src='https://www.consumer.es/app/uploads/2019/07/img_golpe-calor-perros-reconocer-trucos.jpg'
									alt={fullName}
								/>
							</div>
						</div>
					</div>

					<div className='col-lg-7 col-sm-6 col-xs-3 text-start ml-2'>
						<h1 className='fs-3 my-3'>{fullName}</h1>
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

					<div className='col-lg-3 col-sm-12 col-xs-3 d-flex align-items-start justify-content-center'>
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
		</div>
	)
}

export default Card
