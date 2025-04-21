import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for fonts and custom classes
const style = document.createElement("style");
style.textContent = `
  :root {
    --primary: 0 0% 0%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 0 0% 20%;
    --secondary-foreground: 0 0% 100%;
    
    --accent: 0 0% 40%;
    --accent-foreground: 0 0% 100%;
    
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;
    
    --card: 0 0% 95%;
    --card-foreground: 0 0% 0%;
    
    --popover: 0 0% 95%;
    --popover-foreground: 0 0% 0%;
    
    --muted: 0 0% 90%;
    --muted-foreground: 0 0% 40%;
    
    --border: 0 0% 80%;
    --input: 0 0% 80%;
    
    --ring: 0 0% 0%;
    
    --radius: 0.5rem;
    
    --chart-1: 0 0% 0%;
    --chart-2: 0 0% 20%;
    --chart-3: 0 0% 40%;
    --chart-4: 0 0% 60%;
    --chart-5: 0 0% 80%;
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
