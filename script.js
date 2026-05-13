
const pedra = document.querySelector("#pedra");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");
const sorteio = document.querySelector("#sorteio");
const play = document.querySelector(".play");
const container = document.querySelector("#container");
const jogar = document.querySelector("#jogar");

const jogardorParagrafo = document.querySelector("#jogador");
const computadorParagrafo = document.querySelector("#computador");

const resultadoTitulo = document.querySelector("#resultado");

let jogadormao


play.addEventListener("click",()=>{
    container.classList.toggle("esconder");
    jogar.classList.toggle("esconder");
});


sorteio.addEventListener("click", (e) => {
    e.preventDefault()
    sorteioFuncao()
});




const sorteioFuncao = () => {


    let mao = ["👊","🖐","✌"];

    let random = Math.floor(Math.random() * 3);

  
    let computadorMao = mao[random];



    if (jogador != undefined) {
        console.log(random)
        console.log("------------------------")
        console.log("jogador: " +jogadormao)
        console.log("computador:" + computador)

        jogardorParagrafo.innerHTML = jogadormao;
        computadorParagrafo.innerHTML = computadorMao;
        if(jogadormao == undefined){
           
            jogardorParagrafo.innerHTML = "";
            computadorParagrafo.innerHTML = "";
            resultadoTitulo.innerHTML = "Escolha um objeto"
            
        }
        else if (jogadormao == computadorMao) {
            resultadoTitulo.innerHTML = "😑<br>EMPATE"
            console.log("😑<br>EMPATE")

        } else if (jogadormao == "✌" && computadorMao == "👊") {
            resultadoTitulo.innerHTML = "😔<br>VOCÊ PERDEU!"
            console.log("VOCÊ PERDEU !!!");

        } else if (jogadormao == "👊" && computadorMao == "🖐") {
            resultadoTitulo.innerHTML = "😔<br>VOCÊ PERDEU!"
            console.log("VOCÊ PERDEU !!!");

        } else if (jogadormao == "🖐" && computadorMao == "✌") {
            resultadoTitulo.innerHTML = "😔<br>VOCÊ PERDEU!"
            console.log("VOCÊ PERDEU !!!");

        } else {
            resultadoTitulo.innerHTML = "😀<br>🎊VITÓRIA🎊"
            console.log("😀<br>VITóRIA !!!")
        }



    } else {
        resultadoTitulo.innerHTML = "Selecione um valor!"
        console.log("selecione um valor!")
    }

}




pedra.addEventListener("click", (e) => {
    e.preventDefault()

    jogador = "pedra";
    jogadormao = "👊"
     jogardorParagrafo.innerHTML = jogadormao;
    console.log(" Escolheu "+jogador)
    computadorParagrafo.innerHTML = "";
});

papel.addEventListener("click", (e) => {
    e.preventDefault()

    jogador = "papel";
    jogadormao = "🖐"
    jogardorParagrafo.innerHTML = jogadormao;
    console.log(" Escolheu "+jogador)
    computadorParagrafo.innerHTML = "";
});

tesoura.addEventListener("click", (e) => {
    e.preventDefault()

    jogador = "tesoura";
    jogadormao = "✌"
    jogardorParagrafo.innerHTML = jogadormao;
    console.log(" Escolheu "+jogador)
    computadorParagrafo.innerHTML = "";
});