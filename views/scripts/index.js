function showContactModal(contact) {
    const contactModal = new bootstrap.Modal(document.querySelector('#showContactModal'), {})
    const fullname = document.querySelector('#contactFullname');
    const email = document.querySelector('#contactEmail');
    const mobile = document.querySelector('#contactMobile');
    
    fullname.innerHTML = `${contact.firstname} ${contact.lastname}`
    email.innerHTML = contact.email;
    mobile.innerHTML = contact.mobile;

    contactModal.show();
}

function deleteContactModal(contact) {
    const deleteContactModal = new bootstrap.Modal(document.querySelector('#deleteContactModal'), {})
    const fullname = document.querySelector('#deleteContactFullname');

    fullname.innerHTML = `${contact.firstname} ${contact.lastname}`
    deleteContactModal.show();
}