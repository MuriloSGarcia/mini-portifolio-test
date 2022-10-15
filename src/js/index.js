const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click" , function(){

        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)


    })
})

function selecionarAna(aba){console.log("clicou na aba" , aba);
const abaSelecionada = document.querySelector(".aba.selecionado");
abaSelecionado.classList.remove("selecionado")

aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){querySelector("informacaoSelecionado");
informacaoSelecionado.classList.remove
("selecioando");

const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

const informacaoASerMostrada = document.getElementById(idDoElementoDeInformaçoesDaAba)
informacaoASerMostrada.classList.add("selecionado")

}