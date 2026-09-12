import "../styles/sidebar.css";

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

                <a href="/profile" data-link>
                    Profile
                </a>

                <a href="/History" data-link>
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
    console.log("INIT SIDEBAR");

    const logout = document.getElementById("logout");

    if (!logout) {
        return;
    }
console.log(" khrej mn if ! logout ");

    logout.addEventListener("click", () => {
        console.log("dkhal l'event ");


        localStorage.removeItem("currentUser");

        history.pushState({}, "", "/login");

        window.dispatchEvent(new PopStateEvent("popstate"));
    });
}