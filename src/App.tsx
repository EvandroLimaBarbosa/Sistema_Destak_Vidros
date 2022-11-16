import {
  BrowserRouter,
} from "react-router-dom";
import Header from "./Layout/Header";
import { AppRoutes } from "./routes";
import "./styles/main.css";

export default function App() {
  return (
    // Layout
    <BrowserRouter>
    
      <Header />
      <AppRoutes/>
    
    </BrowserRouter>
  );
}
