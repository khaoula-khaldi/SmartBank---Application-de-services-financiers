import { Sidebar } from "../components/Sidebar.js";

import "../styles/promotion.css";

export function Promotions() {
    return `
        <div class="promotions-page">

            ${Sidebar()}

            <main class="promotions-content">

                <h1>Offres promotionnelles</h1>

                <div id="promotions-container">
                    <p>Chargement des offres...</p>
                </div>

            </main>

        </div>
    `;
}

export async function initPromotions() {

    const response = await fetch("/data/promotions.json");

    const promotions = await response.json();

    const container = document.querySelector("#promotions-container");

    const today = new Date();

    const activePromotions = promotions.filter(
        promotion => {
            const startDate = new Date(promotion.startDate);
            const endDate = new Date(promotion.endDate);

            return today >= startDate && today <= endDate;
        }
    );

    if (activePromotions.length === 0) {

        container.innerHTML = `
            <p>Aucune offre promotionnelle disponible.</p>
        `;

        return;
    }

    container.innerHTML = activePromotions.map(
        promotion => `
            <div class="promotion-card">

                <h2>${promotion.title}</h2>

                <p>
                    ${promotion.description}
                </p>

                <p>
                    Réduction :
                    <strong>${promotion.discount}%</strong>
                </p>

                <p> valable jusq'au : ${promotion.endDate}</p>


            </div>
        `
    ).join("");
}