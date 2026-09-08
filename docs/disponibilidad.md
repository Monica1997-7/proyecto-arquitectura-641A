# Disponibilidad y carga — Caso A

## Caso A: Tienda de barrio

El sistema corresponde a una tienda en línea que comercializa ropa y permite realizar las siguientes funciones principales: consultar el catálogo, agregar productos al carrito, realizar el pago y gestionar el envío.

Para este caso se considera una carga aproximada de **50 pedidos al día**. Debido a que la cantidad de usuarios y pedidos es relativamente baja y estable, no se requiere una arquitectura excesivamente compleja.

### Condiciones de carga

| Característica                    | Caso A                         |
| --------------------------------- | ------------------------------ |
| Tipo de sistema                   | Tienda de barrio               |
| Pedidos diarios                   | 50 pedidos al día              |
| Usuarios simultáneos considerados | Hasta 20 usuarios              |
| Disponibilidad                    | Mínimo 99 % mensual            |
| Tiempo de respuesta               | Menor a 2 segundos             |
| Escalabilidad                     | Hasta 100 usuarios simultáneos |

### Necesidad de arquitectura

Para este escenario puede utilizarse una arquitectura sencilla, siempre que sea capaz de cumplir los requerimientos de rendimiento, disponibilidad, seguridad, recuperación y escalabilidad definidos para el sistema.

No es necesario implementar inicialmente una infraestructura diseñada para grandes picos de tráfico, como ocurriría en una plataforma de venta de boletería con miles de personas comprando al mismo tiempo. Sin embargo, la arquitectura debe permitir aumentar la capacidad si el número de clientes crece.

### Conclusión

El Caso A no necesita la misma arquitectura que los escenarios con una carga mucho mayor. Con aproximadamente 50 pedidos al día, una arquitectura sencilla y de bajo costo puede ser suficiente, siempre que cumpla los atributos de calidad establecidos.

La arquitectura debe estar preparada para soportar hasta 20 usuarios consultando el catálogo simultáneamente, mantener una disponibilidad mínima del 99 % mensual y permitir una futura ampliación de capacidad hasta 100 usuarios simultáneos.
