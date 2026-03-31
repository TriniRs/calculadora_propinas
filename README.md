# Calculadora de Propinas y Consumo 🍕🥤


Una aplicación interactiva desarrollada con **React** y **TypeScript** diseñada para gestionar pedidos en un restaurante. Permite controlar el consumo de los clientes, seleccionar porcentajes de propina y calcular automáticamente los totales de la cuenta.
Pagina: https://calculadora-propinas-rouge.vercel.app/ 

## 🚀 Características Principales

- **Menú Dinámico**: Listado de productos cargados desde una base de datos local (`db.ts`).
- **Gestión Inteligente de la Orden**:
  - **Agregar Ítems**: Si el producto no existe en el consumo, se añade con cantidad 1.
  - **Actualizar Cantidad**: Si el producto ya existe, se incrementa la cantidad automáticamente sin duplicar la fila en la interfaz.
  - **Eliminar Ítems**: Opción para quitar productos específicos de la orden mediante su ID.
- **Sistema de Propinas**: Selección mediante botones de radio (10%, 20%, 50%) que se aplican al subtotal.
- **Cálculos en Tiempo Real**: Uso de `useMemo` para calcular Subtotal, Propina y Total a pagar de forma eficiente.
- **Validación de Pago**: El botón para finalizar la orden se bloquea automáticamente si no hay consumos registrados.

## 🛠️ Tecnologías y Conceptos Aplicados

### 1. Custom Hooks (`useOrder`)

Toda la lógica de negocio (agregar, quitar y limpiar la orden) está centralizada en el hook `useOrder.ts`. Esto permite mantener el componente `App.tsx` limpio y enfocado únicamente en la interfaz.

### 2. Estado Inmutable y `prev`

Para garantizar que la aplicación sea robusta ante acciones rápidas del usuario, se utiliza la actualización funcional del estado:

setOrder((prev) => [...prev, newItem]);

El uso de prev asegura que siempre estemos trabajando con el valor más actualizado de la orden en la memoria de React, evitando errores de sincronía.

### 3. Transformación de Datos con TypeScript

Se utiliza el operador spread (...item) para convertir un objeto de tipo MenuItem en un OrderItem, agregando la propiedad quantity necesaria para el carrito.

## 📦 Estructura del Proyecto

- src/hooks/useOrder.ts: Lógica principal del estado de la orden (addItem, removeItem, placeOrder).

- src/components/: Componentes modulares como OrderContents, OrderTotals y TipPercentageForm.

- src/data/db.ts: Fuente de datos con los elementos del menú.

- src/helpers/index.ts: Funciones de utilidad para formateo de moneda en USD.

- src/types/index.ts: Definiciones de tipos para MenuItem y OrderItem.

💻 Instalación y Uso
Instalar las dependencias:

```
npm install
```

Iniciar la aplicación:

```
npm run dev
```
