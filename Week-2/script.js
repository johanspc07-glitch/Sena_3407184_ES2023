const DOMAIN_NAME = "Plataformas Freelancers";

const itemName = "Desarrollo de Sitio Web Corporativo";

const itemCategory = "Desarrollo Web";

const itemQuantity = 1200;

const isItemAvailable = true;

const pendingClient = null;


console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:        ${itemName}`);
console.log(`Categoría:     ${itemCategory}`);
console.log(`Presupuesto:   ${itemQuantity}`);
console.log(`Disponible:    ${isItemAvailable}`);
console.log("");


console.log("--- Tipos de datos ---");

console.log("typeof itemName:        ", typeof itemName);
console.log("typeof itemQuantity:    ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
console.log("");


console.log("--- Conversiones ---");


const budgetAsText = String(itemQuantity);

console.log("Presupuesto como texto:", budgetAsText);
console.log("typeof (convertido):", typeof budgetAsText);

console.log("");


console.log("--- Valor nulo ---");

console.log("Cliente pendiente:", pendingClient);
console.log("typeof null:", typeof pendingClient);
console.log("¿Es null?:", pendingClient === null);

console.log("");


console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");