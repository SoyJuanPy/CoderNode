# Servidor Básico con Bun y Nodemon

Este proyecto es un servidor básico configurado para usar Bun y Nodemon. Ideal para arrancar rápido y tener un entorno de desarrollo ágil.

## Requisitos

- [Bun](https://bun.sh/) - Asegurate de tener Bun instalado.
- [Nodemon](https://nodemon.io/) - Para reiniciar automáticamente el servidor cuando hay cambios en el código.

## Instalación

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
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
tu-repo/
├── src/
│   └── index.ts
├── package.json
└── README.md
```

- `src/index.ts`: Archivo principal del servidor.
- `package.json`: Configuración del proyecto.
- `README.md`: Este archivo.
  Este código levanta un servidor en el puerto 3000 que responde "Hola, mundo!" a cualquier request.

## Contribuir

Si querés contribuir, sentite libre de hacer un fork del repositorio y mandar un pull request. Cualquier ayuda es bienvenida.
