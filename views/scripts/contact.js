let error = false;
let apiMsg = '';

async function addContact() {
    const url = 'http://localhost:3000/contact/add';
    const firstname = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#email').value;
    const tel = document.querySelector('#tel').value;
    const street = document.querySelector('#street').value;
    const city = document.querySelector('#city').value;
    const zipcode = document.querySelector('#zipcode').value;
    const country = document.querySelector('#country').value;

    const bodyObj = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        tel: tel,
        address: {
            street: street,
            city: city,
            zipcode: zipcode,
            country: country
        }
    }

    const params = {
        headers: {
            'Accept': "application/json, text/plain, */*",
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify(bodyObj),
        method: "POST"
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

async function validContact() {
    await addContact();

    const alert = document.querySelector('.alert');
    alert.innerHTML = apiMsg;

    if (error)
        alert.classList.replace('alert-success', 'alert-danger');
    else {
        document.querySelector('#firstname').value = '';
        document.querySelector('#lastname').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#tel').value = '';
        document.querySelector('#street').value = '';
        document.querySelector('#city').value = '';
        document.querySelector('#zipcode').value = '';
        document.querySelector('#country').value = '';
        
        alert.classList.replace('alert-danger', 'alert-success');
    }

    alert.classList.add('show');
}

async function editContact(contactId) {
    const url = `http://localhost:3000/contact/${contactId}`;
    const firstname = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#email').value;
    const tel = document.querySelector('#tel').value;
    const street = document.querySelector('#street').value;
    const city = document.querySelector('#city').value;
    const zipcode = document.querySelector('#zipcode').value;
    const country = document.querySelector('#country').value;

    const bodyObj = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        tel: tel,
        address: {
            street: street,
            city: city,
            zipcode: zipcode,
            country: country
        }
    }

    const params = {
        headers: {
            'Accept': "application/json, text/plain, */*",
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify(bodyObj),
        method: "PUT"
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

async function validEditContact(contact) {
    await editContact(contact._id);
    
    const alert = document.querySelector('.alert');
    alert.innerHTML = apiMsg;

    if (error)
        alert.classList.replace('alert-success', 'alert-danger');
    else
        alert.classList.replace('alert-danger', 'alert-success');

    alert.classList.add('show');
}