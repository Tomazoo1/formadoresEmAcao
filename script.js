document.addEventListener("DOMContentLoaded", function () {

     const loginInput = document.getElementById("login");
     const senhaInput = document.getElementById("senha");
     const enviarBtn = document.getElementById("enviar");

     enviarBtn.addEventListener('click', function (event) {
          event.preventDefault();

          // coleta dos dados dos campos da tela de login

          const login = loginInput.value.trim();
          const senha = senhaInput.value.trim();

          // teste dos campos de login

          if (login === "" || senha === "") {
               alert("Por favor, preencha todos os campos.");
               return;
          }

          // simulação de autenticação

          if (login === "admin" && senha === "1234") {

               // chamada da página último bilhete

               window.location.href = "ultimo bilhete.html";
          } else {
               alert("Login ou senha incorretos!");
          }
     });

     // programação dos botões de acessibilidade

     const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
     const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

     botaoDeAcessibilidade.addEventListener('click', function () {
          botaoDeAcessibilidade.classList.toggle('rotacao-botao');
          opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
     })

     let tamanhoAtualFonte = 1;

     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');

     aumentaFonteBotao.addEventListener('click', function () {
          tamanhoAtualFonte += 0.1;
          document.body.style.fontSize = `${tamanhoAtualFonte}rem`
     })

     diminuiFonteBotao.addEventListener('click', function () {
          tamanhoAtualFonte -= 0.1;
          document.body.style.fontSize = `${tamanhoAtualFonte}rem`
     })


});


