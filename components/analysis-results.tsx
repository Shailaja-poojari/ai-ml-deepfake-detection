"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AnalysisData {
  totalFrames: number
  realFrames: number
  fakeFrames: number
  confidence: number
  isFake: boolean
}

interface UploadedVideo {
  id: string
  name: string
  uploadedAt: string
  accuracy: number
  isFake: boolean
  analysis: AnalysisData
}

interface AnalysisResultsProps {
  videos: UploadedVideo[]
}

export default function AnalysisResults({ videos }: AnalysisResultsProps) {
  if (videos.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Analysis Results</CardTitle>
          <CardDescription>Your uploaded videos and their analysis results will appear here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="text-muted-foreground">No videos uploaded yet</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analysis Results</CardTitle>
        <CardDescription>Detailed deepfake detection analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {videos.map((video) => (
            <div key={video.id} className="border border-border rounded-lg p-6 space-y-4">
              {/* Video Info */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-foreground">{video.name}</p>
                  <p className="text-sm text-muted-foreground">{video.uploadedAt}</p>
                </div>
                <div
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    video.isFake
                      ? "bg-destructive/10 text-destructive"
                      : "bg-green-500/10 text-green-600 dark:text-green-400"
                  }`}
                >
                  {video.isFake ? "FAKE" : "REAL"}
                </div>
              </div>

              {/* Confidence Score */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Confidence Score</span>
                  <span className="font-bold text-lg text-primary">{video.analysis.confidence}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${video.isFake ? "bg-destructive" : "bg-green-500"}`}
                    style={{ width: `${video.analysis.confidence}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Total Frames</p>
                  <p className="text-2xl font-bold text-foreground">{video.analysis.totalFrames}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Real Frames</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{video.analysis.realFrames}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Fake Frames</p>
                  <p className="text-2xl font-bold text-destructive">{video.analysis.fakeFrames}</p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground">Frame Distribution</p>
                <div className="flex gap-1 h-8 rounded-lg overflow-hidden bg-muted">
                  <div
                    className="bg-green-500 transition-all"
                    style={{
                      width: `${(video.analysis.realFrames / video.analysis.totalFrames) * 100}%`,
                    }}
                    title={`Real: ${video.analysis.realFrames}`}
                  ></div>
                  <div
                    className="bg-destructive transition-all"
                    style={{
                      width: `${(video.analysis.fakeFrames / video.analysis.totalFrames) * 100}%`,
                    }}
                    title={`Fake: ${video.analysis.fakeFrames}`}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Real: {((video.analysis.realFrames / video.analysis.totalFrames) * 100).toFixed(1)}%</span>
                  <span>Fake: {((video.analysis.fakeFrames / video.analysis.totalFrames) * 100).toFixed(1)}%</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border bg-muted/50 rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-2">Final Verdict</p>
                <p className="text-sm text-muted-foreground">
                  {video.isFake
                    ? `This video is classified as FAKE with ${video.analysis.confidence}% confidence. ${video.analysis.fakeFrames} out of ${video.analysis.totalFrames} frames show signs of deepfake manipulation.`
                    : `This video is classified as REAL with ${video.analysis.confidence}% confidence. ${video.analysis.realFrames} out of ${video.analysis.totalFrames} frames appear authentic.`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
