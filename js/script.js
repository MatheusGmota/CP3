let usuarios = [
    {nomeUsuario: 'Sidnei', telefone: '12345678911', cpfUsuario: '12345678909', emailUsuario: 'sid@email.com', senha: '12345'},
    {nomeUSuario: 'Maria', telefone: '98765432100', cpfUsuario: '98765432100', emailUsuario: 'maria@email.com', senha: '54321'}
];

if(localStorage.getItem("base-dados") == null) {
    localStorage.setItem("base-dados", JSON.stringify(usuarios));
}
        
function validaLogin(input1, input2) {     
    console.log(input1.value, input2);

    const usuarios = JSON.parse(localStorage.getItem("base-dados"));

    const msgValidacao = document.querySelector(".msgValidacao");

    for(let i = 0; i < usuarios.length; i++) {
        console.log(usuarios[i]);
        if((usuarios[i].emailUsuario == input1.value) && (usuarios[i].senha == input2.value)) {
            
            localStorage.setItem("usuario-logado", JSON.stringify(usuarios[i]));

            const userToken = Math.random().toString(16).substring(2, 5)+Math.random().toString(16).substring(2, 5);

            sessionStorage.setItem("token", userToken);

            msgValidacao.setAttribute("class", "sucesso");
            msgValidacao.innerText = "Login realizado com sucesso!";

            setTimeout(()=>{
                msgValidacao.setAttribute("class", "msgValidacao");
                msgValidacao.innerText = "";
                window.location.href = "../status/pagina-inicial.html";
            }, 3000);
            return false
        }
    }

    msgValidacao.setAttribute("class", "erro");
    msgValidacao.innerText = "Nome de usuário ou senha incorretos!";
   
    return false;
};