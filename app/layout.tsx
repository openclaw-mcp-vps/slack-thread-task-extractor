import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slack Thread Task Extractor — Extract Action Items Automatically',
  description: 'Scans Slack threads and extracts action items, deadlines, and assignments into a clean dashboard with due date tracking. Built for engineering managers and project coordinators.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="035b09e3-a424-43f4-922f-c2399f2f6cd2"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
