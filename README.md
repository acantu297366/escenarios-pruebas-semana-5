# Reporte Semana 5 - ABP Ghost 3.41.1


## PROS KRAKEN

- Tiene un fácil funcionamiento.
- Está basado en herramientas muy utilizadas como Cucumber.
- Permite visualizar fácilmente la interfaz gráfica durante la ejecución de las pruebas.


## CONTRAS KRAKEN

- Dificultades para su instalación.
- A veces no reconoce instrucciones o se le dificulta.
- Tiene una ejecución lenta.
- Ejecución límitada, no es posible la elección de algún browser en especifico, si se desea hacer debug del tipo step-by-step

## PROS PLAYWRIGHT

- Tiene un fácil funcionamiento.
- Tiene una ejecución rápida e intutitva.
- Reconoce las instrucciones de manera fácil.
- Reconoce la profundidad de los elementos en HTML de manera rápida y fácil.


## CONTRAS PLAYWRIGHT

- Hay que especificar para que tome capturas de pantalla.
- No es muy gráfico.
- No especifica de manera exacta el error cuando falla cuando se escriben mal las instrucciones.
- Algunos selectores solo funcionan en modo step-by-step y no en modo ejecución rápida.


## PROS CYPRESS

- Es la herramienta más fácil de usar.
- Tiene una ejecución rápida e intutitva.



## CONTRAS CYPRESS

- No reconoce muy bien la profundidad de los elementos HTML por lo que toca especificar detalladamente, por lo que complica el tipado.


## Integrantes

- Diego Fernando Eslava Lozano
- Alonso Daniel Cantú Trejo
- Camilo Andres Galvez Vidal
- Luis Miguel Guzman Perez

## Funcionalidades Bajo Pruebas

- Login de un usuario existente
- Login de un nuevo usuario
- Gestionar Tags
- Gestionar Staff
- Gestionar páginas
- Creación de cuenta de administración

## Descripción de escenarios

### Escenarios Alonso

1. Crear cuenta con un correo no válido
2. Crear crear con una contraseña no válida
3. Crear login sin título para el blog
4. Crear login sin nombre para el usuario
5. Crear cuenta con todos los campos ingresados

### Escenarios Diego

6. Crear una cuenta y crear un tag nuevo
7. Hacer login y Editar un tag
8. Hacer login y eliminar un tag
9. Hacer login e invitar un miembro del staff
10. Hacer login y revocar invitación de un miembro del staff.

### Escenarios Luis

11. Crear una página y publicarla tras crear una cuenta de administrador
12. Actualizar el título de una página y publicarla
13. Actualizar la URL de una página previamente creada
14. Visitar una página como usuario visitante
15. Eliminar una página como administrador y verificar que deje de existir

### Escenarios Camilo
16.  Activar y desactivar modo nocturno
17.  Editar nombre y descripción del blog
18.  Agregar un nuevo submenú al navbar
19.  Editar links de las redes sociales
20.  Interactuar con la integración AMP