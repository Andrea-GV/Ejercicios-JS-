// Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.


// function pintarP(lista, lugar) {
//     lista.forEach(div => {
//         elementDivs.innerHTML+= `<p> </p>`
//     });
//     lugar.appenedChild('div')
// }

// pintarP(div)

const elementDivs = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const pInDiv = document.createElement('p');
    elementDivs.appendChild(pInDiv);        
    pInDiv.textContent = " ";
    } 
document.body.appendChild(elementDivs);
