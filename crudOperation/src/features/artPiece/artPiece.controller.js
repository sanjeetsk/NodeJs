// TODO: require your ArtPiece model here
import ArtPiece from "./artPiece.model.js";
// TODO: Implement your artPieces controller functions here

export default class ArtController{
    getALLArts(req, res){
        const arts = ArtPiece.getAll();
        res.status(200).send(arts);
    }

    getOneArt(req, res){
        const id = req.params.id;
        const art = ArtPiece.getOne(id);
        if(!art){
            res.status(404).send('Product not found');
        }
        else{
            res.status(200).send(art);
        }
    }

    addArts(req, res){
        const art = ArtPiece.add(req.body);
        res.status(201).send(art);
    }

    updateArt(req, res){
        const id = parseInt(req.params.id)
        const art = ArtPiece.update(id, req.body);
        if(!art){
            res.status(404).send('Product not found');
        }
        else{
            res.status(200).send(art);
        }
    }

    deleteArt(req, res){
        const id = req.params.id;
        const result = ArtPiece.delete(id);
        if(result){
            return res.status(204).send();
        }
        else{
            return res.status(404).send("The product not found.");
        }
    }
}