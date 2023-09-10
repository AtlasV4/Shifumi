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
            robot = choix[Math.floor(Math.random() * 3)]
            resultat.innerHTML = '<div class="conteneur"> <p> Choix joueur : ' + choixSigne.textContent + '</p> <br><p> Choix robot : ' + robot.textContent + '</p></div>'
            if(robot == choixSigne) {
                resultat.innerHTML += '<br> <p class="fin"> Egalite ! </p>'
            }
            else if(robot == feuille && choixSigne == pierre || robot == pierre && choixSigne == ciseaux || robot == ciseaux && choixSigne == feuille) {
                resultat.innerHTML += '<br> <p class="fin"> Perdu ! </p>'
            }
            else {
                resultat.innerHTML += '<br> <p class="fin"> Gagné ! </p>'
            }
        })
    }
}

jeu()