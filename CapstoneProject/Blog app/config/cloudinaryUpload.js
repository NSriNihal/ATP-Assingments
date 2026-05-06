/**
 * Cloudinary Upload Helper
 * 
 * Wraps the Cloudinary upload_stream API in a Promise for async/await usage.
 * Uploads image buffers (from multer memory storage) to the "blog_users" folder.
 * 
 * @param {Buffer} buffer - Image file buffer from multer
 * @returns {Promise<object>} Cloudinary upload result (includes secure_url, public_id)
 */

import cloudinary from "./cloudinary.js";

export const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "blog_users" },
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
    stream.end(buffer); // Send the buffer to the upload stream
  });
};