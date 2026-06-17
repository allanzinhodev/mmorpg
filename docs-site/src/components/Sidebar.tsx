import type { NavSection } from '../data/content'

interface SidebarProps {
  navigation: NavSection[]
  activePage: string
  onNavigate: (pageId: string) => void
  isOpen: boolean
  searchQuery: string
  onSearchChange: (q: string) => void
}

export function Sidebar({ navigation, activePage, onNavigate, isOpen, searchQuery, onSearchChange }: SidebarProps) {
  const filteredNav = navigation
    .map(section => ({
      ...section,
      items: section.items.filter(item =>
        !searchQuery || item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(section => section.items.length > 0)

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">⚔️</div>
          <div className="sidebar-logo-text">
            <div className="sidebar-logo-title">Nova MMO</div>
            <div className="sidebar-logo-subtitle">Engineering Docs</div>
          </div>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-wrapper">
          <span className="sidebar-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar documentação..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <nav className="sidebar-nav">
        {filteredNav.map((section) => (
          <div className="sidebar-section" key={section.title}>
            <div className="sidebar-section-title">{section.title}</div>
            {section.items.map((item) => (
              <button
                key={item.id}
                className={`sidebar-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span className="sidebar-link-icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`sidebar-link-badge ${item.badgeClass || ''}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border-color)', fontSize: 11, color: 'var(--text-muted)' }}>
        <div>v0.1.0 — Fase 1: Foundation</div>
        <div style={{ marginTop: 4, opacity: 0.6 }}>Baseado em forgottenserver + otcv8</div>
      </div>
    </aside>
  )
}
