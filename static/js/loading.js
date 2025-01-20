function showLoading() {
    const div = document.createElement("div"); // Create a new div element
    div.classList.add("loading","centralize"); // Add the classes to the div

    const label = document.createElement("label"); // Create a new label element
    label.innerText = "Carregando..."; // Set the text of the label to "Carregando..."

    div.appendChild(label); // Add the label to the div
    document.body.appendChild(div); // Add the div to the body of the document

    
}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading"); // Get all elements with the class "loading"
    if (loadings.length) { // If there are elements with the class "loading"
        loadings[0].remove(); // Remove the first element with the class "loading"
    }
}