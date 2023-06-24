# Billing

Pasos para correr el proyecto:
1- Instalar las dependencias del proyecto
```
Ejecutar el npm install 

2- Para correr el poyecto
```
npm run dev


/inventarios

- Mostrar todos los inventarios
- Permitir crear un inventario (boton: 'crear inventario')
- Permitir eliminar inventarios (boton: 'eliminar' en cada inventario)
- Por cada inventario mostrar el total de articulos y el total en dinero de articulos que hay

/inventarios/:inventario_id/articulos

- Mostrar todos los articulos del inventario
- Permitir agregar articulos (boton: 'agregar articulo')
- Permitir eliminar articulos (boton: 'eliminar' en cada articulo)
- Permitir actualizar articulos (boton: 'actualizar' en cada articulo)
- Por cada articulo mostrar (la cantidad en stock, precio de costo, nombre)

/clientes

- Mostrar todos los clientes
- Permitir crear un cliente (boton: 'crear cliente')
- Permitir eliminar un cliente (boton: 'eliminar' en cada cliente)
- Permitir actualizar el cliente (boton: 'actualizar' en cada cliente)
- Por cada cliente mostrar (nombre, rtn, direccion, numero de telefono, tipo de cliente)

/reportes

- Mostrar todos los reportes
- Permitir crear reportes (boton: 'crear reporte')
- Permitir eliminar reportes (boton: 'eliminar' en cada reporte)
- Permitir actualizar reportes (boton: 'actualizar' en cada reporte)
- Por cada reporte mostrar (titulo, contenido, total facturas)

/reportes/:reporte_id/facturas

- Mostrar todas las facturas que tiene
- Permitir agregar facturas (boton: 'agregar factura')
- Permitir eliminar una factura (boton: 'eliminar' en cada factura)
- Permitir actualizar las facturas (boton: 'actualizar' en cada factura)
- Por cada factura mostrar (cliente al que pertenece, subtotal, ISV, total, fecha de creacion)

/reportes/:reporte_id/facturas/:factura_id

- Mostrar el cliente al que pertenece la factura
- Mostrar todos los productos de la factura
- Permitir agregar productos a la factura (boton: 'agregar producto')
- Permitir eliminar productos de la factura
- Permitir actualizar productos de la factura
- Por cada producto mostrar (nombre, cantidad, precio, total)


