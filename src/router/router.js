import { Register, initRegister} from '../pages/Register.js';
import { Login ,initLogin } from '../pages/login.js';
import { Welcome } from '../pages/Welcome.js';  
import { bonjour } from '../pages/Dashbord.js';


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

}