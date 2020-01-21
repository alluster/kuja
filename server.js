/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const fetch = require("node-fetch");
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes');
const handle = routes.getRequestHandler(app);
const url = require('url');


const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();

   

    server.get('/api/articles', (req, res) => {
        getArticles()
            .then(articles => {
                res.json(articles);
            })
            .catch(error => {
                console.dir(error);
            });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:' + PORT);
    });
});