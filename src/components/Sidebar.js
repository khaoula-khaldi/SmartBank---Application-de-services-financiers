
export function Sidebar() {
    return `
        <aside class="sidebar">

            <div class="sidebar-logo">
                <h2>SmartBank</h2>
            </div>

            <nav class="sidebar-menu">

                <a href="/dashbord" data-link>
                    Dashboard
                </a>

                <a href="/offers" data-link>
                    Offres
                </a>

                <a href="/credit" data-link>
                    Crédit
                </a>

                <a href="/Promotions" data-link>
                    Promotions
                </a>

                <a href="/rewards" data-link>
                    Récompenses
                </a>

                <a href="/history" data-link>
                    Historique
                </a>


            </nav>

            <div class="sidebar-bottom">
                <button id="logout">
                    Déconnexion
                </button>
            </div>

        </aside>
    `;
}


export function initSidebar() {

    const links = document.querySelectorAll(".sidebar-menu a");

    links.forEach(link => {

        link.addEventListener("click", (event) => {

            // Empêche le comportement normal du <a>
            // donc pas de refresh
            event.preventDefault();

            // Récupérer l'URL
            const path = link.getAttribute("href");

            // Changer l'URL sans recharger la page
            history.pushState({}, "", path);

            // Demander au router de charger la nouvelle page
            window.dispatchEvent(
                new PopStateEvent("popstate")
            );
        });

    });


    // Logout
    const logoutButton = document.querySelector("#logout");

    if (logoutButton) {

        logoutButton.addEventListener("click", () => {

            localStorage.removeItem("currentUser");

            history.pushState({}, "", "/login");

            window.dispatchEvent(
                new PopStateEvent("popstate")
            );

        });

    }

}

