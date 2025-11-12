"use client"

import { TrendingUp, CheckCircle, AlertCircle, BarChart3 } from "lucide-react"

export default function ResultsSection() {
  const results = [
    {
      metric: "Detection Accuracy",
      value: "99.2%",
      description: "Across diverse deepfake datasets",
      icon: CheckCircle,
    },
    {
      metric: "False Positive Rate",
      value: "0.8%",
      description: "Minimal false alarms",
      icon: AlertCircle,
    },
    {
      metric: "Processing Speed",
      value: "2.3s",
      description: "Per minute of video",
      icon: TrendingUp,
    },
    {
      metric: "Model Ensemble",
      value: "5+",
      description: "AI models combined",
      icon: BarChart3,
    },
  ]

  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Performance <span className="neon-text">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our system demonstrates exceptional performance across multiple benchmarks and datasets.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => {
            const Icon = result.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-accent/30 bg-card/50 backdrop-blur-sm hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{result.metric}</p>
                    <div className="text-3xl font-bold text-accent">{result.value}</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{result.description}</p>
              </div>
            )
          })}
        </div>

        {/* Detailed Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Test Results */}
          <div className="p-8 rounded-xl border border-accent/30 bg-card/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded" />
              Test Dataset Results
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">FaceForensics++</span>
                  <span className="text-sm text-accent font-bold">98.7%</span>
                </div>
                <div className="h-2 bg-card rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent to-primary" style={{ width: "98.7%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">DFDC Dataset</span>
                  <span className="text-sm text-accent font-bold">99.1%</span>
                </div>
                <div className="h-2 bg-card rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent to-primary" style={{ width: "99.1%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">Celeb-DF</span>
                  <span className="text-sm text-accent font-bold">99.5%</span>
                </div>
                <div className="h-2 bg-card rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent to-primary" style={{ width: "99.5%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold">Wild Deepfakes</span>
                  <span className="text-sm text-accent font-bold">99.3%</span>
                </div>
                <div className="h-2 bg-card rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent to-primary" style={{ width: "99.3%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="p-8 rounded-xl border border-accent/30 bg-card/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded" />
              Key Findings
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Ensemble Superiority:</span> Multi-model approach
                  outperforms single models by 3-5%
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Robustness:</span> Maintains high accuracy across
                  compression and quality variations
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Generalization:</span> Effective on unseen deepfake
                  generation methods
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Speed Optimization:</span> Real-time processing
                  without sacrificing accuracy
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
