# MISW-4103 Kraken and Cypress testing for Ghost 3.41.1

----

Author: Luis Miguel Guzman Perez

Mail: <lm.guzmanp1@uniandes.edu.co>

AUT: Ghost 3.41.1

Used Technologies:

- [Ghost](https://github.com/TryGhost/Ghost)
- [Kraken](https://github.com/TheSoftwareDesignLab/Kraken)
- [Cypress](https://github.com/cypress-io/cypress)

----

## General Instructions

1. Open a terminal window and clone the following repository:

- SSH option
    ```shell
    git clone git@github.com:lmguzmanp/MISW-4103_Ghost_Kraken.git
    ```

- HTTPS option
    ```shell
    git clone https://github.com/lmguzmanp/MISW-4103_Ghost_Kraken.git
    ```

2. Navigate to the cloned directory
     ```shell
     cd MISW-4103_Ghost_Kraken/
     ```
3. Make sure you have the `node` and `npm` engine specified versions. Please
   review [package.json](https://github.com/lmguzmanp/MISW-4103_Ghost_Kraken/blob/bc09c72bae2083199ef5148fe9d9fe1d3e95048f/package.json#L18-L21)

    - You can use [nvm](https://github.com/nvm-sh/nvm), please follow their
      updated instructions


4. Once you have installed `nvm`, you can use the following command to use the
   right version that this repository needs
    ```shell
    nvm install 14
    ```
    ```shell
    nvm use 14
    ```

5. Install dependencies
    ```shell
    npm i
    ```

6. This repository executes Ghost over port 2368, so expects no running
   instances over the mentioned port. Please verify your running instances
   before proceeding. **If the port is being used by any application, all tests
   will fail.**
    ```shell
    npx ghost ls
    ```
   **Note: this repository includes ghost-cli as dependency, so running the
   above-mentioned command should not generate any conflict**

   If you still need to run the application in another port, please modify the
   following lines:
   - Line 2
     inside [properties.json](https://github.com/lmguzmanp/MISW-4103_Ghost_Kraken/blob/5c58e732c643b2222d492e962ad716c37718c2f9/properties.json#L2)
   - Line 10
     inside [properties.json](https://github.com/lmguzmanp/MISW-4103_Ghost_Kraken/blob/5c58e732c643b2222d492e962ad716c37718c2f9/properties.json#L10)
   - Lines 12 and 13
     inside [properties.json](https://github.com/lmguzmanp/MISW-4103_Ghost_Kraken/blob/5c58e732c643b2222d492e962ad716c37718c2f9/properties.json#L12-L13)
   - Line 8
     inside [package.json](https://github.com/lmguzmanp/MISW-4103_Ghost_Kraken/blob/5c58e732c643b2222d492e962ad716c37718c2f9/package.json#L8)

### Instructions for Kraken

1. Run automated Kraken tests. This command will generate five screenshots
   in the root folder, each corresponding to a successfully tested scenario.
    ```shell
    npm run kk-test
    ```

### Instructions for Cypress

1. Run automated Cypress tests by any of the following options. Following
   commands will generate five screenshots in the `cypress/screenshots/`,
   each corresponding to a successfully tested scenario. Additionally, a
   video will be produced inside the `cypress/videos/` folder.

   - Headed mode (it will open a browser where you can interactively see
     the progress)
    ```shell
    npm run cy-headed
    ```

   - Headless mode (it won't open a browser, all tests will be executed
     inside the terminal. Please allow 60-70 seconds to finish)
    ```shell
    npm run cy-headless
    ```
