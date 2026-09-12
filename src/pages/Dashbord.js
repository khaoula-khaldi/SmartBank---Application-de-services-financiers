
import "../styles/dashbord.css";
import { Sidebar } from "../components/Sidebar.js";

export function bonjour() {

    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    if (!currentUser) {
        history.pushState({}, "", "/login");
        window.dispatchEvent(
            new PopStateEvent("popstate")
        );
        return "";
    }

    return `
        <div class="dashboard">

            <div class="dashboard-layout">

                ${Sidebar()}

                <div class="dashboard-main">



                    <main class="main-content">

                        <section class="welcome">
                            <h2>
                                Bonjour, ${currentUser.name}
                            </h2>

                            <p>
                                Voici un aperçu de votre espace.
                            </p>
                        </section>


                        <section class="summary-cards">

                            <div class="card">
                                <h3>Solde disponible</h3>
                                <p>0,00 DH</p>
                            </div>

                            <div class="card">
                                <h3>Crédit</h3>
                                <p>Aucune simulation</p>
                            </div>

                            <div class="card">
                                <h3>Récompenses</h3>
                                <p>0 points</p>
                            </div>

                        </section>


                        <section class="recommended">

                            <h2>Offres recommandées</h2>

                            <div class="offer-cards">

                                <div class="card">
                                    <h3>Crédit personnel</h3>
                                    <p>
                                        Financez vos projets facilement.
                                    </p>
                                </div>

                                <div class="card">
                                    <h3>Offre épargne</h3>
                                    <p>
                                        Faites fructifier votre épargne.
                                    </p>

                                </div>

                            </div>

                        </section>


                        <section class="flash-offer">

                            <h2>Offre flash</h2>

                            <div class="flash-card">

                                <div>
                                    <h3>Offre spéciale</h3>
                                    <p>
                                        Profitez de notre offre limitée.
                                    </p>
                                </div>

                            </div>

                        </section>


                        <section class="recent-activity">

                            <h2>Activité récente</h2>

                            <div class="activity">
                                <span>
                                    Aucune activité récente
                                </span>
                            </div>

                        </section>

                    </main>

                </div>

            </div>

        </div>
    `;
}
