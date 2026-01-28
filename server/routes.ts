import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(404).json({ message: "Post not found" });
    }
    const post = await storage.getPost(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  });

  app.post(api.posts.create.path, async (req, res) => {
    const input = api.posts.create.input.parse(req.body);
    const post = await storage.createPost(input);
    res.status(201).json(post);
  });

  // Seed data if empty
  const existingPosts = await storage.getPosts();
  if (existingPosts.length === 0) {
    await storage.createPost({
      title: "Welcome to the Blog",
      excerpt: "A brief introduction to what this blog is about.",
      content: "This is the full content of the first blog post. We are exploring the features of this new blog application built with React and Express. It features a clean design and fast navigation."
    });
    await storage.createPost({
      title: "Exploring React Server Components",
      excerpt: "Understanding the future of React development.",
      content: "React Server Components are a new feature that allows you to write components that run on the server. This can lead to smaller bundle sizes and faster load times. In this post, we dive deep into how they work."
    });
    await storage.createPost({
      title: "The Joy of TypeScript",
      excerpt: "Why strict typing makes us happier developers.",
      content: "TypeScript adds static typing to JavaScript, which helps catch errors early and improves developer experience through better tooling and autocompletion. Once you go typed, you never go back."
    });
    await storage.createPost({
      title: "Minimalist Design Principles",
      excerpt: "Less is more when it comes to UI design.",
      content: "Minimalist design focuses on the essential elements of a user interface. By removing unnecessary clutter, we can create experiences that are easier to use and more aesthetically pleasing. White space is your friend."
    });
  }

  return httpServer;
}
