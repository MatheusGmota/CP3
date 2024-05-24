let tokenUser = sessionStorage.getItem("token");
if(tokenUser != "" && tokenUser != undefined) {
    const usuario = JSON.parse(localStorage.getItem("usuario-logado"));

    if(usuario) {
        const viewUserName = document.querySelector("#nome-usuario");
        viewUserName.innerText = usuario.nomeUsuario; 

        const viewUserEmail = document.querySelector("#email-usuario");
        viewUserEmail.innerText = usuario.emailUsuario;

        const viewUserTel = document.querySelector("#telefone");
        viewUserTel.innerText = usuario.telefone;

        const viewUserCpf = document.querySelector("#cpf-usuario");
        viewUserCpf.innerText = usuario.cpfUsuario;


        const elLogoutUser = document.querySelector("#logout-usuario");
        elLogoutUser.addEventListener("click",()=>{
        sessionStorage.removeItem("token")
        localStorage.removeItem("usuario-logado");
        window.location.href = "../index.html";
    });
    } 
    else{
        window.location.href = "../status/erro.html"
    }
}