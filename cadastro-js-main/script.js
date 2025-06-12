document.addEventListener("DOMContentLoaded", function () {





    const btnAdcionar = document.getElementById("btnAdicionar");
    btnAdcionar.addEventListener("click", function principal() {
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

        //FUNCAO QUE CRIA OS BOTOES
        function botoesFun() {
            const botoes = `<div class="botoes">
                                <button class="btnExcluir">Excluir</button>
                                <button class="btnEditar">Editar</button>
                            </div>`;
            celulaAcoes.innerHTML = botoes;
            const btnExcluir = celulaAcoes.querySelector(".btnExcluir");
            btnExcluir.addEventListener("click", function () {
                if (confirm("Tem certeza que deseja excluir este produto?")) {
                    tabela.deleteRow(novaLinha.rowIndex - 1);
                }
            });
            const btnEditar = celulaAcoes.querySelector(".btnEditar");
            btnEditar.addEventListener("click", function () {
                botoesEdit();
                console.log(tabela.rows[novaLinha.rowIndex - 1].cells[2])
                tabela.rows[novaLinha.rowIndex - 1].cells[0].innerHTML = `<div><input type="text" value="${nomeProduto}" id="newNome"></div>`
                tabela.rows[novaLinha.rowIndex - 1].cells[1].innerHTML = `<div><input type="text" value="${preco}" id="newPreco"></div>`
                tabela.rows[novaLinha.rowIndex - 1].cells[2].innerHTML = `<div><input type="text" value="${qtd}" id="newQtd"></div>`
                tabela.rows[novaLinha.rowIndex - 1].cells[3].innerHTML = `<div><select id="sel">
                            <option value="processadores">Processadores</option>
                            <option value="placa-mae">Placa-mãe</option>
                            <option value="memorias">Memorias</option>
                    </select></div>`
                console.log(tabela.rows[novaLinha.rowIndex - 1].cells[0])
            })
        }
        function botoesEdit() {
            const botoes = `<div class="botoes">
                                <button class="btnSalvar">Salvar</button>
                                <button class="btnCancelar">Cancelar</button>
                            </div>`;
            celulaAcoes.innerHTML = botoes;
            const btnEdit = celulaAcoes.querySelector(".btnCancelar");
            btnEdit.addEventListener("click", function () {
                botoesFun()
                tabela.rows[novaLinha.rowIndex - 1].cells[0].innerText = nomeProduto;
                tabela.rows[novaLinha.rowIndex - 1].cells[1].innerText = preco;
                tabela.rows[novaLinha.rowIndex - 1].cells[2].innerText = qtd;
                tabela.rows[novaLinha.rowIndex - 1].cells[3].innerText = categoria;
            });

            const btnSalvar = celulaAcoes.querySelector(".btnSalvar");
            btnSalvar.addEventListener("click", function () {
                const newNome = document.getElementById("newNome").value
                const newPreco = document.getElementById("newPreco").value;
                const newQtd = document.getElementById("newQtd").value;
                const newCategoria = document.getElementById("sel").value;

                if (newNome == "" || newPreco == "" || newQtd == "" || newCategoria == "") {
                    alert("Por favor, preencha todos os campos.");
                    return;
                }

                tabela.rows[novaLinha.rowIndex - 1].cells[0].innerText = newNome;
                tabela.rows[novaLinha.rowIndex - 1].cells[1].innerText = newPreco;
                tabela.rows[novaLinha.rowIndex - 1].cells[2].innerText = newQtd;
                tabela.rows[novaLinha.rowIndex - 1].cells[3].innerText = newCategoria;
                botoesFun()
            })
        }
        botoesFun();
    })
});






