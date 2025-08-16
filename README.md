# Next.js & HeroUI  
 
## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

# ✅ To create a new project

### Use the template  

based on this template using `create-next-app`, run the following command:

```bash
npx heroui-cli@latest init -t app
```
 
```bash
HeroUI CLI v1.2.3

T  Create a new project
|
o  Select a template (Enter to select)
|  App
|
o  New project name (Enter to skip with default name)
|  app-heroui
|
o  Select a package manager (Enter to select)
|  npm
|
o  Template created successfully!
|
o  Next steps ----+
|                 |
|  cd app-heroui  |
|  npm install    |
|                 |
+-----------------+
|
—  🚀 Get started with npm run dev

 ```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

---


# ✅ Deploy

1. ## Instalar gh-pages


```bash
npm install gh-pages --save-dev
```
 
2. ## Modificar package.json

>Añadir script: 

### <font color="yellow">"deploy": "npm run build && gh-pages -d out"</font>

```bash
{
  "name": "next-app-template",
  "version": "0.0.1",
  "private": true,
   "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "eslint --fix",
    "deploy": "npm run build && gh-pages -d out"
  },
```
3. ## Modificar next.config.js


```bash
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // exportar HTML estático
  basePath: isProd ? "/app-heroui" : "",
  assetPrefix: isProd ? "/app-heroui/" : "",
  trailingSlash: true, // importante para gh-pages
};

module.exports = nextConfig;

```

4. ## Crear archivo yml

### Crea el archivo de GitHub Actions

En tu proyecto, crea esta carpeta y archivo:

.github/workflows/deploy.yml

Y dentro de deploy.yml, pega esto:


```bash
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build site
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out

```
5. ## Ejecutar comando

```bash
npm run build
```

6. ## Subir  a tu repositorio


🌐   Configura GitHub Pages

Ve a tu repositorio en GitHub → Settings → Pages.

En "Source", selecciona:

Branch: gh-pages

Folder: / (root)
_____________________________________________________________________________
✅ Resultado

Cada vez que haces push a main, GitHub Actions:

Compila tu app.

Exporta a HTML estático.

Publica automáticamente en gh-pages.

 