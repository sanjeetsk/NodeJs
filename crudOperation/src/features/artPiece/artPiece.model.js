export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  // TODO: Implement your ArtPiece model methods here
  static getAll(){
    return arts;
  }

  static getOne(id){
    const result = arts.find(art => art.id == id);
    return result;
  }

  static add(art){
    const { title, artist, year, imageUrl } = art;
    const newArt = {
      id: arts.length + 1,
      title,
      artist,
      year,
      imageUrl
    }
    arts.push(newArt);
    return newArt;
  }

  static update(id, art){
    let foundIndex = arts.findIndex((el)=> el.id === id);
    if(foundIndex == -1){
      return false;
    }
    const { title, artist, year, imageUrl } = art;
    const newArt = {
      id,
      title,
      artist,
      year,
      imageUrl
    }
    arts[foundIndex] = newArt;
    return newArt;
  }

  static delete(id){
    let indexToDelete = arts.findIndex((el)=> el.id == id);
    if(indexToDelete != -1){
      arts.splice(indexToDelete,1);
      return true;
    }else{
      return false;
    }
  }
}

let arts=[]
