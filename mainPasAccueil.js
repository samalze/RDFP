document.addEventListener('DOMContentLoaded', () => {
    const ratio = window.innerHeight / window.innerWidth;
    let sousTitres = document.getElementsByClassName("lien_banderole");
    if (ratio > 1){
        for(let i = 0;i<sousTitres.length; i++){
            sousTitres[i].classList.add("lienBanderolePhone")
        }
    }



    // Sélectionne l'élément avec la classe "banderole"
    const banderole = document.querySelector('.banderole');
    const titre = document.querySelector('.titre_banderole');
    const lien = document.querySelector('.lien_banderole');
    // Vérifie que l'élément existe avant de continuer
    if (!banderole) {
        console.error("L'élément avec la classe 'banderole' est introuvable !");
        return;
    }

    // Ajoute l'événement de défilement
    document.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            banderole.classList.add('transparent'); // Ajoute la classe "transparent"
            titre.classList.add('taille'); // Ajoute la classe "transparent"
            lien.classList.add('taille1'); // Ajoute la classe "transparent"
            document.getElementById("menu").classList.add("makeSmaller");
        } else {
            banderole.classList.remove('transparent'); // Retire la classe "transparent"
            titre.classList.remove('taille'); // Retire la classe "transparent"
            lien.classList.remove('taille'); // Retire la classe "transparent"
            document.getElementById("menu").classList.remove("makeSmaller");
        }
    });



    const resizeObserver = new ResizeObserver(() => {
        const ratio = window.innerHeight / window.innerWidth;
      
        if (ratio > 1) {
            document.getElementById('menuWrapper').classList.add("menuWrapperPhone")
            document.getElementById('menuWrapper').classList.remove("menuWrapperPC")

            let sousTitres = document.getElementsByClassName("lien_banderole");
            for(let i = 0;i<sousTitres.length; i++){
                sousTitres[i].classList.add("lienBanderolePhone")
            }

            // document.getElementById('sous_titre').classList.add("titrePhoneGrand")
            // document.getElementById('titre').classList.add("titrePhonePetit")
            

            //   console.log("Cas 1: window.innerHeight / window.innerWidth est supérieur à 1");
        } else {
            document.getElementById('menuWrapper').classList.remove("menuWrapperPhone")
            document.getElementById('menuWrapper').classList.add("menuWrapperPC")

            let sousTitres = document.getElementsByClassName("lien_banderole");
            for(let i = 0;i<sousTitres.length; i++){
                sousTitres[i].classList.remove("lienBanderolePhone")
            }

        //   console.log("Cas 2: window.innerHeight / window.innerWidth est inférieur ou égal à 1");
        }
      });

    resizeObserver.observe(document.documentElement);
});

// document.getElementsByClassName('arrow_carrot-down').onclick = scroll;

let openOrClosed = false;
function showMenu(){
    if(openOrClosed == false) {
        document.getElementById("menuWrapper").style.height = "100%";
        document.getElementById("menuWrapper").style.visibility = "visible";
        document.getElementById("menu").classList.add("rotateRight90");
    }
    else {
        document.getElementById("menuWrapper").style.height = "0";
        document.getElementById("menuWrapper").style.visibility = "hidden";
        document.getElementById("menu").classList.remove("rotateRight90");
    }
    openOrClosed = !openOrClosed;
}

