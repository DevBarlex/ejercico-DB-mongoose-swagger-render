const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const { dbConnection } = require('./config/config');
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const routes = require('./routes');

app.use(express.json());

app.use('/', routes);


dbConnection();

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));