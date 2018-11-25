npm init -y



npm install babel-cli babel-core babel-preset-es2015 --save -dev


"build": "babel src -d dist --presets es2015"
    //src - где лежит код, -d куда складываем код, --preset во что переводим


npm run watch

promise babel-polyfill
npm install --save-dev babel-polyfill

script
    <!--<script src="node_modules/babel-polyfill/dist/polyfill.min.js"></script>-->


