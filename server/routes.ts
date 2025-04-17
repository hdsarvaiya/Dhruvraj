import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(data);
      res.status(201).json({
        message: "Inquiry received successfully",
        inquiry: {
          id: inquiry.id,
          name: inquiry.name,
          email: inquiry.email,
          service: inquiry.service,
        },
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation failed",
          errors: validationError.message,
        });
      } else {
        console.error("Error creating contact inquiry:", error);
        res.status(500).json({
          message: "Error processing your request",
        });
      }
    }
  });

  // Get all inquiries (for admin purposes)
  app.get("/api/admin/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.status(200).json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({
        message: "Error fetching inquiries",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
