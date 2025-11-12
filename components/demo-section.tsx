"use client"

import { Play, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Try the <span className="neon-text">Demo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload a video to see our deepfake detection system in action.
          </p>
        </div>

        {/* Demo Container */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-xl border-2 border-dashed border-accent/50 bg-card/50 backdrop-blur-sm p-12 hover:border-accent/80 transition-colors">
            {/* Gradio Placeholder */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Upload className="w-10 h-10 text-white" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Upload Your Video</h3>
                <p className="text-muted-foreground mb-6">Drag and drop your video file or click to browse</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Upload className="w-5 h-5 mr-2" />
                  Choose File
                </Button>
                <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 bg-transparent">
                  <Play className="w-5 h-5 mr-2" />
                  View Sample
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">Supported formats: MP4, AVI, MOV, MKV (Max 500MB)</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent animate-pulse" />
            <div
              className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-accent animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="p-4 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm text-center">
              <div className="text-2xl font-bold text-accent mb-2">Real-time</div>
              <p className="text-sm text-muted-foreground">Instant analysis results</p>
            </div>
            <div className="p-4 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm text-center">
              <div className="text-2xl font-bold text-accent mb-2">Secure</div>
              <p className="text-sm text-muted-foreground">Your data is private</p>
            </div>
            <div className="p-4 rounded-lg border border-accent/30 bg-card/50 backdrop-blur-sm text-center">
              <div className="text-2xl font-bold text-accent mb-2">Accurate</div>
              <p className="text-sm text-muted-foreground">99.2% detection rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
