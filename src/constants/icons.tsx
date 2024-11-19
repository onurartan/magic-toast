import React from "react";
import { motion } from "framer-motion";
import { FadeLoader } from "react-spinners";

export const Icons = {
  Success: () => {
    return (
      <motion.div
        className="min-w-5 min-h-5 rounded-full bg-green-500 flex items-center justify-center"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1] }}
        transition={{
          repeat: 1,
          repeatType: "reverse",
          duration: 1,
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M17.5003 5.83333L7.50033 15.8333L2.91699 11.25L4.09199 10.075L7.50033 13.475L16.3253 4.65833L17.5003 5.83333Z"
            stroke="white"
            strokeWidth="1"
            fill="white"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    );
  },

  Error: () => {
    return (
      <motion.div
        className="min-w-5 min-h-5 rounded-full bg-red-500 flex items-center justify-center"
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, -15, 15, -15, 15, 0],
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.svg
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            repeat: 1,
            repeatType: "reverse",
            duration: 1,
          }}
        >
          <path
            d="M5.33366 15.8333L4.16699 14.6666L8.83366 9.99996L4.16699 5.33329L5.33366 4.16663L10.0003 8.83329L14.667 4.16663L15.8337 5.33329L11.167 9.99996L15.8337 14.6666L14.667 15.8333L10.0003 11.1666L5.33366 15.8333Z"
            fill="white"
          />
        </motion.svg>
      </motion.div>
    );
  },

  Info: () => {
    return (
      <motion.div
        className="min-w-5 min-h-5 rounded-full bg-blue-500 flex items-center justify-center"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.95, 1] }}
        transition={{
          repeat: 1,
          repeatType: "reverse",
          duration: 1,
        }}
      >
        <motion.svg
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeat: 4,
            repeatType: "reverse",
          }}
        >
          <path
            d="M8.68997 4.73066C8.68997 5.4003 9.22569 5.93602 9.89533 5.93602C10.5732 5.93602 11.1007 5.4003 11.0925 4.73066C11.0925 4.0528 10.5732 3.51709 9.89533 3.51709C9.22569 3.51709 8.68997 4.0528 8.68997 4.73066ZM6.61426 15.7967C6.61426 16.2067 6.90712 16.4828 7.35069 16.4828H12.6493C13.0928 16.4828 13.386 16.2067 13.386 15.7964C13.386 15.3949 13.0932 15.1185 12.6493 15.1185H10.9668V8.73173C10.9668 8.27995 10.6739 7.97816 10.2385 7.97816H7.58497C7.14997 7.97816 6.85676 8.24602 6.85676 8.64816C6.85676 9.06673 7.14961 9.3428 7.58533 9.3428H9.41819V15.1185H7.35069C6.90712 15.1185 6.61426 15.3949 6.61426 15.7967Z"
            fill="white"
          />
        </motion.svg>
      </motion.div>
    );
  },

  Loading: () => {
    return (
      <motion.div
        className="w-6 h-6 relative flex items-center  justify-center  rounded-lg py-1 px-2"
        // initial={{ scale: 1 }}
        // animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1] }}
        // transition={{
        //   repeat: 1,
        //   repeatType: "reverse",
        //   duration: 1,
        // }}
      >
        <FadeLoader
          color="gray"
          width={2.4}
          height={5.3}
          radius={255}
          margin={-11}
          className=""
          style={{
            position: "relative",
            top: "8.3px",
            left: "10px",
          }}
        />
      </motion.div>
    );
  },
};
