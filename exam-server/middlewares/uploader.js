const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET // Click 'View Credentials' below to copy your API secret
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    allowedFormats: ["jpg", "png"],
    transformation: [ {width: 500, height: 500, crop: 'limit'} ],
    params: {
      folder: "quiz_bank",
    },
  });
  
  const uploadCloud = multer({ storage: storage });
  
  module.exports = uploadCloud;