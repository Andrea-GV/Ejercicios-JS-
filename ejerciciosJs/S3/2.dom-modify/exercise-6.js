// Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const elementUl = document.createElement('ul');

for (let i = 0; i < apps.length; i++) {
    const liInUl = document.createElement('li');
    elementUl.appendChild(liInUl);        
    liInUl.textContent = apps[i];
    elementUl.append(liInUl);
    } 
document.body.appendChild(elementUl);