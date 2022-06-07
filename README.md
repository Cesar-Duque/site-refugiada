# site-refugiada

Aluno: Cesar Duque Leal Silva / SI2N

Neste projeto foi desenvolvido um site com cabeçário, corpo contendo um modal com labels para login e um rodapé.

HTML

Primeiramente foi linkado o CSS  da W3Schools que foi utilizado no Projeto.
    
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Site Refugiada</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </head>


Depois foi criado um cabeçário para colocar a logo e botões.

    <header>
      <div class="logo">
        <img src="./imgs/logo.jpg" alt="icon" />
        <h2>Refuge</h2>
      </div>
      <div class="header2">
        <button class="btn-primary" type="button" onclick="sendEmail()">
          Enviar E-mail
        </button>
        <ul>
          <li>
            <button class="btn-primary">
              <img src="./imgs/traduzir-yellow.png" alt="tradutor" />
            </button>
          </li>
        </ul>
      </div>
    </header>

Após isto foi criado o corpo em si da página onde está localizado um span e dois botões que levam a seus respectivos modais.

    <div class="corpo">
      <div class="title">
        <p>Proteja e capacite mulheres e meninas ucranianas</p>
      </div>

      <div class="title2">
        <p>JUNTE-SE A CAUSA</p>
      </div>

      <div class="button">
        <button
          onclick="document.getElementById('id01').style.display='block'"
          class="btn-primary"
        >
          Refugiada
        </button>

        <div id="id01" class="w3-modal">
          <div
            class="w3-modal-content w3-card-4 w3-animate-zoom"
            style="max-width: 600px"
          >
            <div class="w3-center">
              <br />
              <span
                onclick="document.getElementById('id01').style.display='none'"
                class="w3-button w3-xlarge w3-hover-red w3-display-topright"
                title="Close Modal"
                >&times;</span
              >
              <img
                src="/imgs/user.png"
                alt="Avatar"
                style="width: 20%"
                class="w3-circle w3-margin-top"
              />

              <span>Refugiada</span>
            </div>

            <form class="w3-container" action="/action_page.php">
              <div class="w3-section">
                <label><b>Usuário</b></label>
                <input
                  class="w3-input w3-border w3-margin-bottom"
                  type="text"
                  placeholder="Digite seu nome de usuário aqui..."
                  name="usrname"
                  required
                />
                <label><b>Senha</b></label>
                <input
                  class="w3-input w3-border"
                  type="password"
                  placeholder="Digite sua senha aqui..."
                  name="psw"
                  required
                />
                <button
                  class="w3-button w3-block w3-green w3-section w3-padding"
                  type="submit"
                >
                  Login
                </button>
                <input
                  class="w3-check w3-margin-top"
                  type="checkbox"
                  checked="checked"
                />
                Lembrar Senha
              </div>
            </form>

            <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
              <button
                onclick="document.getElementById('id01').style.display='none'"
                type="button"
                class="w3-button w3-red"
              >
                Cancelar
              </button>
              <span class="w3-right w3-padding w3-hide-small"
                >Esqueceu sua <a href="#">senha?</a></span
              >
            </div>
          </div>
        </div>
        <button
          onclick="document.getElementById('id02').style.display='block'"
          class="btn-primary"
        >
          Voluntária
        </button>

        <div id="id02" class="w3-modal">
          <div
            class="w3-modal-content w3-card-4 w3-animate-zoom"
            style="max-width: 600px"
          >
            <div class="w3-center">
              <br />
              <span
                onclick="document.getElementById('id02').style.display='none'"
                class="w3-button w3-xlarge w3-hover-red w3-display-topright"
                title="Close Modal"
                >&times;</span
              >
              <img
                src="/imgs/user.png"
                alt="Avatar"
                style="width: 20%"
                class="w3-circle w3-margin-top"
              />

              <span>Voluntária</span>
            </div>

            <form class="w3-container" action="/action_page.php">
              <div class="w3-section">
                <label><b>Usuário</b></label>
                <input
                  class="w3-input w3-border w3-margin-bottom"
                  type="text"
                  placeholder="Digite seu nome de usuário aqui..."
                  name="usrname"
                  required
                />
                <label><b>Senha</b></label>
                <input
                  class="w3-input w3-border"
                  type="password"
                  placeholder="Digite sua senha aqui..."
                  name="psw"
                  required
                />
                <button
                  class="w3-button w3-block w3-green w3-section w3-padding"
                  type="submit"
                >
                  Login
                </button>
                <input
                  class="w3-check w3-margin-top"
                  type="checkbox"
                  checked="checked"
                />
                Lembrar Senha
              </div>
            </form>

            <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
              <button
                onclick="document.getElementById('id02').style.display='none'"
                type="button"
                class="w3-button w3-red"
              >
                Cancelar
              </button>
              <span class="w3-right w3-padding w3-hide-small"
                >Esqueceu sua <a href="#">senha?</a></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

Depois foi criada um div footer para o rodapé do site

    <footer>
      <span>&copy; Refuge 2021-<span id="display-current-year"></span></span>
      <span>Todos os direitos reservados</span>
    </footer>

Depois tivemos os nossos scripts linkados

    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script src="main.js"></script>

CSS

Primeiramente foi importada uma fonte do Google Fonts
    
    @import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400&family=Nunito:wght@500&family=Roboto+Condensed:ital@1&display=swap");
Depois foi removido o padding, margin e box-sizing setado com border-box para ele não somar bordas e margens com altura e largura de um elemento. E também coloquei uma fonte geral para o site.
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Montserrat Alternates, sans-serif;
    }
Após isso foi setado o tamanho da body e do html para facilitar na hora de usar o Flexbox

    html, body {
        height: 100vh;
        width: 100vw;
    }

Depois foi setado todo o CSS dos elementos HTML

No final deixei o site responsivo para tablets de largura 768px usando Media Queries

    @media screen and (max-width: 768px)

JavaScript

Primeiramente foi desenvolvido um código que coleta o ano atual de sua máquina e apresenta no html

    document.getElementById("display-current-year").innerHTML =
    new Date().getFullYear();

Depois foi desenvolvido código que envia e-mails automaticamente ao clicar no botão e avisa ao usúario que a operação foi concluída

    function sendEmail() {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "sender@email_address.com",
            Password: "Enter your password",
            To: "receiver@email_address.com",
            From: "sender@email_address.com",
         Subject: "Sending Email using javascript",
            Body: "Site de Refugiadas!",
            Attachments: [
            {
            name: "File_Name_with_Extension",
            path: "Full Path of the file",
            },
        ],
    }).then(function (message) {
        alert("E-mail enviado com sucesso!");
    });
    }









