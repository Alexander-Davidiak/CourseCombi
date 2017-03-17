let express = require('express'),
    app = express();

app.use(express.static('frontend/dist'));

app.listen(8080);