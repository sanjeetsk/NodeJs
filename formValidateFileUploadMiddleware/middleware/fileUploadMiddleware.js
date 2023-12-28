// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
import multer from "multer";

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename :(req, file, cb) =>{
        const name = Date.now() + '_' + file.originalname;
        cb(null, name);  // The image name will be the current timestamp_filename
    }
})

export const imageUpload = multer({
    storage: storageConfig,
})