# Servidor Básico

Esto es un servidor con express usando Nodemon y bun.

## Requisitos

- [Bun](https://bun.sh/) - Asegurate de tener Bun instalado.
- [Nodemon](https://nodemon.io/) - Para reiniciar automáticamente el servidor cuando hay cambios en el código.

## Instalación

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/SoyJuanPy/CoderNode.git
   cd CoderNode
   ```

2. Instalá las dependencias:

   ```bash
   bun install
   ```

## Uso

Para iniciar el servidor en modo desarrollo con Nodemon:

```bash
nodemon --exec bun run src/app.js
```

Esto va a iniciar el servidor y reiniciarlo automáticamente cada vez que hagas cambios en el código.

## Estructura del Proyecto

```plaintext
CoderNode
├── src/
│   ├── app.js
│   ├── models/
│   │   ├── CartManager.js
│   │   └── ProductManager.js
│   ├── routes/
│   └── data/
│       ├── carrito.json
│       └── productos.json
├── package.json
└── README.md
```
