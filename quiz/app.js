const form = document.querySelector(".quiz-jp")
let tabResults = []
const answers = ["b", "c", "d", "a", "b", "a", "a", "d", "b", "c"]
const titleResult = document.querySelector(".results h2")
const noteResult = document.querySelector(".note")
const allQuestions = document.querySelectorAll(".question")
let tabVerif = []




form.addEventListener("submit", (e) => {
    // ! pour récupérer les données en local
    e.preventDefault()
    
    // ! ajout d'une valeur en fin de tableau
    for(i=1; i<11; i++) {
        tabResults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }

    // ! appel de la fonction pour verifier les réponses
    functionVerif(tabResults)

    // ! remet le tableau à 0
    tabResults = []
})


function functionVerif(tabResults) {
    for(let i = 0; i<10; i++) {
        // ! comparer les valeurs avec le tableau 'answers' 
        if(tabResults[i] === answers[i]) {
            tabVerif.push(true)
        } else {
            tabVerif.push(false)
        }
    }

    displayResult(tabVerif)
    tabVerif = []
}

// ! fonction pour afficher le résultat
    // ! check le résultat avec la méthode filter()
function displayResult(tabCheck) {
                                        //  ! connaitre la longueur du tableau
    const nbFalse = tabCheck.filter(element => element ==! true).length


    // ! conditions pour afficher le texte
    if(nbFalse < 1) {
        titleResult.innerText = "Félicitations ! Vous n'avez commis aucune faute !"
    } else if (nbFalse < 3) {
        titleResult.innerText = "Bravo ! Votre score est excellent !"
    } else if (nbFalse < 5) {
        titleResult.innerText = "Joli score ! Mais vous pourriez encore vous améliorer !"
    } else if (nbFalse < 7) {
        titleResult.innerText = "Arf... Vous devriez peut-être revoir les films !"
    } else if (nbFalse < 10) {
        titleResult.innerText = "Les chiffres ne sont pas bons Kevin !"
    } else  {
        titleResult.innerText = "Félicitations, Vous avez réussi l'exploit d'avoir 0 ! Mes respets !!"
    }
    noteResult.innerHTML = `<strong>${10 - nbFalse}/10</strong>`
}