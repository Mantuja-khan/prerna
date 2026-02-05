import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="relative w-20 h-20"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-8 h-8 absolute top-0 left-0 bg-primary-500 rounded-full animate-ping" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full rotate-45">
          <div className="w-6 h-6 absolute bottom-0 right-0 bg-primary-600 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </div>
  )
}

export default Loading