# Asyncy Landing Page

[![Netlify](https://www.netlify.com/img/global/badges/netlify-dark.svg)](https://asyncy.com)


This repository is home to the landing page for Asyncy.
Pull requests are automatically build and deployed with Netlify.
Check the GitHub status for the deployed changes.

### Development

Install and Build

```sh
make install
```
> This will run `npm install` and build assets.

The web-ready pages are found in the `dist/` folder.

### Watch & Rebuild

 > **`entr`** is required to for `make watch`. Install by `brew install entr`

```sh
# watches changes to semantic/ UI and Theme
cd semantic/ && gulp watch

# Watch for changes in mustache templates
make watch
```
