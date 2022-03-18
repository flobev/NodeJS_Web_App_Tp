let error = false;
let apiMsg = '';

async function deleteContact(contactId) {
    const url = `http://localhost:3000/contact/${contactId}`;

    const params = {
        headers: {
            'Accept': "application/json, text/plain, */*",
            'Content-Type': "application/json;charset=utf-8"
        },
        method: "DELETE"
    }

    await fetch(url, params)
        .then(response => response.json())
        .then(data => {
            error = data.error;
            apiMsg = data.message;
        })
        .catch(() => {
            error = true;
            apiMsg = 'Service momentanément indisponible.'
        })
}

async function validDelete(contactId) {
    await deleteContact(contactId);

    // const deleteContactModal = new bootstrap.Modal(document.querySelector('#deleteContactModal'), {})
    // deleteContactModal.hide();

    console.log(apiMsg);
}

function showContactModal(contact) {
    const contactModal = new bootstrap.Modal(document.querySelector('#showContactModal'), {})
    const fullname = document.querySelector('#contactFullname');
    const email = document.querySelector('#contactEmail');
    const tel = document.querySelector('#contactTel');
    
    fullname.innerHTML = `${contact.firstname} ${contact.lastname}`
    email.innerHTML = contact.email;
    tel.innerHTML = contact.tel;

    contactModal.show();
}

function deleteContactModal(contact) {
    const deleteContactModal = new bootstrap.Modal(document.querySelector('#deleteContactModal'), {})
    const fullname = document.querySelector('#deleteContactFullname');
    const deleteBtn = document.querySelector('#deleteBtn')

    fullname.innerHTML = `${contact.firstname} ${contact.lastname}`
    deleteBtn.addEventListener('click', event => validDelete(contact._id), {once: true})

    deleteContactModal.show();
}