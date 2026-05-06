/**
 * Author API Router — Article CRUD Operations
 * 
 * Part of: Capstone Blog Application
 * 
 * Provides routes for authors to manage their articles:
 *   - Create new articles
 *   - Read own articles
 *   - Update article content
 *   - Soft delete/restore articles (toggle isArticleActive)
 * 
 * All routes are protected by JWT token verification (role: AUTHOR)
 * 
 * Endpoints:
 *   POST  /author-api/article  → Create a new article
 *   GET   /author-api/article  → Read own articles
 *   PUT   /author-api/article  → Update article content
 *   PATCH /author-api/article  → Soft delete/restore an article
 */

import exp from "express";
import { UserModel } from "../models/userModel.js";
import { ArticleSchema } from "../models/articleModel.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const authorApp = exp.Router();

/**
 * POST /article — Create a new article
 * Verifies that the author ID in the request matches the authenticated user
 * Protected route: requires AUTHOR role
 */
authorApp.post("/article", verifyToken("AUTHOR"), async (req, res) => {
  const articleObj = req.body; // Get article data from request body
  const user = req.user; // Get decoded token payload

  // Fixed: check if author exists BEFORE accessing author.email
  let author = await UserModel.findById(articleObj.author);

  if (!author) {
    return res.status(404).json({ message: "Invalid author" });
  }

  // Verify the author ID belongs to the authenticated user
  if (author.email !== user.email) {
    return res.status(403).json({ message: "Invalid author ID" });
  }

  // Create and save the article document
  const articleDoc = new ArticleSchema(articleObj);
  await articleDoc.save();

  res.status(201).json({ message: "Article created" });
});

/**
 * GET /article — Read all articles by the authenticated author
 * Protected route: requires AUTHOR role
 */
authorApp.get("/article", verifyToken("AUTHOR"), async (req, res) => {
  const authorId = req.user?.userId;

  // Find all articles belonging to this author
  const articles = await ArticleSchema.find({ author: authorId });

  res.status(200).json({ message: "Author articles", payload: articles });
});

/**
 * PUT /article — Update an article's content
 * Only the original author can update their own articles
 * Expects: { articleId/articleID, title, category, content } in body
 * Protected route: requires AUTHOR role
 */
authorApp.put("/article", verifyToken("AUTHOR"), async (req, res) => {
  const authorIdOfToken = req.user?.userId;
  const { articleId, articleID, title, category, content } = req.body;

  // Support both "articleId" and "articleID" field names
  const targetArticleId = articleId || articleID;

  // Find and update the article (only if it belongs to this author)
  const ModifiedArticle = await ArticleSchema.findOneAndUpdate(
    { _id: targetArticleId, author: authorIdOfToken },
    { $set: { title, category, content } },
    { new: true } // Return the updated document
  );

  if (!ModifiedArticle) {
    return res.status(403).json({ message: "Not authorised to edit article" });
  }

  res
    .status(200)
    .json({ message: "Article modified", payload: ModifiedArticle });
});

/**
 * PATCH /article — Soft delete or restore an article
 * Toggles the isArticleActive flag without permanently deleting
 * Expects: { articleId/articleID, isArticleActive } in body
 * Protected route: requires AUTHOR role
 */
authorApp.patch("/article", verifyToken("AUTHOR"), async (req, res) => {
  const authorIdOfToken = req.user?.userId;
  const { articleId, articleID, isArticleActive } = req.body;

  // Support both field name conventions
  const targetArticleId = articleId || articleID;

  // Verify the article belongs to this author
  const articleOfDB = await ArticleSchema.findOne({
    _id: targetArticleId,
    author: authorIdOfToken,
  });

  if (!articleOfDB) {
    return res.status(404).json({ message: "Article not found" });
  }

  // Check if the article is already in the requested state
  if (isArticleActive === articleOfDB.isArticleActive) {
    return res
      .status(200)
      .json({ message: "Article is already in the same state" });
  }

  // Update the active status and save
  articleOfDB.isArticleActive = isArticleActive;
  await articleOfDB.save();

  res
    .status(200)
    .json({ message: "Article status updated", payload: articleOfDB });
});