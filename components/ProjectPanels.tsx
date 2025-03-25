import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Project {
  title: string;
  description: string[];
}

const projects: Project[] = [
  {
    title: "CausalVision",
    description: [
      "Advancing semantic segmentation through causal inference and knowledge graphs to improve interpretability and robustness in image understanding.",
      "Moving beyond correlation to model object interactions and contextual dependencies."
    ]
  },
  {
    title: "NLP",
    description: [
      "Developing uncertainty-aware dialogue systems using probabilistic modeling and knowledge graphs.",
      "Enables adaptive, context-sensitive conversations that reconcile ambiguity with user-specific needs."
    ]
  },
  {
    title: "Propose Research",
    description: [
      "Inspired by a different direction in AI perception?",
      "Share your vision and lead your own project with the support of our lab's resources and mentorship."
    ]
  }
];

const ProjectPanels: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <div ref={containerRef} className="min-h-screen relative py-20">
      <motion.div 
        className="sticky top-0 h-screen flex items-center"
        style={{ opacity, x }}
      >
        <div className="container mx-auto px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg p-8 mb-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              {project.description.map((desc, i) => (
                <p key={i} className="mb-2">{desc}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPanels; 