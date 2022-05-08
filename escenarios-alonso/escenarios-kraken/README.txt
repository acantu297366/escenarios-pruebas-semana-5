Pasos para ejecutar pruebas de Kraken

    La version de la aplicacion Ghost probada es 3.41.1

    Para instalar esa version se tiene que hacer lo siguiente

        Asegurar que la version de Node que se tenga sea
        la 14.17.0

        Ejecutar

           ghost install 3.41.1 local --force 

    Para poder ejecutar las pruebas de Login correctamente,
    se tiene que asegurar que la base de datos de la aplicacion
    Ghost este vacia, para esto se debe de posicionar en la 
    carpeta en la que se tenga instalada de forma local la
    aplicacion y correr el siguiente comando:

        rm -r content/data/ghost-local.db

    El comando anterior borrara todos los registros de la
    base datos de Ghost de forma local, esto asegura que
    la aplicacion redireccione correctamente a los links
    necesarios para crear la cuenta por primera vez. La
    base de datos se generara automaticamente al correr
    las pruebas y empezar su ejecucion

    Ejecutar Ghost

        ghost start

Validar que se tenga instalado lo siguiente

    Android SDK (ADB and AAPT configured)
    Appium
    NodeJS 14.15.0
    Java

Validar que se tenga todo configurado correctamente

    npx kraken-node doctor

Instalar kraken (solo si no se ha instalado previamente)

    npm install kraken-node --save

Ejecutar Kraken

    npx kraken-node run




