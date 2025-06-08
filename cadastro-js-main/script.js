document.addEventListener("DOMContentLoaded", function () {
    const btnAdcionar = document.getElementById("btnAdicionar");
    btnAdcionar.addEventListener("click", function () {
        const nomeProduto = document.getElementById("id-Nome").value;
        const preco = document.getElementById("id-preco").value;
        const qtd = document.getElementById("id-qtd").value;
        const categoria = document.getElementById("id-categ").value;
        const tabela = document.querySelector(".tabelaBody")

        const novaLinha = tabela.insertRow();

        if (nomeProduto == "" || preco == "" || qtd == "" || categoria == "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const celulaNome = novaLinha.insertCell(0);
        const celulaPreco = novaLinha.insertCell(1);
        const celulaQuantidade = novaLinha.insertCell(2);
        const celulaCateg = novaLinha.insertCell(3);
        const celulaAcoes = novaLinha.insertCell(4);

        celulaNome.textContent = nomeProduto;
        celulaPreco.textContent = preco;
        celulaQuantidade.textContent = qtd;
        celulaCateg.textContent = categoria

        const botaoRemover = `<div class="botoes">
                                <button class="btnExcluir">Excluir</button>
                            </div>`;
        celulaAcoes.innerHTML = botaoRemover;
       
        const btnExcluir = celulaAcoes.querySelector(".btnExcluir");

        btnExcluir.addEventListener("click", function(){
            if (confirm("Tem certeza que deseja excluir este produto?")){
                tabela.deleteRow(novaLinha.rowIndex -1);
            }
        })

    })
});






