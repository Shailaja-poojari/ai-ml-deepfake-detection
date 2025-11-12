"use client"

import { Upload, Cog, CheckCircle, Download, ArrowRight } from "lucide-react"

export default function WorkflowSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Video",
      description: "Submit your video file for analysis",
    },
    {
      icon: Cog,
      title: "Process",
      description: "Extract frames and preprocess data",
    },
    {
      icon: CheckCircle,
      title: "Predict",
      description: "Run AI models for detection",
    },
    {
      icon: Download,
      title: "Output",
      description: "Get detailed analysis report",
    },
  ]

  return (
    <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Processing <span className="neon-text">Workflow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined pipeline processes videos efficiently from upload to analysis.
          </p>
        </div>

        {/* Desktop Workflow */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex items-center flex-1">
                  {/* Step Card */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 shadow-lg shadow-accent/30">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-center mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 flex justify-center px-4">
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent" />
                        <ArrowRight className="w-5 h-5 text-accent" />
                        <div className="h-1 w-12 bg-gradient-to-l from-accent to-transparent" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Workflow */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center mb-4">
                    <ArrowRight className="w-5 h-5 text-accent rotate-90" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Workflow Details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm">
            <h4 className="font-bold mb-4 text-accent">Input Specifications</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Supported formats: MP4, AVI, MOV, MKV</li>
              <li>• Maximum file size: 500MB</li>
              <li>• Minimum resolution: 480p</li>
              <li>• Frame rate: 24-60 FPS</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm">
            <h4 className="font-bold mb-4 text-accent">Output Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Detection confidence score</li>
              <li>• Frame-by-frame analysis</li>
              <li>• Anomaly heatmaps</li>
              <li>• Detailed forensic report</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
