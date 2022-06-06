document.getElementById("display-current-year").innerHTML =
  new Date().getFullYear();

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
