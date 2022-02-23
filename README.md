# csv-map-items-util
Utilitario que mapea los registros de un archivo CSV y lo convierte en un html

Paso 1:
Actualizar el feed con la última versión
```
curl --output catalogue.csv <url>

```

Paso 2:
En index.js, en la variables sku = [] ingresar los SKUs a generar y ejecutar script
```
node index.js
```

Paso 3:
En /out/export.html se genera los html de los SKUs por items.