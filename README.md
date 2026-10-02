# Menú Digital

Carta digital estilo KFC/app de restaurante: 100% front-end (HTML + CSS + JS puro),
sin backend ni base de datos. Pensada primero para móvil.

## Cómo funciona

- **Pantalla de inicio**: logo + loader animado (~1.3s) y luego aparece la carta.
- **Inicio / categorías**: grid de categorías (Bocadillos, Hamburguesas, Tapas,
  Platos Combinados, Comida China, Arroz con Salsa, Bebidas, Café, Refrescos,
  Cervezas), fondo oscuro y sencillo.
- **Categoría**: al entrar cambia el acento de color según el tipo de plato
  (tapas, china, hamburguesas…), con foto de portada, buscador y lista de
  productos con su precio (o variantes "Media/Entera").
- **Mi Cuenta**: botón flotante tipo carrito. Es **solo informativo** (no es
  un pedido online): suma lo que el cliente quiere pedir para enseñárselo al
  camarero. Se guarda en `localStorage` del navegador (no hay servidor ni BD),
  así que persiste entre recargas del mismo dispositivo pero no se comparte
  entre dispositivos.

## Estructura

```
menu_digital/
  index.html          punto de entrada
  css/style.css        estilos (mobile-first, temas por categoría via CSS vars)
  js/data.js           datos del menú (generado, ver abajo)
  js/script.js          toda la lógica: navegación, carrito, animaciones
  assets/               logo, imagen de inicio y fotos por categoría/producto
```

## Datos del menú

`js/data.js` se genera automáticamente a partir de `men_por_categor_as.txt`
(un nivel arriba, fuera de esta carpeta) con el script `build_data.js`. Si
cambian precios o productos del txt original, vuelve a ejecutar desde la
carpeta raíz del proyecto:

```
node build_data.js
```

Esto regenera `menu_digital/js/data.js` y asigna automáticamente las fotos
disponibles a cada producto (o una foto genérica de su categoría si no hay
foto específica).

## Desarrollo local

Al ser estático, basta con abrir `index.html`, pero por las rutas relativas
funciona mejor con un servidor local:

```
npx serve .
```

o doble click en `index.html` (funciona igual, sin dependencias).

## Despliegue en Vercel

1. Sube esta carpeta (`menu_digital/`) a un repositorio de Git.
2. En Vercel: "Add New Project" → importa el repo → Framework Preset:
   **Other** (sitio estático) → Deploy. No necesita variables de entorno ni
   build command.

## Notas

- Precios tal cual el menú original (IVA incluido).
- "Mi Cuenta" se puede vaciar con el botón "Vaciar cuenta"; no hay forma de
  enviar el pedido desde la app a propósito, es solo una ayuda visual.
