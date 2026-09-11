
import { Register, initRegister} from '../pages/Register.js';
import { Login ,initLogin } from '../pages/login.js';
import { Welcome } from '../pages/Welcome.js';  
import { bonjour } from '../pages/Dashbord.js';
import { offres, initOffers } from "../pages/Offers.js";
import {Credit,simuler} from "../pages/Credit.js";
import {Promotions,initPromotions} from "../pages/Promotions.js";
import {History , initHistory} from "../pages/History.js";
import { Profile , initProfile } from '../pages/profile.js';

import { Sidebar, initSidebar } from "../components/Sidebar.js";

export function router() {
    const path = window.location.pathname;
    const root = document.querySelector('#root');

    if(path === '/'){
        root.innerHTML =Welcome();
    }
    if(path === '/dashbord'){
        root.innerHTML = bonjour();
        initSidebar();

    }

    if (path === '/register') {
        root.innerHTML = Register();
        initRegister();
    }
    if(path === '/login'){

        root.innerHTML= Login();
        initLogin();
    }
        
    if(path === '/offers'){

        root.innerHTML= offres();
        initOffers();
        initSidebar();
 
    }
    if(path === '/credit'){
        root.innerHTML = Credit();
        simuler();
        initSidebar();

    }
    if(path === '/Promotions'){
        root.innerHTML=Promotions();
        initPromotions();
        initSidebar();

    }
    
    if(path === '/History'){
        root.innerHTML=History();
        initHistory();
        initSidebar();

    }

    if(path === '/profile'){
        root.innerHTML=Profile();
        initProfile();
        initSidebar();
    }
    

}
window.addEventListener("popstate", router);