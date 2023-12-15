function createParagraph(motivationText) {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = `${motivationText}`;
    return newParagraph;
}


function toggleMotivation(containerId, motivationText) {
    let motivationContainer = document.getElementById(containerId);

    if (motivationContainer) {

        while (motivationContainer.firstChild) {
            motivationContainer.removeChild(motivationContainer.firstChild);
        }

        if (motivationContainer.createdParagraph) {
            motivationContainer.createdParagraph.remove();
            motivationContainer.createdParagraph = null; 
        } 
        
        else {
            let newParagraph = createParagraph(motivationText);
            motivationContainer.appendChild(newParagraph);
            motivationContainer.createdParagraph = newParagraph;
        }
    }
}

document.querySelectorAll('.knapp').forEach(function (button, index) {

        button.addEventListener('click', function () {
        let motivationText = button.getAttribute('data-motivation');
        let containerId = `motivation-container-${index + 1}`;

        toggleMotivation(containerId, motivationText);
    });
});