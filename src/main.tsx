import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MotionConfig } from "framer-motion"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <Router>
        <Routes>
          <Route path="/*" element={<App />}/>
        </Routes>
      </Router>
    </MotionConfig>
  </React.StrictMode>
)
