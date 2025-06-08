import { motion } from "framer-motion";
import { FileText, Video } from "lucide-react";

export default function SupportedFormates() {
  return (
    <section id="features" className="container px-4 py-20 relative bg-black">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Supported Formats
        </h2>
        <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto">
          We Support wide range of formats to make learning accessible
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex glass glass-hover items-center justify-center p-6 rounded-xl space-x-4"
        >
          <div className=" w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">PDF Docuements</h1>
            <p className="text-sm text-[#a3a3a3]">
              Upload your pdf file and convert them into interactive quizzes
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex glass glass-hover items-center justify-center p-6 rounded-xl space-x-4"
        >
          <div className=" w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
            <Video className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Vidoe Files</h1>
            <p className="text-sm text-[#a3a3a3]">
              Upload video and generate questions from the transcript
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
