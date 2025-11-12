"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
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

interface VideoUploadProps {
  onVideoUpload: (video: UploadedVideo) => void
}

export default function VideoUpload({ onVideoUpload }: VideoUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const processVideo = (file: File) => {
    setIsAnalyzing(true)

    // Simulate video analysis with frame extraction
    setTimeout(() => {
      const totalFrames = Math.floor(Math.random() * 150) + 100 // 100-250 frames
      const isFake = Math.random() > 0.5
      const confidence = Math.floor(Math.random() * 20) + 80 // 80-100% confidence

      // Calculate real and fake frames based on detection result
      let realFrames: number
      let fakeFrames: number

      if (isFake) {
        // If detected as fake, more fake frames
        fakeFrames = Math.floor(totalFrames * (confidence / 100))
        realFrames = totalFrames - fakeFrames
      } else {
        // If detected as real, more real frames
        realFrames = Math.floor(totalFrames * (confidence / 100))
        fakeFrames = totalFrames - realFrames
      }

      const newVideo: UploadedVideo = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        uploadedAt: new Date().toLocaleString(),
        accuracy: confidence,
        isFake: isFake,
        analysis: {
          totalFrames,
          realFrames,
          fakeFrames,
          confidence,
          isFake,
        },
      }
      onVideoUpload(newVideo)
      setIsAnalyzing(false)
    }, 2000)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith("video/")) {
        processVideo(file)
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files && files.length > 0) {
      processVideo(files[0])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Video</CardTitle>
        <CardDescription>Upload a video file to analyze for deepfakes</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            isDragging ? "border-primary bg-primary/5" : "border-border"
          }`}
        >
          <div className="space-y-4">
            <div className="text-4xl">📹</div>
            <div>
              <p className="font-semibold text-foreground">Drag and drop your video here</p>
              <p className="text-sm text-muted-foreground">or click to select a file</p>
            </div>
            <label>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                disabled={isAnalyzing}
                className="hidden"
              />
              <Button asChild disabled={isAnalyzing} className="cursor-pointer">
                <span>{isAnalyzing ? "Analyzing..." : "Select Video"}</span>
              </Button>
            </label>
            <p className="text-xs text-muted-foreground">Supported formats: MP4, WebM, MOV</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
