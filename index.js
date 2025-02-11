const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const { dbConnection } = require('./config/config');
const swaggerUI = require('swagger-ui-express')
const routes = require('./routes');
const docs = require('./docs/index')

app.use(express.json());

app.use('/', routes);
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

dbConnection();

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));