import { Sidebar } from "../components/Sidebar.js";
import "../styles/Offres.css";
 


export function offres() {
    return `
        <div class="offers-page">

            ${Sidebar()}

            <main class="main-content">

                <h1>Nos offres</h1>

                <div id="offers-container"></div>

            </main>

        </div>
    `;
}


export async function initOffers() {

    const response = await fetch("/data/offers.json");

    const offers = await response.json();

    const container = document.querySelector("#offers-container");

    container.innerHTML = offers.map(offer => `
        <div class="offer-card">

            <h2>${offer.title}</h2>

            <p>${offer.description}</p>

            <p>Taux : ${offer.rate}%</p>

            <span>${offer.category}</span>

        </div>
    `).join("");
}