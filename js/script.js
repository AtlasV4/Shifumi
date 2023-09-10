let pierre = document.getElementById("boutonPierre")
let feuille = document.getElementById("boutonFeuille")
let ciseaux = document.getElementById("boutonCiseaux")

const choix = [pierre,feuille,ciseaux]


let resultat = document.getElementById("resultat")

function jeu() {

    let score
    let robot

    for(let choixSigne of choix) {
        choixSigne.addEventListener("click", () => {
            resultat.textContent = "Choix joueur : " + choixSigne.textContent
            robot = choix[Math.floor(Math.random() * 3)]
            resultat.innerHTML += "<br> Choix robot : " + robot.textContent
            if(robot == choixSigne) {
                resultat.innerHTML += "<br> Egalite ! "
            }
            else if(robot == feuille && choixSigne == pierre || robot == pierre && choixSigne == ciseaux || robot == ciseaux && choixSigne == feuille) {
                resultat.innerHTML += "<br> Perdu ! "
            }
            else {
                resultat.innerHTML += "<br> Gagné ! "
            }
        })
    }
}

jeu()