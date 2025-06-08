import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Brain, Upload } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative container px-4 pt-40 pb-20"
    >
      <div className="absolute inset-0 -z-10 bg-[#0A0A0A]"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-block mb-4 px-4 py-1.5 rounded-full glass "
      >
        <span className="text-sm font-medium">
          <Brain className="w-4 h-4 inline-block mr-2" />
          AI-Powered MCQ Generator
        </span>
      </motion.div>

      <div className="max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left leading-tight">
          <span className="text-gray-200">
            <TextGenerateEffect words="Transform your content into" />
          </span>
          <span className="text-white font-medium">
            <TextGenerateEffect words="interactive MCQ quizes" />
          </span>
        </h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 4 }}
        className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
      >
        Upload your video or PDF files and let our AI generate mulitple choice
        questions automatically.
        <span className="text-white">
          Perfect for education training and assesments
        </span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 items-start"
      >
        <Button
          size={"lg"}
          className="bg-gradient-to-r from-[#3aee7c] to-[#22c55e] hover:opacity-90 transition-opacity rounded-full"
          onClick={() => {
            console.log("Navigate to Upload Screen");
          }}
        >
          <Upload className=" mr-2 w-4 h-4" />
          Upload and Generate MCQ
        </Button>
        <Button
          size={"lg"}
          className="text-white"
          variant={"link"}
          onClick={() => {
            console.log("Navigate to how it works");
          }}
        >
          See How It Works
        </Button>
      </motion.div>
    </motion.section>
  );
}
