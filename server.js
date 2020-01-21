const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes');
const handle = routes.getRequestHandler(app);
const PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '0.0.0.0';

app.prepare().then(() => {
    const server = express();

   

   
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, HOST => {
        
        console.log('> Ready on' + HOST + PORT) ;
    });
});