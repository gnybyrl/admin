let username = document.getElementById('username')
let password = document.getElementById('password')
let errors = document.getElementById('errors')

let user = 'gny'
let pass = '123'

function login() {
    if (username.value === user && password.value == pass) {
        window.location.href = 'page/dashboard.htm'
    } else {
        errors.innerHTML = 
        `<div class="bg-red-100 text-center text-red-800 p-4" role="alert">
            <span class="font-semibold text-[15px] inline-block mr-4">Error!</span>
            <span class="block text-sm  font-medium sm:inline max-sm:mt-2">Daxil etdiyiniz istifadeci adi ve ya parol yanlisdir!</span>
        </div> `

        
    }
}

function showPassword() {
    password.type == 'password' ? password.type = 'text' : password.type = 'password'
}