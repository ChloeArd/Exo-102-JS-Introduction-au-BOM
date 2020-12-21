let myWindow;
//Une nouvelle fenêtre s'ouvre avec un lien choisi lorqu'on clique sur le bouton
document.getElementById("leBouton").addEventListener("click", function (){
    let features = "menuba=no, scrollbars=yes, width=500, height=500, status=no, toolbar=no";
    myWindow = window.open("https://www.medpets.fr/bouledogue-francais/?msclkid=e98960e178191f3d6d863f007f934462&utm_source=bing&utm_medium=cpc&utm_campaign=70.%20Dynamic%20Search%20Ads%20FR&utm_term=medpets&utm_content=Alle%20webpagina%27s", '', features)
    //Redimensionne la taille d'une fenêtre.
    myWindow.resizeTo(600,600);
    //Redimensionne la position de la fenêtre
    myWindow.moveTo(500, 500)
});

document.getElementById("leBouton2").addEventListener("click", function () {
    let features = "menuba=no, scrollbars=yes, width=500, height=500, status=no, toolbar=no";
    myWindow.close();
})