# Webpack Boilerplate
This repository contains Webpack and SCSS boilerplate code to quickly get started on building a webpage following a simplified version of SASS (7-1 pattern).


## Project Setup
### Installing
Run `npm install` to install all the dependencies this project needs. 

### Running the app
Run `npm run dev`. Your browser should automatically open a new tab where you can see your app.
*Note :* live reload is enabled so just modify your files and it will be reflected on the app instantly.

### Building the app
Run `npm run build`. It will automatically add vendor prefixes to CSS rules and compress all your `.scss` files into one `style.css` file located in your `dist` folder.


## SASS folder structure
It contains these folder and files : 

- `abstracts` : functions, variables
- `base` : reset, typography,
- `components` : buttons, form
- `layout` : footer, header, nav, breadcrumb
- `pages` : contact, home,
- `themes` : theme
- `vendors` : bootstrap, fontawesome


## Included Framework and Libraries
- `fontawesome` - Font Library


## Webpack Dependencies
- Webpack
- Babel
- File Loader
- CSS Loader
- Node SASS
- SASS Loader
- Post CSS 
- Autoprefixer
- Purge CSS
- Mini CSS Extractor Plugin




