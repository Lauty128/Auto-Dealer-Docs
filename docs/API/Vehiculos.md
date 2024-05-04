---
sidebar_position: 1
description: 'Consultas relacionadas con los vehiculos de un concesionario'
---

## Lista de vehiculos de un concesionario

  * **Endpoint**: `GET  api/vehicles/store/{store_id}`
  * **Descripción**: Devuelve un listado de los vehiculos de el concesionario especificado en `store_id`. Los datos son paginados y pueden aplicarse distintos filtros a traves de los parametros para mejorar la busqueda.
  * **Parametros**:
    * **page** `integer`: Numero que representa la pagina de la busqueda. Este numero comienza de 1 en adelante 
    * **order** `string`: Un string determinado que representa el orden en que sera devuelto el listado. Las opciones son:
      * `Model-asc`: Dependiendo el año del vehiculo los devuelve ordenados de menor a mayor
      * `Model-desc`: Dependiendo el año del vehiculo los devuelve ordenados de mayor a menor
      * `Price-asc`: Dependiendo del precio de venta del vehiculo los devuelve ordenados de menor a mayor
      * `Price-desc`: Dependiendo del precio de venta del vehiculo los devuelve ordenados de mayor a menor
    * **mark** `integer`: Id que representa una marca de vehiculos a buscar
    * **fuel** `string`: Tipo de combustible que utiliza el vehiculo
      * Nafta
      * GNC
      * Diesel
  * **Respuesta**:
  * **Pasos**:
  * **Excepciones**:

### Ejemplo de uso

**Endpoint**   
```http
GET api/vehicles/store/5jdkSD3fD42sddUr4bkZ?page=1
```

**Respuesta**
```json
  {
   "total": 50,
   "per_page": 10,
   "current_page": 1,
   "last_page": 5,
   "first_page_url": "https://domain/api/vehicles/store/5jdkSD3fD42sddUr4bkZ?page=1",
   "last_page_url": "https://domain/api/vehicles/store/5jdkSD3fD42sddUr4bkZ?page=5",
   "next_page_url": "https://domain/api/vehicles/store/5jdkSD3fD42sddUr4bkZ?page=2",
   "prev_page_url": null,
   "path": "https://domain",
   "from": 1,
   "to": 10,
   "data": [
      {
        "id": "exv6bhRhrMoeWhIjwniS",
        "model": "Vehicle model",
        "price": 000000,
        "price_currency": "USD",
        "image": "path",
        "year": 0000,
        "km": 000000,
        "fuel": "Nafta",
        "engine": "1.4",
        "mark": {
          "id": 5,
          "name": "name 5"
        }
      },
      {
        "id": "Hb76btRj89okWhIjwniS",
        "model": "Vehicle model",
        "price": 8700,
        "price_currency": "USD",
        "image": "path",
        "year": 2018,
        "km": null,
        "fuel": "Nafta",
        "engine": "xxx",
        "mark": {
          "id": 8,
          "name": "name 8"
        }
      },
      .....
   ]
}
```

## Información de los filtros para los vehiculos

  * **Endpoint** : `GET  api/vehicles/store/{store_id}/filters`
  * **Descripción**: Devuelve un listado de los vehiculos de el concesionario especificado en `store_id`. Los datos son paginados y pueden aplicarse distintos filtros a traves de los parametros para mejorar la busqueda.
  * **Parametros**: Sin parametros

## Información completa sobre un vehiculo

  * **Endpoint** : `GET  api/vehicles/{vehicle_id}`


## Crear nuevo vehiculo

  * **Endpoint** : `POST  api/vehicles`


## Eliminar un vehiculo

  * **Endpoint** : `DELETE  api/vehicles/{vehicle_id}`


## Actualizar los datos de un vehiculo

  * **Endpoint** : `PUT  api/vehicles/{vehicle_id}`


## Cambiar un vehiculo de concesionario

  * **Endpoint** : `PUT  api/vehicles/store/{store_id}`