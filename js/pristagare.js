// Funktion för att skapa en paragraf med given text
function createParagraph(motivationText) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = `${motivationText}`;
    return newParagraph;
}


// Funktion för att visa/dölja motiveringen
function toggleMotivation(containerId, motivationText) {
    let motivationContainer = document.getElementById(containerId);

    if (motivationContainer) {
        // Ta bort alla befintliga element i motivationContainer
        while (motivationContainer.firstChild) {
            motivationContainer.removeChild(motivationContainer.firstChild);
        }

        // Om paragrafen redan är skapad, ta bort den
        if (motivationContainer.createdParagraph) {
            motivationContainer.createdParagraph.remove();
            motivationContainer.createdParagraph = null; // Nollställ referensen
        } else {
            // Skapa en ny paragraf om den inte redan är skapad
            let newParagraph = createParagraph(motivationText);

            // Lägg till paragrafen i motivationContainer
            motivationContainer.appendChild(newParagraph);

            // Spara referensen till den skapade paragrafen
            motivationContainer.createdParagraph = newParagraph;
        }
    }
}

// Loopa igenom knappListan
document.querySelectorAll('.knapp').forEach(function (button, index) {
    // Lyssna på klickhändelse för varje knapp
    button.addEventListener('click', function () {
        // Hämta motivationen från knappens data-attribut
        let motivationText = button.getAttribute('data-motivation');
        let containerId = `motivation-container-${index + 1}`;

        //Anropa funktionen för att visa/dölja motiveringen

        toggleMotivation(containerId, motivationText);
    });
});


















// // Skapa en variabel för att hålla referensen till den skapade paragrafen
// let createdParagraph;

// // Skapa en variabel för att indikera om paragrafen har lagts till eller inte
// //let paragraphAdded = false;

// // Hämta alla knappar med klassen "knapp"
// let buttonList = document.querySelectorAll('.knapp');
//    // console.log('knappen har lagts till')

// // Hämta motivation-container
// let motivationContainer = document.getElementById('motivation-container');

// // Loopa ogenom knapplistan
// function toggleMotivation(motivationText) {
//     if (createdParagraph) {
//         // Om paragrafen redan är skapad, ta bort den
//         createdParagraph.remove();
//         createdParagraph = null; // Nollställ referensen
//     } else {
//         // Skapa en ny paragraf om den inte redan är skapad
//         let newParagraph = document.createElement("p");

//         // Kontrollera om newParagraph är definierad
//         if (newParagraph) {
//             newParagraph.innerHTML = `...för ${motivationText}`;

//             // Lägg till paragrafen i motivation-container
//             motivationContainer.appendChild(newParagraph);

//             // Spara referensen till den skapade paragrafen
//             createdParagraph = newParagraph;
//         } else {
//             // Logga ett felmeddelande om newParagraph är undefined
//             console.log('newParagraph is undefined');
//         }
//     }
// }


// buttonList.forEach(function (button) {
//     // Lyssna på klickhändelse för varje knapp
//     button.addEventListener('click', function () {
//         // Hämta motivationen från knappens data-attribut
//         let motivationText = button.getAttribute('data-motivation');
// // Anropa funktionen för att visa/dölja motiveringen
// toggleMotivation(motivationText);
// });

// });




// let createdParagraph;
// let paragraphAdded = false;

// let addRemoveButton = document.getElementById("jonfosse");


// // Lägg till en klickhändelse
// addRemoveButton.addEventListener("click", function() {
//     // Om paragrafen redan är skapad, ta bort den
//     if (paragraphAdded) {
//         createdParagraph.remove();
//         paragraphAdded = false;

//     } else {
//         // Om paragrafen inte är skapad, skapa den och spara referensen
//         let newParagraph = document.createElement("p");
//         newParagraph.textContent = "...för hans nyskapande dramatik och prosa som ger röst åt det osägbara.";


// // Lägg till paragrafen i body
// newParagraph.style.margin = "0";
// newParagraph.style.fontStyle = "italic";
// jonfosse.parentNode.appendChild(newParagraph);

// // Spara referensen till den skapade paragrafen
// createdParagraph = newParagraph;

// // Uppdatera variabeln för att indikera att paragrafen har lagts till
// paragraphAdded = true;
// }
// });














// Hämta referensen till knappen
// let addParagraphButton = document.getElementById("jonfosse");

// // Lägg till en klickhändelse
//     jonfosse.addEventListener("click", function() {

//     // Skapa ett nytt p-element
//     let newParagraph = document.createElement("p");        
//     //console.log("Knappen klickades på.");  

//     // Ange text för det nya p-elementet
//     newParagraph.textContent = ;

//     //css till den nya paragrafen nedan, kan man lägga den i separat css-fil på nåt vis?
//     

//     // Lägg till det nya p-elementet i DOM under knappen
//     jonfosse.parentNode.appendChild(newParagraph);

//     //console.log("Paragrafen skapades.");

//         // Efter en viss tid (t.ex., 3 sekunder), ta bort det nya p-elementet
//         setTimeout(function() {
//             newParagraph.remove();
//             console.log("Paragrafen togs bort efter 5 sekunder.");
//         }, 5000);

// });












