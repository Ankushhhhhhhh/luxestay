import express from "express";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Supabase client initialization (lazy)
  let supabase: any = null;
  const getSupabase = () => {
    if (!supabase) {
      const url = process.env.SUPABASE_URL;
      const key = process.env.SUPABASE_ANON_KEY;
      if (!url || !key) {
        return null;
      }
      supabase = createClient(url, key);
    }
    return supabase;
  };

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    const isSupabaseConfigured = !!(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY);
    res.json({ 
      status: "ok", 
      supabase: isSupabaseConfigured ? "configured" : "missing_keys" 
    });
  });

  // Example Supabase endpoint
  app.get("/api/listings", async (req, res) => {
    try {
      const client = getSupabase();
      if (!client) {
        throw new Error("Supabase is not configured. Add SUPABASE_URL and SUPABASE_ANON_KEY to Secrets.");
      }
      // Assuming there is a 'listings' table in Supabase
      const { data, error } = await client.from("listings").select("*");
      if (error) throw error;
      res.json(data);
    } catch (error: any) {
      console.error("Supabase error:", error.message);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
