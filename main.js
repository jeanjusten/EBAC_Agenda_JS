//////////////////////////////
// Variáveis Globais
let mensagemAlertaHtml ="";
const alertMsg = document.getElementById("alert");
const form = document.getElementById("form");
const alertImg = "<img src='./images/alert.png' class='alert-img' alt='Sinal de alerta'/>"
const successImg = "<img src='./images/success.png' class='success-img' alt='Sinal de confirmação'/>"
let listaNomes = [];
let listaTelefones = [];
let linhas = "";
let newId = 0;

//////////////////////////////
// Remover Contato e caixa de diálogo de confirmação
function removeRow(rowId) {
    const mensagemContatoRemovido = `${alertImg} O contato foi removido da sua lista.`
    const linhaContato = document.getElementById(rowId)
    // Pegando o index do Nome e Telefone de dentro do HTML da linha
    const indexNome = listaNomes.indexOf((linhaContato.childNodes[0].innerHTML));
    const indexTelefone = listaTelefones.indexOf((linhaContato.childNodes[1].innerHTML));

    $( function() {
        $("#caixa-dialogo").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
            "Excluir": function() {
                // Remover Nome e telefone das Arrays
                delete listaNomes[indexNome];
                delete listaTelefones[indexTelefone];
                listaNomes = listaNomes.flat()
                listaTelefones = listaTelefones.flat()
                // Remover linha da lista
                linhaContato.remove();
                alertMsg.innerHTML = mensagemContatoRemovido;
                $(this).dialog("close");
            },
            Cancelar: function() {
                $(this).dialog("close");
            }}
        });
    });
}
//////////////////////////////
// JQuery
$(document).ready(function(){
    // Função que atualiza a tabela com a linha nova criada
    function atualizarTabela(conteudoHtml){
        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML += conteudoHtml
    }

    // Função que atualiza a mensagem de sucesso ou falha ao adicionar contato
    function mensagemAlerta(){
        alertMsg.innerHTML = mensagemAlertaHtml;
    }

    // Previne a página de atualizar ao realizar submit
    form.addEventListener("submit", function(event){
        event.preventDefault();
        adicionarLinha()
        mensagemAlerta();
    });

    // Adicionando linhas novas na agenda
    function adicionarLinha(){
        const inputNome = document.getElementById("input-nome");
        const inputTelefone = document.getElementById("input-telefone");
        const mensagemAlerta = `${alertImg} O telefone "${inputTelefone.value}" já existe em sua agenda!`
        const mensagemAlertaNome = `${alertImg} Por favor, insira um nome válido.`
        const mensagemAlertaNumero = `${alertImg} Por favor, insira um telefone válido.`
        const mensagemSucesso = `${successImg} O telefone "${inputTelefone.value}" foi adicionado com sucesso!`

    // Garantindo que os telefones não serão repetidos
        if (listaTelefones.includes(inputTelefone.value)) {
            mensagemAlertaHtml = mensagemAlerta;
        } else if ((inputTelefone.value).length != 15) { // Garantindo que o telefone está completo
            mensagemAlertaHtml = mensagemAlertaNumero;
        } else if ((inputNome.value).trim() == "") { // Garantindo que o nome não está vazio
            mensagemAlertaHtml = mensagemAlertaNome;
        } else { // Adicionando o número na lista
            listaNomes.push((inputNome.value).trim());
            listaTelefones.push(inputTelefone.value);

    // Criando uma linha nova na agenda
            newId += 1;
            let linha = `<tr id=${(newId)}>`;
            let iconeAjustes = `<button type='button' id='${newId}' class='button-remove' onclick='removeRow(${newId})'><img src='./images/trashbin_icon.png' class='img-options' draggable='false' alt='Ícone de ajustes'></button>`
            linha += `<td>${inputNome.value}</td>`;
            linha += `<td>${inputTelefone.value}</td>`;
            linha += `<td>${iconeAjustes}</td>`;
            linha += "</tr>";
            //linhas += linha;
            atualizarTabela(linha)
            mensagemAlertaHtml = mensagemSucesso
            // Zerando os valores dos campos após o submit
            inputNome.value = "";
            inputTelefone.value = "";
        }
    }

    // Máscara de validação JQuery
    $("#input-telefone").mask("(00) 00000-0000", {
        placeholder: "(00) 00000-0000"
    })
})

