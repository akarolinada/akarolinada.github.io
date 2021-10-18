function showdice() {
    var dice = document.getElementById("dice");
    dice.style.display = "block";
}

function hidedice() {
    var dice = document.getElementById("dice");
    dice.style.display = "none"
}

let caixa = document.getElementById("caixaMaior");
function chamarJanela() {
    caixa.style.display = "block";
    if (document.getElementById("opcao1").checked)
        document.getElementById("mensagemCaixa").innerHTML = "Você escolheu Rail Road";
    else if (document.getElementById("opcao2").checked)
        document.getElementById("mensagemCaixa").innerHTML = "Você escolheu Potion Explosion";
    else if (document.getElementById("opcao3").checked)
        document.getElementById("mensagemCaixa").innerHTML = "Você escolheu Dixit";
    else document.getElementById("mensagemCaixa").innerHTML = "Você não escolheu jogo!";
}

function fecharJanela() {
    caixa.style.display = "none";
    for (let i = 1; i < 4; i++) {
        let check = document.getElementById("opcao" + i);
        check.checked = false;
    }
}