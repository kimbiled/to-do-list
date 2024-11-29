import { motion } from "framer-motion";

const Alert = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-xl font-bold hover:text-gray-300"
        >
          ×
        </button>
      </div>
    </motion.div>
  );
};

export default Alert;
