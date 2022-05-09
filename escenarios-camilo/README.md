## Ejecucion escenarios kraken

```sh
npm install
npx kraken-node run
```

## Ejecucion escenarios playwright

```sh
npm install
npx playwright test --debug
```
PD: ejecutar bajo el modo paso a paso
PD2: agregar bandera `--project=chromium` si se desea probar en Chromium, `--project=firefox` si se desea probar en Mozilla Firefox y `--project=webkit` si se desea probar en WebKit.