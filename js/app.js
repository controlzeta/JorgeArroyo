const anioActual = new Date().getFullYear();
document.getElementById("anio-actual").textContent = anioActual;


function openEmail() {
    const emailAddress = "youremail@example.com";
    const subject = "Inquiry from your website";
    const body = "Hi, I have a question...";
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }