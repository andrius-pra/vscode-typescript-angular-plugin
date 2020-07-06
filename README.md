# vscode-typescript-angular-plugin
This extention enables external files (.html) in typescript plugins. It uses experimental features of vscode and it requires custom typescript version and custom language service for angular 9.

install these packages for Angular 8:
 * `npm install https://npmpackages.blob.core.windows.net/andrius-pra/typescript-3.6.4-experimental-plugin-external-files.20191113.tgz`
 * `npm install @angular/language-service@8`

Install these packages for Angular 9:
* `npm install https://npmpackages.blob.core.windows.net/andrius-pra/language-service-9.1.0-experimental-build-002.tgz`
* `npm install https://npmpackages.blob.core.windows.net/andrius-pra/typescript-3.8.3-experimental.20200402.tgz`

Install these packages for Angular 10:
* `npm install https://npmpackages.blob.core.windows.net/andrius-pra/typescript-3.9.6-experimental.20200706.tgz`
* `npm install @angular/language-service@10`


Add these setting to your workspace settings file (`.vscode/settings.json`)
```
{
    "typescript.tsserver.useSeparateSyntaxServer": false,
    "typescript.tsdk": "node_modules\\typescript\\lib",
}
```