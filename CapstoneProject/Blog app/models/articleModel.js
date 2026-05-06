/**
 * Article Model — Mongoose Schema for Blog Articles
 * 
 * Part of: Capstone Blog Application
 * 
 * Defines schemas for articles and their embedded comments.
 */

import { Schema, model, Types } from "mongoose";

// Comment Sub-Schema — embedded document for article comments
const commentSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "user",
    required: [true, "User ID is required"],
  },
  comment: {
    type: String,
    required: [true, "Enter a comment"],
  },
});

// Article Schema
const articleSchema = new Schema(
  {
    author: {
      type: Types.ObjectId,
      ref: "user",
      required: [true, "Author ID is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"], // Fixed: was "Author ID is required"
    },
    comments: [{ type: commentSchema, default: [] }],
    isArticleActive: {
      type: Boolean,
      default: true, // Soft delete flag
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const ArticleSchema = model("article", articleSchema);
