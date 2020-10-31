import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 2,
    yoyo: Infinity,
    ease: "easeInOut",
  },
};

const ComingSoon = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Cratena - Coming Soon</title>
        <meta name="description" content="cratena shoe factory" />
      </MetaTags>
      <div className="container-coming-soon">
        <motion.div animate={{ y: -100 }} transition={bounceTransition}>
          <div className="logo-coming-soon" />
        </motion.div>
        <div className="footer-coming-soon">
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
    </Fragment>
  );
};

export default ComingSoon;
