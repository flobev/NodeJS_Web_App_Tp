const deleteModal = new bootstrap.Modal(document.querySelector('#deleteContactModal'), {})
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
    
    deleteModal.hide();
    
    const alert = document.querySelector('.alert');
    alert.innerHTML = apiMsg;
  
    if (error)
        alert.classList.replace('alert-success', 'alert-danger');
    else {
        document.getElementById(contactId).remove();
        alert.classList.replace('alert-danger', 'alert-success');
    }
    
    alert.classList.add('show');
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
    const fullname = document.querySelector('#deleteContactFullname');
    const deleteBtn = document.querySelector('#deleteBtn')

    fullname.innerHTML = `${contact.firstname} ${contact.lastname}`
    deleteBtn.addEventListener('click', event => validDelete(contact._id), {once: true})

    deleteModal.show();
}