document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let campos = ["nome", "email", "mensagem"];
    let valido = true;
  
    campos.forEach(campo => {
      let input = document.getElementById(campo);
      let erro = document.getElementById(`erro-${campo}`);
  
      if (input.value.trim() === "") {
        input.classList.add("erro");
        erro.textContent = `O campo ${campo} é obrigatório.`;
        valido = false;
      } else {
        input.classList.remove("erro");
        erro.textContent = "";
      }
    });
  
    if (valido) {
      alert("Mensagem enviada com sucesso!");
      document.getElementById("formulario").reset();
    }
  });
  