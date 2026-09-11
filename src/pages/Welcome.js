import "../styles/Welcome.css";

export function Welcome() {
    return `
        <div class="welcome-page">

            <h1>Bienvenue sur SmartBank</h1>

            <p>
                Gérez vos informations financières simplement
                et découvrez nos offres.
            </p>

            <div>
                <a href="/login" data-link>Se connecter</a>
                <a href="/register" data-link>Créer un compte</a>
            </div>

        </div>
    `;
}