# Servidor Básico con Bun y Nodemon

Este proyecto es un servidor básico configurado para usar Bun y Nodemon. Ideal para arrancar rápido y tener un entorno de desarrollo ágil.

## Requisitos

- [Bun](https://bun.sh/) - Asegurate de tener Bun instalado.
- [Nodemon](https://nodemon.io/) - Para reiniciar automáticamente el servidor cuando hay cambios en el código.

## Instalación

1. Cloná el repositorio:

   ```bash
   git clone git@github.com:SoyJuanPy/CoderNode.git
   cd CoderNode
   ```

2. Instalá las dependencias:

   ```bash
   bun install
   ```

## Uso

Para iniciar el servidor en modo desarrollo con Nodemon:

```bash
nodemon --exec bun run src/index.ts
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
│   │   ├── cart.js
│   │   └── products.js
│   └── data/
├── package.json
└── README.md


```
