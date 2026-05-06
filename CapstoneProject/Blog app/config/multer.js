/**
 * Multer Configuration — File Upload Middleware
 * 
 * Configures multer for handling multipart/form-data (file uploads):
 *   - Storage: Memory storage (files kept in RAM as Buffer)
 *   - Limits: Max file size of 2MB
 *   - Filter: Only JPG and PNG images are allowed
 */

import multer from "multer";

export const upload = multer({
  // Store uploaded files in memory (as Buffer) for direct Cloudinary upload
  storage: multer.memoryStorage(),

  // Limit file size to prevent RAM overflow
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB max
  },

  // Security: only allow specific image types
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true); // Accept the file
    } else {
      const err = new Error("Only JPG and PNG allowed");
      err.status = 400;
      cb(err, false); // Reject the file
    }
  },
});