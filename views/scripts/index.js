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

    fullname.innerHTML = `${contact.firstname} ${contact.lastname}`
    deleteContactModal.show();
}