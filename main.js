const form = document.getElementById("form");
const alert_msg = document.getElementById("alert");
const alert_img = "<img src='./images/alert.png' class='alert-img' alt='Sinal de alerta'/>"
const success_img = "<img src='./images/success.png' class='success-img' alt='Sinal de confirmação'/>"
const lista_nomes = [];
const lista_telefones = [];
let linhas = "";
let mensagem_alerta_html ="";

// Função que atualiza a tabela com a linha nova criada
function atualizar_tabela(){
    const corpo_tabela = document.querySelector("tbody");
    corpo_tabela.innerHTML = linhas;
}

// Função que atualiza a mensagem de sucesso ou falha ao adicionar contato
function mensagem(){
    alert_msg.innerHTML = mensagem_alerta_html;
}

// Previne a página de atualizar ao realizar submit
form.addEventListener("submit", function(event){
    event.preventDefault();
    adiciona_linha()
    atualizar_tabela()
    mensagem();
});

// Adicionando linhas novas na agenda
function adiciona_linha(){
    const input_nome = document.getElementById("input-nome");
    const input_telefone = document.getElementById("input-telefone");
    const mensagem_alerta = `${alert_img} O telefone "${input_telefone.value}" já existe em sua agenda!`
    const mensagem_sucesso = `${success_img} O telefone "${input_telefone.value}" foi adicionado com sucesso!`

// Garantindo que os telefones não serão repetidos
    if (lista_telefones.includes(input_telefone.value)) {
        mensagem_alerta_html = mensagem_alerta;
    } else { // E então, adiciono o nome e telefone às suas listas
        lista_nomes.push(input_nome.value);
        lista_telefones.push(input_telefone.value);
// Criando uma linha nova na agenda
        let linha = "<tr>";
        linha += `<td> ${input_nome.value}</td>`;
        linha += `<td> ${input_telefone.value}</td>`;
        linha += "</tr>";
        linhas += linha;
        mensagem_alerta_html = mensagem_sucesso
    }
// Zerando os valores dos campos após o submit
    input_nome.value = "";
    input_telefone.value = "";
}

