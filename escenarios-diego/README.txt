KRAKEN

1. Clonar el repositorio con el comando git clone https://github.com/abubu11/Pruebas-Ghost-Kraken.git 

2. Borrar database de Ghost con el comando rm -r content/data/ghost-local.db y si está corriendo, ejecutar ghost stop

3. Correr Ghost con ghost star en terminal.

4. Cambiar dentro del archivo Properties la url con la dirección que arrojó el terminal, cambiando solamente el número de local host en las propiedades de PAGE, PAGINA_SETUP_ON, PAGINA SETUP_TWO, ADMIN_PAGE, LOGIN_PAGE y POST_PAGE

5. Abrir terminal en el directorio donde está el proyecto y correr ./node_modules/kraken-node/bin/kraken-node run

PLAYWRIGHT

1. Clonar el repositorio con el comando git clone https://github.com/abubu11/Pruebas-Ghost-Playwright.git 

2. Borrar database de Ghost con el comando rm -r content/data/ghost-local.db y si está corriendo, ejecutar ghost stop

3. Correr Ghost con ghost star en terminal

4. Cambiar dentro de cada escenario de pruebas la url que le arrojó la terminal de Ghost

5. En una terminal, correr cada escenario con el comando node nombre_escenario.js ej: si el escenario 1 se llama 1_crear_tag_nuevo.js correr note 1_crear_tag_nuevo.js
