import { Sidebar } from "../components/Sidebar.js";
import '../styles/Credit.css'

export function Credit() {
    return `
        <div class="credit-page">
            ${Sidebar()}
            <h1>Simulation de crédit</h1>

            <form id="credit-form">

                <label for="amount">Montant</label>

                <input
                    type="number"
                    id="amount"
                    placeholder="Ex: 100000"
                >

                <label for="duration">Durée (mois)</label>

                <input
                    type="number"
                    id="duration"
                    placeholder="Ex: 60"
                >

                <button type="submit">
                    Simuler
                </button>

                <div id="credit-result"></div>

            </form>

        </div>
    `;
}


export function simuler() {

    const form = document.querySelector("#credit-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        Calcul();
    });
}


function Calcul() {

    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    const amount = Number(
        document.querySelector("#amount").value
    );

    const duration = Number(
        document.querySelector("#duration").value
    );

    const credits =
        JSON.parse(localStorage.getItem("credits")) || [];

    const existingCredit = credits.find(
        credit => credit.userEmail === currentUser.email
    );

    if (existingCredit) {
        document.querySelector("#credit-result").innerHTML = `
            <div class="credit-error">
                Vous avez déjà effectué une simulation de crédit.
            </div>
        `;

        return;
    }

    const mensualite = amount / duration;

    const credit = {
        userEmail: currentUser.email,
        amount: amount,
        duration: duration,
        mensualite: mensualite
    };

    credits.push(credit);

    localStorage.setItem(
        "credits",
        JSON.stringify(credits)
    );

    document.querySelector("#credit-result").innerHTML = `
        <div class="credit-success">
            <p>
                Mensualité estimée :
                <strong>${mensualite.toFixed(2)} DH</strong>
            </p>
        </div>
    `;
}