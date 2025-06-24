// Verificar se o usuário fez o login
if (location.pathname.endsWith("index.html")) {
  if (localStorage.getItem("logado") !== "true") {
    location.href = "login.html";
  }
}

// Dados em memória
let contatos = [];
let indice = 0;

// Salvar contatos no localStorage
function salvarContatos() {

  localStorage.setItem("contatos", JSON.stringify(contatos));

}

// Carregar contatos do localStorage
function carregarContatos() {
  const dados = localStorage.getItem("contatos");
  if (dados) {
    contatos = JSON.parse(dados);
  }
}

// Exibir contato atual
function exibir() {
  if (contatos.length === 0) {
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("telefone").value = "";
    return;
  }

  const c = contatos[indice];
  document.getElementById("nome").value = c.nome;
  document.getElementById("sobrenome").value = c.sobrenome;
  document.getElementById("endereco").value = c.endereco;
  document.getElementById("telefone").value = c.telefone;
}

// LOGIN
if (location.pathname.endsWith("login.html")) {
  document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (username === "admin" && senha === "admin") {
      localStorage.setItem("logado", "true");
      location.href = "index.html";
    } else {
      alert("Usuário ou senha incorretos.");
    }
  });
}

// INDEX
if (location.pathname.endsWith("index.html")) {
  carregarContatos();
  exibir();

  document.getElementById("incluir").addEventListener("click", () => {
    const contato = {
      nome: document.getElementById("nome").value.trim(),
      sobrenome: document.getElementById("sobrenome").value.trim(),
      endereco: document.getElementById("endereco").value.trim(),
      telefone: document.getElementById("telefone").value.trim()
    };
    contatos.push(contato);
    indice = contatos.length - 1;
    salvarContatos();
    const f= document.getElementById("form1");
    f.reset()
  });

  document.getElementById("editar").addEventListener("click", () => {
    if (contatos.length === 0) return;
    contatos[indice].nome = document.getElementById("nome").value.trim();
    contatos[indice].sobrenome = document.getElementById("sobrenome").value.trim();
    contatos[indice].endereco = document.getElementById("endereco").value.trim();
    contatos[indice].telefone = document.getElementById("telefone").value.trim();
    salvarContatos();
    alert("Registro atualizado!");
  });

  document.getElementById("excluir").addEventListener("click", () => {
    if (contatos.length === 0) return;
    contatos.splice(indice, 1);
    if (indice >= contatos.length) indice = contatos.length - 1;
    salvarContatos();
    exibir();
  });

  document.getElementById("primeiro").addEventListener("click", () => {
    if (contatos.length === 0) return;
    indice = 0;
    exibir();
  });

  document.getElementById("anterior").addEventListener("click", () => {
    if (contatos.length === 0) return;
    if (indice > 0) indice--;
    exibir();
  });

  document.getElementById("proximo").addEventListener("click", () => {
    if (contatos.length === 0) return;
    if (indice < contatos.length - 1) indice++;
    exibir();
  });

  document.getElementById("ultimo").addEventListener("click", () => {
    if (contatos.length === 0) return;
    indice = contatos.length - 1;
    exibir();
  });
}
