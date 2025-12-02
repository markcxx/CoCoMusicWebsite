import { FC, useRef } from 'react'

import Footer from '@/components/website/Footer'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useVersionData } from '@/hooks/useVersionData'

import DownloadHero from './components/DownloadHero'
import Features from './components/Features'
import PlatformSelector from './components/PlatformSelector'
import ReleaseNotes from './components/ReleaseNotes'
import Requirements from './components/Requirements'

const DownloadPage: FC = () => {
  usePageMeta('download')
  const platformRef = useRef<HTMLDivElement>(null)

  const { loading, versionData, downloadUrls } = useVersionData()

  const scrollToAllDownloads = () => {
    platformRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <DownloadHero versionData={versionData} loading={loading} onViewAllClick={scrollToAllDownloads} />
      <Features />
      <div ref={platformRef}>
        <PlatformSelector downloadUrls={downloadUrls} loading={loading} />
      </div>
      <Requirements />
      <ReleaseNotes versionData={versionData} />
      <Footer />
    </div>
  )
}

export default DownloadPage
