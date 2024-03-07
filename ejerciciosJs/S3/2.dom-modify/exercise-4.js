// Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const elementDivs = document.createElement('div');
const pInDiv = document.createElement('p');
elementDivs.appendChild(pInDiv);        
pInDiv.textContent = "Soy dinámico!";

document.body.appendChild(elementDivs);