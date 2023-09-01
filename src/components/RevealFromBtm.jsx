import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const RevealFromBtm = ({ children, delay, duration }) => {
  const ref = useRef(null);
  const isInView = useInView(ref)
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
        >
        {children}
      </motion.div>
    </div>
  )
}