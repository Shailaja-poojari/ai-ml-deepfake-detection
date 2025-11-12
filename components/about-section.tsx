"use client"

import { Users, Target, BookOpen, Lightbulb } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About the <span className="neon-text">Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive solution for detecting and analyzing deepfake videos using advanced AI/ML techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Problem Statement */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Problem Statement</h3>
                <p className="text-muted-foreground">
                  Deepfake technology poses significant threats to media authenticity and public trust. Traditional
                  detection methods struggle with sophisticated face-swapping techniques. Our project addresses this
                  critical challenge by developing an intelligent system capable of identifying manipulated videos with
                  high precision.
                </p>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Objectives</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Achieve 99%+ accuracy in deepfake detection</li>
                  <li>• Enable real-time video analysis</li>
                  <li>• Support multiple video formats and resolutions</li>
                  <li>• Provide detailed forensic analysis reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Team */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Team</h3>
                <p className="text-muted-foreground mb-4">
                  Our multidisciplinary team comprises experts in computer vision, deep learning, and cybersecurity.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">Lead Researcher:</span> Dr. AI Expert
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">ML Engineers:</span> 3 specialists
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Advisors:</span> Industry veterans
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guide/Mentor */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Project Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Guided by leading researchers in digital forensics and AI security.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">Primary Guide:</span> Prof. Research Lead
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Co-Guide:</span> Dr. Tech Specialist
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Institution:</span> Tech University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
