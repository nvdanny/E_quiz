const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config;
const bodyParser = require('body-parser');
const config = require('./config');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/questions');
const examRoutes = require('./routes/exams');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/exams', examRoutes);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E_quiz",
      version: "1.0.11",
    },
    servers: [
      {
        url: "",
        descripton: "Live server"
      },
      {
        url: "http://localhost:3000/api",
        description: "Local server"
      },
    ],
  },
  apis: ["./swagger/*.yaml"],
}

const openapiSpecification = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
