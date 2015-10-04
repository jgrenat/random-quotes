jspm bundle startup src/modules/global.js --inject --minify
jspm bundle 'quote/**/* - startup' src/modules/quote.js --inject --minify
rimraf dist
cpy src/jspm_packages/*.* dist/jspm_packages
cpy src/index.html src/jspm-config.js dist
cpy **/*.png **/*.gif **/*.jpg ../dist --parents --cwd=src
cpy src/modules/**/* dist/modules
rimraf src/modules
jspm unbundle
