# Servidor

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
│   │   ├── cart.js
│   │   └── products.js
│   └── data/
│       ├── carrito.json
│       └── productos.json
├── package.json
└── README.md
```

# Uso con POSTMAN

### 1. **Con GET debe de obtener todos los productos**

- **Ruta**: `http://localhost:8080/api/products`
- **Descripción**: Obtiene todos los productos disponibles.
- **Respuesta exitosa (200 OK)**:

### 2. **Con POST debe de crear un nuevo producto**

- **Ruta**: `http://localhost:8080/api/products`
- **Descripción**: Crea un nuevo producto.
- **Uso de la solicitud**: Debe de agrear en el body la opcion de raw y luego agregar un producto en formato JSON.
- **Ejemplo**:

```json

  {
    "title": "Mouse Gaming X1",
    "description": "Un mouse ergonómico con 7 botones programables y retroiluminación RGB.",
    "code": "MOUSE-X1",
    "price": 49,
    "stock": 125,
    "category": "Accesorios",
    "thumbnails": ["mouse-x1.jpg"]
  },
  {
    "title": "Teclado Mecánico Pro",
    "description": "Teclado mecánico con switches Cherry MX y retroiluminación RGB personalizable.",
    "code": "TECLADO-PRO",
    "price": 89,
    "stock": 78,
    "category": "Accesorios",
    "thumbnails": ["teclado-pro.jpg"]
  }

```

### 3. **Con GET debe de obtener todos los carritos y tambien por id **

- **Ruta**: `http://localhost:8080/api/carts`
- **Descripción**: Obtiene todos los carritos disponibles.
- **Uso**: Para poder obtener los carritos por id debe de agregar el id del carrito (por defecto 1) en http://localhost:8080/api/carts/:cid

### 4. **Con POST debe de crear un nuevo carrito**

- **Ruta**: `http://localhost:8080/api/carts`
- **Descripción**: Crea un nuevo carrito.
- **Uso de la solicitud**: debe de agregar el id del carrito (por defecto 1) y el id del producto en http://localhost:8080/api/carts/:cid/product/:pid
