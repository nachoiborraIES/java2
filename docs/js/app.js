function mostrar(fichero)
{
    fetch('../slides/' + fichero + '.html?_=' + new Date().getTime())
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error al cargar ${fichero}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('contenido').innerHTML = data;
        Reveal.initialize({
            controls: false,
            progress: false,
            center: true,
            hash: true,
            width: "80%",
      
            // Learn about plugins: https://revealjs.com/plugins/
            plugins: [ RevealZoom, RevealMarkdown, RevealHighlight ]
         });
    })
    .catch(error => {
        console.error('Hubo un problema al cargar el archivo HTML:', error);
    });
}

const urlParams = new URLSearchParams(window.location.search);
const fichero = urlParams.get('fichero');
if(fichero)
{
    mostrar(fichero);
}