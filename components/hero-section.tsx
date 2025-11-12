"use client"

import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-accent/10 mb-8">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-accent">Advanced AI/ML Technology</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Detection of Face Swap
          </span>
          <br />
          <span className="text-foreground">Based on Deepfake Videos</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Harness the power of cutting-edge AI and machine learning to detect and identify face swaps in deepfake videos
          with unprecedented accuracy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group">
            <Play className="w-5 h-5 mr-2" />
            Try Demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent/50 text-accent hover:bg-accent/10 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <div className="p-4 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm hover:border-accent/60 transition">
            <div className="text-2xl font-bold text-accent mb-2">99.2%</div>
            <p className="text-sm text-muted-foreground">Detection Accuracy</p>
          </div>
          <div className="p-4 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm hover:border-accent/60 transition">
            <div className="text-2xl font-bold text-accent mb-2">Real-time</div>
            <p className="text-sm text-muted-foreground">Processing Speed</p>
          </div>
          <div className="p-4 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm hover:border-accent/60 transition">
            <div className="text-2xl font-bold text-accent mb-2">Multi-Model</div>
            <p className="text-sm text-muted-foreground">AI Ensemble</p>
          </div>
        </div>
      </div>
    </section>
  )
}
