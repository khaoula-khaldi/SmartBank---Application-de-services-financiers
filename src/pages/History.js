import "../styles/History.css";
import { Sidebar } from "../components/Sidebar.js";

export function History() {
    return `
        <div class="history-page">

            ${Sidebar()}

            <main class="history-content">
                <div id="page"></div>
            </main>

        </div>
    `;
}

export function initHistory() {

    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    const page = document.getElementById("page");

    const title = document.createElement("h1");
    title.textContent = "Mon historique";

    page.appendChild(title);

    const data =
        JSON.parse(localStorage.getItem("credits")) || [];

    data.forEach(element => {

        if (element.userEmail === currentUser.email) {

            const mesCredit = document.createElement("p");

            mesCredit.textContent = `
                Montant : ${element.amount} DH
                | Durée : ${element.duration} mois
            `;

            page.appendChild(mesCredit);
        }
    });
}