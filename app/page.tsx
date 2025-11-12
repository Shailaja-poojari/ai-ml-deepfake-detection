"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      setIsLoggedIn(true)
      router.push("/dashboard")
    } else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading || isLoggedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <main className="relative">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8 slide-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Detection of Face Swap Based on <span className="text-primary">Deepfake Videos</span> Using AI/ML
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced artificial intelligence and machine learning solution to detect and identify face swaps in
                deepfake videos with high accuracy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Try Demo
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">98%</div>
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <p className="text-sm text-muted-foreground">Videos Tested</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">Real-time</div>
                <p className="text-sm text-muted-foreground">Processing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-secondary/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="text-4xl">🎯</div>
                <h3 className="text-xl font-bold text-primary">High Accuracy Detection</h3>
                <p className="text-muted-foreground">
                  Our AI/ML models achieve 98% accuracy in detecting face swaps and deepfake manipulations across
                  various video formats.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="text-4xl">⚡</div>
                <h3 className="text-xl font-bold text-primary">Real-time Processing</h3>
                <p className="text-muted-foreground">
                  Analyze videos instantly with our optimized processing pipeline. Get results in seconds, not hours.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="text-4xl">🔒</div>
                <h3 className="text-xl font-bold text-primary">Secure & Private</h3>
                <p className="text-muted-foreground">
                  Your videos are processed securely with end-to-end encryption. We never store your personal content.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="text-4xl">📊</div>
                <h3 className="text-xl font-bold text-primary">Detailed Analytics</h3>
                <p className="text-muted-foreground">
                  Get comprehensive reports with confidence scores, frame-by-frame analysis, and detailed insights.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="text-4xl">🔄</div>
                <h3 className="text-xl font-bold text-primary">Batch Processing</h3>
                <p className="text-muted-foreground">
                  Upload multiple videos at once and process them efficiently with our batch analysis feature.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="text-4xl">🌐</div>
                <h3 className="text-xl font-bold text-primary">Multi-format Support</h3>
                <p className="text-muted-foreground">
                  Works with MP4, WebM, MOV, AVI, and more. Compatible with videos from any source or platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">About the Project</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Problem Statement</h3>
                  <p className="text-muted-foreground">
                    Deepfake technology has become increasingly sophisticated, making it difficult to distinguish
                    authentic videos from manipulated ones. This poses significant risks to security, privacy, and
                    misinformation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Objectives</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Develop robust AI/ML models for deepfake detection</li>
                    <li>• Achieve high accuracy in face swap identification</li>
                    <li>• Enable real-time processing of video content</li>
                    <li>• Create an accessible platform for users</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Technology Stack</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Advanced CNN and RNN architectures</li>
                    <li>• Face detection and recognition algorithms</li>
                    <li>• Optical flow analysis</li>
                    <li>• Temporal consistency checking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Getting Started</h3>
                  <p className="text-muted-foreground">
                    Sign up to access our demo, upload your video, and get instant analysis results. Our system will
                    identify potential face swaps and provide confidence scores for each detection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-secondary/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">Media & Entertainment</h3>
                <p className="text-muted-foreground">
                  Verify authenticity of video content before publication. Protect against malicious deepfakes targeting
                  celebrities and public figures.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">Law Enforcement</h3>
                <p className="text-muted-foreground">
                  Investigate potential evidence tampering and identify manipulated surveillance footage in criminal
                  cases.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">Social Media Platforms</h3>
                <p className="text-muted-foreground">
                  Automatically flag and moderate deepfake content to prevent misinformation and protect user safety.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">Corporate Security</h3>
                <p className="text-muted-foreground">
                  Verify video communications and protect against fraud, blackmail, and corporate espionage threats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Detect Deepfakes?</h2>
            <p className="text-lg opacity-90">Join thousands of users protecting themselves from deepfake content</p>
            <Link href="/signup">
              <Button size="lg" variant="secondary">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">DeepfakeDetect</h3>
              <p className="text-muted-foreground text-sm">
                Advanced AI/ML solution for detecting face swaps in deepfake videos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-primary transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition">
                    About
                  </a>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-primary transition">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Research
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 DeepfakeDetect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
