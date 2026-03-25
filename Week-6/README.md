# 🚀 Proyecto Semanal — Semana 06: Reporte con Bucles

## 🎯 Objetivo

Implementar un **sistema de reporte** que procese una colección de proyectos freelance usando todos los tipos de bucle vistos esta semana, permitiendo analizar información como presupuestos, categorías y rendimiento general dentro de plataformas freelancers.

---

## 📋 Tu dominio asignado

**Dominio: Plataformas Freelancers**

El sistema se enfoca en la gestión y análisis de proyectos freelance, considerando atributos como nombre del proyecto, tipo de servicio (categoría) y presupuesto asignado.

---

## ✅ Requisitos Funcionales

Tu `script.js` debe implementar los siguientes 6 componentes:

### 1. Datos del dominio (array de elementos)

Define un array con **al menos 6 proyectos freelance**. Cada proyecto debe tener:
- Nombre del proyecto
- Categoría (web, mobile, design, etc.)
- Presupuesto (valor numérico)

### 2. Listar todos los elementos con `for...of`

Recorre el array e imprime cada proyecto con su información básica (nombre, categoría y presupuesto).

### 3. Contar por categoría con `for...of` + contador

Cuenta cuántos proyectos pertenecen a cada categoría (por ejemplo: cuántos proyectos web, mobile o de diseño existen).

### 4. Calcular totales y promedio con acumulador

Suma todos los presupuestos y calcula el promedio de inversión en proyectos freelance.

### 5. Encontrar el máximo y mínimo

Identifica:
- El proyecto con mayor presupuesto
- El proyecto con menor presupuesto

### 6. Generar reporte con `for` clásico

Genera un reporte numerado donde se indique si cada proyecto está:
- Sobre el promedio
- Bajo el promedio

---

## 💡 Ejemplo de adaptación al dominio

| Elemento  | Categorías posibles     | Valor numérico   |
| --------- | ---------------------- | ---------------- |
| Proyecto  | web, mobile, design    | presupuesto ($)  |

---
