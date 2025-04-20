import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactFormSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString(),
      });
      
      // Save the form data
      const savedForm = await storage.saveContactForm(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Your message has been sent successfully!",
        data: savedForm
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while submitting your message. Please try again later."
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
