import "../styles/profile.css";
import { Sidebar } from "../components/Sidebar.js";

export function Profile() {

    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    if (!currentUser) {
        return `
            <p>Utilisateur non connecté</p>
        `;
    }

    return `
        <div class="profile-page">

            ${Sidebar()}

            <main class="profile-content">

                <h1>Mon profil</h1>

                <form id="profile-form">

                    <label>Nom</label>

                    <input
                        type="text"
                        id="name"
                        value="${currentUser.name}"
                    >

                    <label>Email</label>

                    <input
                        type="email"
                        id="email"
                        value="${currentUser.email}"
                    >

                    <button type="submit">
                        Enregistrer
                    </button>

                    <p id="profile-message"></p>

                </form>

            </main>

        </div>
    `;
}

export function initProfile() {

    const form = document.getElementById("profile-form");

    if (!form) return;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        const currentUser = JSON.parse(
            localStorage.getItem("currentUser")
        );

        currentUser.name = name;
        currentUser.email = email;

        localStorage.setItem(
            "currentUser",
            JSON.stringify(currentUser)
        );

        document.getElementById("profile-message").textContent =
            "Profil modifié avec succès";
    });
}