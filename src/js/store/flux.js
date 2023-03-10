const getState = ({ getStore, getContactList, getActions, setStore, setContactList }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		contactList : {
			result: [
			]
		},

		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadContactList : async () => {
				const contactList = getContactList();
				fetch('https://assets.breatheco.de/apis/fake/contact/agenda/sara_moreira')
				.then(response => response.json())
				.then(data => setContactList({ result: data }))
			},

			createContact : async (full_name, email, address, phone) => {
				console.log(full_name);
				const newContact = {
					full_name: full_name,
					email: email,
					agenda_slug: "sara_moreira",
					address: address,
					phone: phone,
				}
				console.log(newContact);
				fetch(`https://assets.breatheco.de/apis/fake/contact/`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newContact)
				}).then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => console.log('Success:', response))
				.catch(error => console.error(error));
			},

			editContact : async (id, newFull_name, newEmail, newAddress, newPhone) => {
				const editContact = {
					full_name: newFull_name,
					email: newEmail,
					address: newAddress,
					phone: newPhone,
				}
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(editContact)
				})
			},

			deleteContact : async (id) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {method: 'DELETE'})
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
