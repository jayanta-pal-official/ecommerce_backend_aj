import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
const storage = multer.memoryStorage();

const uploader = multer({
  storage,
  // limits: {
  //   fileSize: 10 * 1024 * 1024, // 10MB limit
  // },
  // fileFilter: (req, file, cb) => {
  //   if (!file.mimetype.startsWith("image/")) {
  //     return cb(new Error("Only image files are allowed!"), false);
  //   }
  //   cb(null, true);
  // },
});
const uploadToCloudinary = async (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder }, // Specify folder in Cloudinary
        (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        }
      )
      .end(fileBuffer);
  });
};

export { uploader, uploadToCloudinary };
