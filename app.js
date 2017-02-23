(function () {
    'use strict';

    const express = require('express');
    const app = express();
    const cors = require('cors');

    app.use(cors());

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
    app.get('/api/user/private', (req,res)=>{
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
