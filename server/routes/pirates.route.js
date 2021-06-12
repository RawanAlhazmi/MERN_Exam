const Pirates = require('../controllers/pirates.controller');
 
module.exports = app => {
    app.get('/api', Pirates.All);
    app.get('/api/:id', Pirates.One);
    app.post('/api', Pirates.createPirates);
    app.delete('/api/:id', Pirates.deletePirates);
    app.put('/api/:id', Pirates.updatePirates);
}