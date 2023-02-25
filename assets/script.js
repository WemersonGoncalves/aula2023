let modalElement = document.querySelector("#showModalDialog");
let modalElement2 = document.querySelector("#showModalDialog2");
let i = 0;
var alertErrorName = document.getElementById("alertNameField");
var alertErrorMail = document.getElementById("alertMailField");
var alertcheck = document.getElementById("subBtnAlert");

function modalLearMore(i){
    modalElement.innerHTML = "";
    modalElement.innerHTML = ` 
    <div class="modalContent">
    <div>
        <button class="modalCloseBtn" onclick="closeModal()"><img src="./assets/images/Close.png" width= "25px"></button>
    </div>
        <h2>Quem somos nós? </h2>
        <p>Tudo o que fazemos procura é respeitar essa conexão, desde nosso compromisso de oferecer a melhor qualidade do mundo até a forma como nós interagimos com nossos clientes e nossas comunidades para conduzir nosso negócio de modo responsável.
        </p>
        <img src="./assets/images/Design Místico Logotipo 2.png" alt="MooNow Logo">      
    </div>`;
    modalElement.style.display = "block";    
}
function closeModal() {
    modalElement.style.display = "none";
}

function modalMoreInfo(i){
    modalElement2.innerHTML = "";
    modalElement2.innerHTML = ` 
    <div class="modalContent">
    <div>
        <button class="modalCloseBtn2" onclick="closeModal2()"><img src="./assets/images/Close.png" width= "25px"></button>
    </div>
        <h2>Por que vamos para a lua?</h2>
        <p>Com as missões, a MooNow vai pousar as primeiras pessoas na Lua, usando tecnologias inovadoras para explorar mais da superfície lunar do que nunca. Colaboraremos com parceiros comerciais e internacionais e estabeleceremos a primeira presença de longo prazo na Lua. Então, usaremos o que aprendemos na Lua e ao redor dela para dar o próximo salto gigantesco: enviar os primeiros astronautas a Marte.
        Estamos voltando para a Lua em busca de descobertas científicas, benefícios econômicos e inspiração para uma nova geração de exploradores: a Geração Artemis. Mantendo a liderança americana na exploração, construiremos uma aliança global e exploraremos o espaço profundo para o benefício de todos.
        </p>
        <img src="./assets/images/Design Místico Logotipo 2.png" alt="MooNow Logo">      
    </div>`;
    modalElement2.style.display = "block";    
}
function closeModal2() {
    modalElement2.style.display = "none";
}

function checkInfoSubmit(){
    var userName = document.getElementById("fullNameField").value;
    var userMail = document.getElementById("emailField").value;

    if(userName == null || userName == ""){
    alertErrorName.innerHTML = "*Campo Obrigatório*";
    alertErrorName.style.color = "#EF0909";

    alertcheck.innerHTML = "Campos obrigatórios não registrados.";
    alertcheck.style.color = "#EF0909";
    }
    else if(userMail == null || userMail == ""){
        alertErrorName.innerHTML = "";
        alertErrorMail.innerHTML = "*Campo Obrigatório*";
        alertErrorMail.style.color = "#EF0909";
 
        alertcheck.innerHTML = "Campos obrigatórios não registrados.";
        alertcheck.style.color = "#EF0909";
    }
    else{
    alertErrorName.innerHTML = "";
    alertErrorMail.innerHTML = "";
    alertcheck.innerHTML = "Sucesso";
    alertcheck.style.color = "#44B856";
    return 0;
    }
}