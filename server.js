'use strict';

let express = require('express'),
    app = express();

app.use(express.static('frontend/dist'));

app.listen( 8080, () => {
    console.log("\n\t server is running at 127.0.0.1:8080 \n");
});