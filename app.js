(function () {
    'use strict';

    const express = require('express');
    const app = express();
    const jwt = require('express-jwt');
    const cors = require('cors');

    app.use(cors());

    // middleware
    const authCheck = jwt({
      secret: new Buffer('YOUR-AUTH0-SECRET', 'base64'),
      audience: 'YOUR-AUTH0-CLIENT-ID'
    });

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    // Public route
    app.get('/api/data/public', (req, res)=>{
        let deals = [
            'public',
            'stuff',
            'here'
        ];
        res.json(deals);
    });

    // Private route
    app.get('/api/user/private', authCheck, (req,res)=>{
        let deals = [
            'private',
            'stuff',
            'here'
        ];
        res.json(deals);
    });


    app.listen(3000);

    console.log('Example app listening on port 3000!');
}());
