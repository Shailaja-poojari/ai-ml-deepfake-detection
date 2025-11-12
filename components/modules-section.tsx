"use client"

import { Brain, Eye, Zap, Shield, Database, BarChart3 } from "lucide-react"

export default function ModulesSection() {
  const modules = [
    {
      icon: Eye,
      title: "Face Detection",
      description: "Advanced facial recognition and localization using state-of-the-art CNN models.",
      color: "from-accent to-primary",
    },
    {
      icon: Brain,
      title: "Feature Extraction",
      description: "Deep learning-based feature extraction for comprehensive facial analysis.",
      color: "from-primary to-accent",
    },
    {
      icon: Zap,
      title: "Anomaly Detection",
      description: "Identifies inconsistencies and artifacts typical of deepfake videos.",
      color: "from-accent via-primary to-accent",
    },
    {
      icon: Shield,
      title: "Verification Engine",
      description: "Multi-model ensemble for robust and reliable deepfake detection.",
      color: "from-primary to-accent",
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Efficient video frame extraction and preprocessing pipeline.",
      color: "from-accent to-primary",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting and visualization of detection results.",
      color: "from-primary to-accent",
    },
  ]

  return (
    <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Implemented <span className="neon-text">Modules</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our system comprises six interconnected modules working in harmony to detect deepfakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl border border-accent/30 bg-card/50 backdrop-blur-sm hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{module.title}</h3>

                  <p className="text-sm text-muted-foreground">{module.description}</p>

                  <div className="mt-4 flex items-center text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
