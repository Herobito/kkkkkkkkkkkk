const scrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//header container

ScrollReveal().reveal(".header-container h1", scrollRevealOption);

ScrollReveal().reveal(".header-container h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".section-header", scrollRevealOption);
ScrollReveal().reveal(".section-subheader",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".contenido-acerca .acerca-flex",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".carousel",{
    ...scrollRevealOption,
    delay: 1000,
});


ScrollReveal().reveal(".blogs-card",{
    duration: 1000,
    interval:400,
});

ScrollReveal().reveal(".comentarios-card",{
    ...scrollRevealOption,
    interval: 400,

});

function generarResumen() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var comentario = document.getElementById('comentario').value;
  
    var resumenHTML = '<h3>Resumen:</h3>';
    resumenHTML += '<p><strong>Nombre:</strong> ' + nombre + '</p>';
    resumenHTML += '<p><strong>Email:</strong> ' + email + '</p>';
    resumenHTML += '<p><strong>Comentario:</strong> ' + comentario + '</p>';
  
    document.getElementById('resumen').innerHTML = resumenHTML;
  
    var pdf = new jsPDF();
    pdf.text(nombre + '\n' + email + '\n' + comentario, 10, 10);
    pdf.save('resumen.pdf');
}
