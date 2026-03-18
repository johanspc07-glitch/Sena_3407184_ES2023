const DOMAIN_NAME = "Plataformas Freelancers";
const rawEntityName = "  desarrollo de sitio web  ";
const entityCategory = "Desarrollo Web";
const entityCode = "PRJ-001";
const entityDescription = "Proyecto freelance dentro de una plataforma digital para desarrollo web.";
const mainValue = 1200;
const isActive = true;
const entityName = rawEntityName.trim();
const entityNameUpper = entityName.toUpperCase();
const entityNameLower = entityName.toLowerCase();
const codePrefix = entityCode.slice(0, 3);
const hasValidPrefix = entityCode.startsWith(codePrefix);
const descriptionIsRelevant = entityDescription.includes("freelance");
const hasValidSuffix = entityCode.endsWith("001");
const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);
const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ENTIDAD
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Valor:       ${mainValue}
Estado:      ${isActive ? "Activo" : "Inactivo"}
${subSeparator}
Descripción:
${entityDescription}
${separator}
`;
console.log(mainCard);
console.log("--- Validaciones ---");
console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'freelance'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix}`);
console.log("");
console.log("--- Notificación ---");
const notification = `📢 Nuevo proyecto disponible: ${entityName} (${entityCode})`;
console.log(notification);
console.log("");