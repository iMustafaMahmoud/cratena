import React from "react";
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
        <div className="logo" />
      </motion.div>
      <div className="footer">
        <p>
          <code>
            developed by{" "}
            <a
              href="http://www.moaty.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moaty
            </a>
          </code>
        </p>
      </div>
    </div>
  );
}

export default App;
