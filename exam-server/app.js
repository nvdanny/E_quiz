const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const config = require('./config');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/questions');
const examRoutes = require('./routes/exams');


mongoose.connect(config.mongoURI);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database connection established successfully");
}) 

app.use("/api/auth", authRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/exam', examRoutes);

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
