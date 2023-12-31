import express from "express";
import ArtController from "./artPiece.controller.js";

const artController = new ArtController();

const router = express.Router();


// TODO: require your artPiecesController here

// TODO: Implement your artPieces routes here
router.get('/', artController.getALLArts);
router.get('/:id', artController.getOneArt);
router.post('/',artController.addArts);
router.put("/:id", artController.updateArt);
router.delete("/:id", artController.deleteArt)

export default router;
