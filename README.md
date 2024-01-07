# AngularGymPro
Este proyecto fue generado con Angular CLI versión 17.0.0.

## Descripción del Proyecto
Se creará una interfaz web para gestionar los monitores y las actividades de nuestro gimnasio.

El objetivo de esta práctica es implementar el diseño de la manera más fiel posible, ¡incluso si parece horrendo! Se crearán los componentes reutilizables necesarios. No se acepta un solo componente o componentes copiados.

La página siempre tiene un encabezado con el nombre y el logo. También hay un selector de funciones en la parte inferior donde puedes elegir entre Actividades y Monitores.

## Página de Actividades
En la página de actividades, puedes elegir una fecha y moverte entre fechas. Cada día aparece con 3 bloques de actividad fijos. Cuando un bloque está libre, se puede incluir una actividad a través del formulario. Las actividades también pueden ser eliminadas y editadas.

Cada tarjeta de actividad muestra los monitores y el tipo de actividad. Dependiendo del tipo de actividad, puede tener de 1 a N monitores. Por ejemplo, BodyPump siempre tiene que tener 2 monitores y Spinning solo 1.

## Página de Monitores
En la página de monitores, los monitores actuales se muestran en modo carrusel, y también hay un motor de búsqueda para moverse por la lista. Se pueden crear nuevos monitores, y los seleccionados pueden ser editados y eliminados.

## Servidor de Desarrollo
Ejecuta `ng serve` para un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Generación de Código
Ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción
Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Ejecución de Pruebas Unitarias
Ejecuta `ng test` para ejecutar las pruebas unitarias a través de Karma.

## Ejecución de Pruebas de Extremo a Extremo
Ejecuta `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de tu elección. Para usar este comando, primero necesitas agregar un paquete que implemente capacidades de pruebas de extremo a extremo.

## Ayuda Adicional
Para obtener más ayuda sobre Angular CLI, usa `ng help` o consulta la página de Referencia de Comandos y Descripción General de Angular CLI.
