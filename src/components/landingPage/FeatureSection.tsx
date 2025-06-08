import { motion } from "framer-motion";
import { Brain, CheckCircle, FileText } from "lucide-react";
export default function FeatureSection() {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
        <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto">
          Explore the Features that makes learning more effective and engaging
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center glass glash-hover rounded-xl p-8"
        >
          <div className="w-16 h-16 bg-[#3aee7c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-[#3aee7c]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI-Powered Generation</h3>
          <p className="text-[#A3A3A3]">
            Automatically generate multiple choice questions from your content
            using Advance AI.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center glass glash-hover rounded-xl p-8"
        >
          <div className="w-16 h-16 bg-[#3aee7c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-[#3aee7c]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Multiple File Formats</h3>
          <p className="text-[#A3A3A3]">
            Upload content in various formats, including PDF and Video files,
            for flexible quiz creation
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center glass glash-hover rounded-xl p-8"
        >
          <div className="w-16 h-16 bg-[#3aee7c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[#3aee7c]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Instance Feedback</h3>
          <p className="text-[#A3A3A3]">
            Recieve Immediate Feedback on your quiz performance to reinforce
            learning and identify areas for improvement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
