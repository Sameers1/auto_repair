import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for fonts and custom classes
const style = document.createElement("style");
style.textContent = `
  :root {
    --primary: 210 52% 24%;
    --primary-foreground: 0 0% 98%;
    
    --secondary: 358 100% 71%;
    --secondary-foreground: 0 0% 98%;
    
    --accent: 122 39% 49%;
    --accent-foreground: 0 0% 98%;
    
    --background: 0 0% 96%;
    --foreground: 0 0% 20%;
    
    --card: 0 0% 100%;
    --card-foreground: 0 0% 20%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 20%;
    
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    
    --ring: 210 52% 24%;
    
    --radius: 0.5rem;
    
    --chart-1: 210 52% 24%;
    --chart-2: 358 100% 71%;
    --chart-3: 122 39% 49%;
    --chart-4: 43 100% 50%;
    --chart-5: 262 83% 58%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, button, .font-poppins {
    font-family: 'Poppins', sans-serif;
  }
`;

document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
