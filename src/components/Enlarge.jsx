import React from "react";
import { motion } from "framer-motion";

export const Enlarge = ({ children, scale }) => {

  return (
    <motion.div
      whileHover={{ 
        scale: scale
      }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
      // whileTap={{ 
      //   scale: 0.8
      // }}
      >
      
      {children}
    </motion.div>
  )
}