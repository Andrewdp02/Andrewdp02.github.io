"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"

interface PDFViewerProps {
  pdfUrl: string
  className?: string
}

export function PDFViewer({ pdfUrl, className }: PDFViewerProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="mb-4 flex justify-end w-full">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="bg-gradient-to-r from-blue-50 to-sky-50 border-blue-300 text-blue-700 hover:from-blue-100 hover:to-sky-100 shadow-sm"
        >
          <a href={pdfUrl} download aria-label="Download resume">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>

      <div className="w-full rounded-lg border-2 border-blue-200 shadow-lg overflow-hidden bg-white">
        <iframe
          src={`${pdfUrl}#view=FitH`}
          className="w-full h-[600px] md:h-[800px]"
          title="Resume PDF"
          allowFullScreen
        />
      </div>
    </div>
  )
}
