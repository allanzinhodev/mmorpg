import type { PageContent, ContentSection } from '../data/content'

interface PageRendererProps {
  page: PageContent
}

export function PageRenderer({ page }: PageRendererProps) {
  return (
    <div className="fade-in" key={page.title}>
      <header className="page-header">
        <div className="page-header-breadcrumb">
          <span>📄</span> {page.breadcrumb}
        </div>
        <h1>{page.title}</h1>
        <p className="page-header-description">{page.description}</p>
      </header>

      {page.sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </div>
  )
}

function SectionRenderer({ section }: { section: ContentSection }) {
  switch (section.type) {
    case 'heading':
      return (
        <div className="section">
          <h2>
            <span className="section-icon">{section.data.icon}</span>
            {section.data.text}
          </h2>
        </div>
      )

    case 'text':
      return (
        <div className="section">
          <p>{section.data}</p>
        </div>
      )

    case 'code':
      return (
        <div className="section">
          <div className="code-block">
            <div className="code-block-header">
              <span className="code-block-lang">{section.data.lang}</span>
              <span className="code-block-file">{section.data.file}</span>
            </div>
            <pre><code>{section.data.code}</code></pre>
          </div>
        </div>
      )

    case 'table':
      return (
        <div className="section">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  {section.data.headers.map((h: string, i: number) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.data.rows.map((row: string[], i: number) => (
                  <tr key={i}>
                    {row.map((cell: string, j: number) => (
                      <td key={j}>
                        {j === 0 ? <code>{cell}</code> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'cards':
      return (
        <div className="section">
          <div className="cards-grid">
            {section.data.map((card: any, i: number) => (
              <div className="card" key={i}>
                <div className="card-header">
                  <div className={`card-icon ${card.iconClass}`}>{card.icon}</div>
                  <div>
                    <div className="card-title">{card.title}</div>
                    <div className="card-subtitle">{card.subtitle}</div>
                  </div>
                </div>
                <div className="card-body">{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      )

    case 'diagram':
      return (
        <div className="section">
          <div className="diagram-box">
            {section.data.map((item: any, i: number) => (
              <div key={i} style={{ display: 'contents' }}>
                {i > 0 && <div className="diagram-arrow">↕</div>}
                <div className={`diagram-layer ${item.layer}`}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      )

    case 'callout':
      return (
        <div className="section">
          <div className={`callout callout-${section.data.type}`}>
            <div className="callout-title">{section.data.title}</div>
            <div>{section.data.text}</div>
          </div>
        </div>
      )

    case 'stats':
      return (
        <div className="section">
          <div className="stats-grid">
            {section.data.map((stat: any, i: number) => (
              <div className="stat-card" key={i}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )

    case 'phases':
      return (
        <div className="section">
          <div className="phase-tracker">
            {section.data.map((phase: any, i: number) => (
              <div
                className={`phase-item ${phase.status}`}
                key={i}
              >
                <div className="phase-line">
                  <div className="phase-dot">
                    {phase.status === 'done' ? '✓' : phase.number}
                  </div>
                  {i < section.data.length - 1 && <div className="phase-connector" />}
                </div>
                <div className="phase-content">
                  <div className="phase-title">
                    Fase {phase.number}: {phase.title}
                  </div>
                  <div className="phase-description">{phase.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )

    default:
      return null
  }
}
