import "../styles/login.css";
export function Login() {
  return ` <div class="login-page">
    <div class="login-card">
    <h1>Se connecter à votre compte</h1> 
        <form id="login-form" novalidate>
            <input id="email" type="email" placeholder="Email" >
            <input id="password" type="password" placeholder="Mot de passe" > 
            <button type="submit"> Se connecter </button>
            <p> tu n'apas une compte  <a href="/register">S'inscrire</a> </p>
        </form> 
        <div class="deriction"></div>
     </div> </div> `;
}
export function initLogin() {
    const form = document.querySelector("#login-form");
    const deriction = document.querySelector("#deriction");

    form.addEventListener("submit", handleLogin);
    deriction.innerHTML = `<a href="/dashbord" ></a>`;

}
 function handleLogin() {
  const form = document.querySelector("#login-form");
  const email = form.querySelector("#email").value;
  const password = form.querySelector("#password").value;


  const users = JSON.parse(localStorage.getItem("users") || []);
  if(users.length == 0){
    console.log("aucun user en storage");
  }
  
  if(users.find(user=>user.email===email && user.password===password)){
    console.log("j'ai trouver une user")
  }else{
        console.log("mote de passe ou email incorrect ");
}
  
}
