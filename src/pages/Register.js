import '../styles/register.css';

export function Register() {
    return `
        <div class="register-page">
            <div class="register-card">
                <h1>Créer un compte</h1>

                <form id="register-form">

                    <input
                        id="name"
                        type="text"
                        placeholder="Nom"
                    >
                    <div id="name-error"></div>


                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                    >
                    <div id="email-error"></div>


                    <input
                        id="password"
                        type="password"
                        placeholder="Mot de passe"
                    >
                    <div id="password-error"></div>


                    <input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirmer le mot de passe"
                    >
                    <div id="confirm-password-error"></div>


                    <button type="submit">
                        S'inscrire
                    </button>
                    <p> Déjà un compte ? <a href="/login">Se connecter</a> </p>

                </form>
            </div>
        </div>
    `;
}

export function initRegister() {
    const form = document.querySelector('#register-form');
    // console.log("good ")

    form.addEventListener('submit', handleRegister);
}


function handleRegister(event) {
    event.preventDefault();

    const form = document.querySelector('#register-form');

    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;
    const confirmPassword = form.querySelector('#confirm-password').value;


    const nameError = form.querySelector('#name-error');
    const emailError = form.querySelector('#email-error');
    const passwordError = form.querySelector('#password-error');
    const confirmPasswordError = form.querySelector('#confirm-password-error');

    let isValid = true;

    if (name === "" || name.length < 5) {
        nameError.innerHTML = "Entre un vrai nom";
        isValid=false;
    }


    if (email === "" || !email.includes("@")) {
        emailError.innerHTML = "Entre un vrai email";
        isValid=false;
    }


    if (password === "" || password.length < 8) {
        passwordError.innerHTML = "Entre un mot de passe fort";
        isValid=false;
    }


    if (confirmPassword !== password) {
        confirmPasswordError.innerHTML = "Les mots de passe ne correspondent pas";
        isValid=false;
    }

    if(isValid===true){
        const user =
            {
                "name":name,
                "email":email,
                "password":password
            };
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser  = users.find(user=>user.email===email);
        if(existingUser){
            emailError.innerHTML= "ce email est deja utiliser";
            isValid=false;
        }else{
            users.push(user);
            localStorage.setItem("users",JSON.stringify(users));
            nameError.innerHTML = "";
            emailError.innerHTML = "";
            passwordError.innerHTML = "";
            confirmPasswordError.innerHTML = "";
        }

    }


}
