let token = '';

async function login() {
    const url = 'http://localhost:8080/api/login';
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

    await fetch(url, params)
        .then(response => response.json())
        .then(data => {
            token = data.token;
        })
        .catch(() => {
            return false;
        })
}

async function validLogin() {
    const alert = document.querySelector('.alert');
    alert.classList.remove('show');

    await login();

    if (!token)
        alert.classList.add('show');
}