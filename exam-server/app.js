const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const config = require("./config");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "https://exam-server-p8gl2dfz2-nguyendaniel1307s-projects.vercel.app/",
      "http://localhost:3000",
      "https://blndt-sec-bav.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

const authRoutes = require("./routes/auth");
const questionRoutes = require("./routes/questions");
const examRoutes = require("./routes/exams");
const submissionRoutes = require("./routes/submission");

mongoose.connect(config.mongoURI);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection established successfully");
});

app.use("/api/auth", authRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/exam", examRoutes);
app.use("/api/submission", submissionRoutes);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E_quiz",
      version: "1.0.11",
    },
    servers: [
      {
        url: "https://api.blndt-sec-bav.com",
        description: "Live server",
      },
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],
  },
  apis: ["./swagger/*.yaml"],
};

const openapiSpecification = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
