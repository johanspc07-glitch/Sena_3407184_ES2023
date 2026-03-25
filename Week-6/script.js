const items = [
  { name: "Landing Page Empresarial", category: "web", value: 800 },
  { name: "App Móvil de Delivery", category: "mobile", value: 2500 },
  { name: "Diseño de Logo", category: "design", value: 300 },
  { name: "Sistema de Inventarios", category: "web", value: 1800 },
  { name: "Rediseño UX/UI", category: "design", value: 1200 },
  { name: "Aplicación de Chat", category: "mobile", value: 2200 }
];
const categories = ["web", "mobile", "design"];
const valueLabel = "presupuesto";
console.log("=== LISTADO COMPLETO ===");
let lineNumber = 0;
for (const item of items) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}
console.log("");
console.log("=== CONTEO POR CATEGORÍA ===");
for (const category of categories) {
  let count = 0;

  for (const item of items) {
    if (item.category === category) count++;
  }

  console.log(`${category}: ${count} proyecto(s)`);
}
console.log("");
console.log("=== ESTADÍSTICAS ===");
let totalValue = 0;
for (const item of items) {
  totalValue += item.value;
}
const averageValue = items.length > 0 ? totalValue / items.length : 0;
console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);
console.log("");
console.log("=== MÁXIMO Y MÍNIMO ===");
let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;
if (items.length > 0) {
  for (const item of items) {
    if (item.value > maxItem.value) {
      maxItem = item;
    }
    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem?.name} (${maxItem?.value})`);
  console.log(`Menor ${valueLabel}: ${minItem?.name} (${minItem?.value})`);
}
console.log("");
console.log("=== REPORTE DETALLADO ===");
for (let i = 0; i < items.length; i++) {
  const item = items[i];

  const comparison = item.value >= averageValue
    ? "sobre el promedio"
    : "bajo el promedio";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}
console.log("");
console.log("=== FIN DEL REPORTE ===");