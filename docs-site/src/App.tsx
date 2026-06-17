import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { PageRenderer } from './components/PageRenderer'
import { navigation, pages } from './data/content'

export default function App() {
  const [activePage, setActivePage] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const currentPage = pages[activePage]

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-layout">
      {/* Mobile header */}
      <div className="mobile-header">
        <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '✕' : '☰'}
        </button>
        <span style={{ fontWeight: 700, fontSize: 15 }}>Nova MMO Docs</span>
        <div style={{ width: 40 }} />
      </div>

      {/* Overlay for mobile */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <Sidebar
        navigation={navigation}
        activePage={activePage}
        onNavigate={handleNavClick}
        isOpen={sidebarOpen}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main content */}
      <main className="main-content">
        <div className="content-wrapper">
          {currentPage && <PageRenderer page={currentPage} />}
        </div>
      </main>
    </div>
  )
}
