import { createRoot } from "react-dom/client";
import "@/utils/reset.css";
import "./index.css";
import App from "./App.tsx";
import "./i18n.ts";
createRoot(document.getElementById("root")!).render(<App />);
