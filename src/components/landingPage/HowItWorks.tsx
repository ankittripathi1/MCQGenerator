import { motion } from "framer-motion";
import { Brain, CheckCircle, Upload } from "lucide-react";

export default function HowItWorksSection() {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto">
          Simple three step process to convert your content into engaging
          quizzes
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
            <Upload className="w-8 h-8 text-[#3aee7c]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Upload Content</h3>
          <p className="text-[#A3A3A3]">
            Upload your video of Pdf Files. We Support Various Formats for
            maximum flexibility
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center glass glash-hover rounded-xl p-8"
        >
          <div className="w-16 h-16 bg-[#3aee7c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-[#3aee7c]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
          <p className="text-[#A3A3A3]">
            Our AI analyzes your content and generates a relevent
            multiple-choice questions automatically for you.
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
          <h3 className="text-xl font-semibold mb-2">Take Quiz</h3>
          <p className="text-[#A3A3A3]">
            Take the generated Quiz and get instant feedback on your performance
            and understanding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
