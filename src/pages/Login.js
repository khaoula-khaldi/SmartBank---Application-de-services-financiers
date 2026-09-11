
import "../styles/Login.css";

export function Login() {
    return `
        <div class="login-page">
            <div class="login-card">

                <h1>Se connecter à votre compte</h1>

                <form id="login-form" novalidate>

                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                    >

                    <input
                        id="password"
                        type="password"
                        placeholder="Mot de passe"
                    >

                    <button type="submit">
                        Se connecter
                    </button>

                    <p>
                        Tu n'as pas de compte ?
                        <a href="/register" data-link>S'inscrire</a>
                    </p>

                </form>

            </div>
        </div>
    `;
}

export function initLogin() {
    const form = document.querySelector("#login-form");

    if (!form) return;

    form.addEventListener("submit", handleLogin);
}

function handleLogin(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.querySelector("#email").value.trim();
    const password = form.querySelector("#password").value;

    const users = JSON.parse(
        localStorage.getItem("users")
    ) || [];

    const user = users.find(
        user =>
            user.email === email &&
            user.password === password
    );

    if (!user) {
        console.log("Email ou mot de passe incorrect");
        return;
    }

    const currentUser = {
        name: user.name,
        email: user.email
    };

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );

    history.pushState({}, "", "/dashbord");

    window.dispatchEvent(new PopStateEvent("popstate"));
}

