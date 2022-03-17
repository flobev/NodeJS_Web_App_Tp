let error = false;
let errorMsg = '';

async function register() {
    const url = 'http://localhost:8080/api/register';
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const bodyObj = {
        email: email,
        password: password
    }

    const params = {
        headers: {
            'Accept': "application/json, text/plain, */*",
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify(bodyObj),
        method: "POST"
    }
    
    error = false;

    await fetch(url, params)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                error = true;
                errorMsg = data.errorMsg;
            }
        })
        .catch(() => {
            error = true;
            errorMsg = 'Service momentanément indisponible.'
        })
}

async function validRegister() {
    const alert = document.querySelector('.alert');
    alert.classList.remove('show');

    await register();

    if (error) {
        alert.innerHTML = errorMsg;
        alert.classList.add('show');
    }
}