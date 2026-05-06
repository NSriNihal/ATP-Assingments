/**
 * User API Router — Reader Operations
 * 
 * Part of: Capstone Blog Application
 * 
 * Provides routes for users (readers) to:
 *   - Read all active articles
 *   - Add comments to articles
 * 
 * All routes are protected by JWT token verification (role: USER)
 * 
 * Endpoints:
 *   GET /user-api/article  → Read all active articles
 *   PUT /user-api/article  → Add a comment to an article
 */

import exp from "express";
import { UserModel } from "../models/userModel.js";
import { ArticleSchema } from "../models/articleModel.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const userApp = exp.Router();

/**
 * GET /article — Read all active articles
 * Only returns articles where isArticleActive is true
 * Protected route: requires USER role
 */
userApp.get("/article", verifyToken("USER"), async (req, res) => {
  // Fetch only active (non-deleted) articles
  const articleList = await ArticleSchema.find({ isArticleActive: true });

  res.status(200).json({ message: "Articles", payload: articleList });
});

/**
 * PUT /article — Add a comment to an article
 * Expects: { articleId, comment } in request body
 * Protected route: requires USER role
 */
userApp.put("/article", verifyToken("USER"), async (req, res) => {
  // Extract articleId and comment from request body
  const { articleId, comment } = req.body;

  // Find the article (must be active)
  const articleDoc = await ArticleSchema.findOne({
    _id: articleId,
    isArticleActive: true,
  });

  if (!articleDoc) {
    return res.status(404).json({ message: "Article not found" });
  }

  // Get the authenticated user's ID from the decoded JWT token
  const userId = req.user?.userId;

  // Push the new comment into the article's comments array
  articleDoc.comments.push({ user: userId, comment: comment });
  await articleDoc.save();

  res.status(200).json({ message: "Comment added successfully" });
});
