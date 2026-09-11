
import { Register, initRegister} from '../pages/Register.js';
import { Login ,initLogin } from '../pages/login.js';
import { Welcome } from '../pages/Welcome.js';  
import { bonjour } from '../pages/Dashbord.js';
import { offres, initOffers } from "../pages/Offers.js";
import {Credit,simuler} from "../pages/Credit.js";
import {Promotions,initPromotions} from "../pages/Promotions.js";


export function router() {
    const path = window.location.pathname;
    const root = document.querySelector('#root');

    if(path === '/'){
        root.innerHTML =Welcome();
    }
    if(path === '/dashbord'){
        root.innerHTML = bonjour();
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
    }
    if(path === '/credit'){
        root.innerHTML = Credit();
        simuler();
    }
    if(path === '/Promotions'){
        root.innerHTML=Promotions();
        initPromotions();
    }


}
window.addEventListener("popstate", router);