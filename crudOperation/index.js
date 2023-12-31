import express from "express";
import router from "./src/features/artPiece/artPiece.routes.js";
import bodyParser from 'body-parser';

const app = express();
// TODO: require your artPieceRoutes here

// app.use(express.json());
app.use(bodyParser.json());


app.use('/api/artPieces', router);

// TODO: use your artPieceRoutes with a proper endpoint

export default app;
