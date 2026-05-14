
const pedra = document.querySelector("#pedra");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");
const sorteio = document.querySelector("#sorteio");
const play = document.querySelector(".play");
const novamente = document.querySelector("#novamente");
const container = document.querySelector("#container");
const jogar = document.querySelector("#jogar");
const placar = document.querySelector("#placar")

const jogardorParagrafo = document.querySelector("#jogador");
const computadorParagrafo = document.querySelector("#computador");
const resultadoFinal = document.querySelector("#resultadoFinal");
const resultadoPartida = document.querySelector("#resultadoPartida");
const resultadoTitulo = document.querySelector("#resultado");
const jogadorPontos = document.querySelector("#jogadorPontos")
const computadorPontos = document.querySelector("#computadorPontos");
let jogadormao

let plcarJogador = 0;
let placarComputador = 0;

play.addEventListener("click", () => {
    container.classList.toggle("esconder");
    jogar.classList.toggle("esconder");
    placar.classList.toggle("esconder");

});

novamente.addEventListener("click", () => {
    placar.classList.toggle("esconder");
    container.classList.toggle("esconder");
    plcarJogador = plcarJogador - plcarJogador;
    placarComputador = placarComputador - placarComputador;
    computadorPontos.innerHTML = placarComputador;
    jogadorPontos.innerHTML = plcarJogador;
    resultadoFinal.classList.toggle("esconder");

     resultadoTitulo.innerHTML = "🤔 <br>..."


    

});


sorteio.addEventListener("click", (e) => {
    e.preventDefault()
    sorteioFuncao()
});




const sorteioFuncao = () => {


    let mao = ["👊", "🖐", "✌"];

    let random = Math.floor(Math.random() * 3);


    let computadorMao = mao[random];



    if (jogador != undefined) {
        console.log(random)
        console.log("------------------------")
        console.log("jogador: " + jogadormao)
        console.log("computador:" + computador)

        jogardorParagrafo.innerHTML = jogadormao;
        computadorParagrafo.innerHTML = computadorMao;
        if (jogadormao == undefined) {

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
            placarComputador++
            computadorPontos.innerHTML = placarComputador;

        } else if (jogadormao == "👊" && computadorMao == "🖐") {
            resultadoTitulo.innerHTML = "😔<br>VOCÊ PERDEU!"
            console.log("VOCÊ PERDEU !!!");
            placarComputador++
            computadorPontos.innerHTML = placarComputador;

        } else if (jogadormao == "🖐" && computadorMao == "✌") {
            resultadoTitulo.innerHTML = "😔<br>VOCÊ PERDEU!"
            console.log("VOCÊ PERDEU !!!");
            placarComputador++
            computadorPontos.innerHTML = placarComputador;

        } else {
            resultadoTitulo.innerHTML = "😀<br>GANHOU ESSA"
            console.log("😀<br>VITóRIA !!!")
            plcarJogador++
            jogadorPontos.innerHTML = plcarJogador;



        }

        if (plcarJogador == 5) {
            resultadoPartida.innerHTML = "🤩<br>🎊Parabéns🎊<br>Você Ganhou <br> o Jogo!"
            container.classList.add("esconder");
            jogar.classList.add("esconder");
            placar.classList.add("esconder");
            resultadoFinal.classList.toggle("esconder");



        } else if (placarComputador == 5) {
            resultadoPartida.innerHTML = "😥<br> Você perdeu o jogo"
            container.classList.add("esconder");
            jogar.classList.add("esconder");
            placar.classList.add("esconder");
            resultadoFinal.classList.toggle("esconder");


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
    console.log(" Escolheu " + jogador)
    computadorParagrafo.innerHTML = "";
});

papel.addEventListener("click", (e) => {
    e.preventDefault()

    jogador = "papel";
    jogadormao = "🖐"
    jogardorParagrafo.innerHTML = jogadormao;
    console.log(" Escolheu " + jogador)
    computadorParagrafo.innerHTML = "";
});

tesoura.addEventListener("click", (e) => {
    e.preventDefault()

    jogador = "tesoura";
    jogadormao = "✌"
    jogardorParagrafo.innerHTML = jogadormao;
    console.log(" Escolheu " + jogador)
    computadorParagrafo.innerHTML = "";
});