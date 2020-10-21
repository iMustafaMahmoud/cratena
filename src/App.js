import React from "react";
import logo from "./assets/cratena-logo.png";
import { motion } from "framer-motion";
import "./App.css";

const bounceTransition = {
  y: {
    duration: 2,
    yoyo: Infinity,
    ease: "easeInOut",
  },
};
function App() {
  return (
    <div className="container">
      <motion.div animate={{ y: -100 }} transition={bounceTransition}>
        <img src={logo} className="App-logo" alt="logo" />
      </motion.div>
      <div className="footer">
        <p>
          <code>
            developed by <a href="http://moaty.me">Moaty</a>
          </code>
        </p>
      </div>
    </div>
  );
}

export default App;
