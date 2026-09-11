// import '../styles/History.css';
import { Sidebar } from "../components/Sidebar.js";

export function History() {
    return `
     ${Sidebar()}
        <div id="page">
        </div>
    `;
}

export function initHistory() {
    const currentUser= JSON.parse(localStorage.getItem("currentUser"));
    const page = document.getElementById('page');

    const title = document.createElement('h1');
    title.textContent = "Mon historique";

    page.appendChild(title);

    const data = JSON.parse(localStorage.getItem("credits")) || [];
    
        data.forEach(element => {
            const mesCredit = document.createElement('p');
                if(element.userEmail === currentUser.email){
                mesCredit.textContent = `
                    Montant : ${element.amount} DH
                    | Durée : ${element.duration} mois
                `;

                page.appendChild(mesCredit);
            }
        });
    

}