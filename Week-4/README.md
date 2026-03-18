# Proyecto Semana 04: Generador de Mensajes de Dominio

## 📋 Dominio del Proyecto

**Dominio**: Plataformas Freelancers

---

## 🎯 Objetivo

Construir un **generador de mensajes en consola** aplicado al dominio **Plataformas Freelancers**, utilizando métodos de string y template literals para representar información de proyectos freelance.

---

## ✅ Requisitos Funcionales

El script cumple con:

1. **Datos del dominio definidos con `const`**
   - Nombre del proyecto freelance
   - Categoría del proyecto
   - Descripción del proyecto
   - Código identificador del proyecto

2. **Uso de métodos de string**
   - `trim()` → limpiar el nombre del proyecto
   - `toUpperCase()` → formato del encabezado
   - `toLowerCase()` → normalización del texto
   - `includes()` → validar contenido de la descripción
   - `startsWith()` → validar prefijo del código
   - `endsWith()` → validar sufijo del código
   - `slice()` → obtener el prefijo del código
   - `repeat()` → generar separadores visuales

3. **Uso de template literals**
   - Toda la salida está construida con `` ` ` `` (backticks)
   - No se utiliza concatenación con `+`

4. **Generación de mensajes**
   - Ficha completa del proyecto freelance
   - Mensaje corto de notificación

5. **Validaciones**
   - Verificación de código y descripción del proyecto
