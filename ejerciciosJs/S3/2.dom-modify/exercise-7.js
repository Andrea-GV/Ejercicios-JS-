// Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const deleteNode = document.querySelectorAll('.fn-remove-me');

for (const deleteElement of deleteNode) {
    deleteElement.remove();
}