"use client"

import { useState } from "react"
import ProtectedRoute from "@/components/protected-route"
import DashboardHeader from "@/components/dashboard-header"
import VideoUpload from "@/components/video-upload"
import AnalysisResults from "@/components/analysis-results"
import { useAuth } from "@/hooks/use-auth"

interface UploadedVideo {
  id: string
  name: string
  uploadedAt: string
  accuracy: number
  isFake: boolean
}

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const [videos, setVideos] = useState<UploadedVideo[]>([])

  const handleVideoUpload = (video: UploadedVideo) => {
    setVideos((prev) => [video, ...prev])
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
        <DashboardHeader userName={user?.name || user?.email || "User"} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Section */}
            <div className="lg:col-span-1">
              <VideoUpload onVideoUpload={handleVideoUpload} />
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2">
              <AnalysisResults videos={videos} />
            </div>
          </div>

          {/* Stats Section */}
          {videos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">Total Videos Analyzed</p>
                <p className="text-3xl font-bold text-primary">{videos.length}</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">Deepfakes Detected</p>
                <p className="text-3xl font-bold text-destructive">{videos.filter((v) => v.isFake).length}</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">Authentic Videos</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {videos.filter((v) => !v.isFake).length}
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  )
}
