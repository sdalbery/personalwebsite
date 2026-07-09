import { useState, type CSSProperties } from 'react'
import './App.css'

function App() {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null)

  const cardPhoto = (url: string): CSSProperties =>
    ({
      '--card-photo': `url("${url}")`,
    }) as CSSProperties

  const getCardProps = (id: string) => ({
    className: `card ${expandedCardId === id ? 'card-expanded' : ''}`,
    onClick: () => {
      setExpandedCardId((currentId) => (currentId === id ? null : id))
    },
  })

  return (
    <main className="site">
      <section className="hero">
        <p className="eyebrow">Personal Brand Site</p>
        <h1>Scot Dalbery</h1>
        <p className="intro">
          Sales engineer, team leader, and culture builder focused on driving measurable business
          outcomes while strengthening cross-functional collaboration.
        </p>
        <div className="hero-actions">
          <a href="https://salesforce.enterprise.slack.com/team/U098P4AH11S" target="_blank" rel="noreferrer">
            Slack Me
          </a>
          <a href="https://www.linkedin.com/in/scot-dalbery/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Impact at a Glance</h2>
        <div className="metrics" onMouseLeave={() => setExpandedCardId(null)}>
          <article {...getCardProps('impact-q1')} style={cardPhoto('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80')}>
            <h3>Top SE - Q1</h3>
            <p>Recognized as the top sales engineer on my team in Q1.</p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
              alt="Team celebrating a milestone"
              loading="lazy"
            />
          </article>
          <article {...getCardProps('impact-acv')} style={cardPhoto('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80')}>
            <h3>$400K+ ACV</h3>
            <p>Drove over $400K in ACV through strategic technical partnership and execution.</p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80"
              alt="Business dashboard and growth metrics"
              loading="lazy"
            />
          </article>
          <article {...getCardProps('impact-mvp')} style={cardPhoto('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80')}>
            <h3>SB MVP (Americas)</h3>
            <p>
              Named one of the MVPs for SB across all of America by Samiran Dwivedi, SVP of SMB
              Solution Engineering.
            </p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Team collaboration in a strategy meeting"
              loading="lazy"
            />
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Leadership and Community</h2>
        <div className="accomplishments" onMouseLeave={() => setExpandedCardId(null)}>
          <article {...getCardProps('leadership-maciaforce')} style={cardPhoto('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80')}>
            <h3>Maciaforce Team Lead</h3>
            <p>
              Leading Maciaforce with a focus on coaching, consistency, and strong customer-facing
              execution.
            </p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Team lead guiding a group session"
              loading="lazy"
            />
          </article>
          <article {...getCardProps('leadership-blackbelt')} style={cardPhoto('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80')}>
            <h3>Slack Blackbelt</h3>
            <p>
              Brings deep Slack product expertise to customer engagements and internal enablement.
            </p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
              alt="Modern workspace with messaging collaboration tools"
              loading="lazy"
            />
          </article>
          <article {...getCardProps('leadership-culture')} style={cardPhoto('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80')}>
            <h3>SMB Solutions Culture Committee President</h3>
            <p>
              Serving as president to strengthen team culture, connection, and shared momentum
              across SMB Solutions.
            </p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="People networking at a company culture event"
              loading="lazy"
            />
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Education and VidMob Career Highlights</h2>
        <div className="accomplishments" onMouseLeave={() => setExpandedCardId(null)}>
          <article {...getCardProps('journey-tisch')} style={cardPhoto('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=900&q=80')}>
            <h3>NYU Tisch School of the Arts</h3>
            <p>Studied Theatre, building a foundation in storytelling and communication.</p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=900&q=80"
              alt="Theater stage lighting and performance venue"
              loading="lazy"
            />
          </article>
          <article {...getCardProps('journey-stern')} style={cardPhoto('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80')}>
            <h3>NYU Stern School of Business</h3>
            <p>Completed a Tech MBA focused on business strategy and technology leadership.</p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
              alt="Business school lecture and discussion setting"
              loading="lazy"
            />
          </article>
          <article {...getCardProps('journey-client-success')} style={cardPhoto('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80')}>
            <h3>Client Success Manager</h3>
            <p>Managed the LinkedIn account and helped drive strong client outcomes.</p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
              alt="Client success check-in with account dashboard"
              loading="lazy"
            />
          </article>
          <article {...getCardProps('journey-creative-strategist')} style={cardPhoto('https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=900&q=80')}>
            <h3>Creative Strategist</h3>
            <p>Worked on the Coca-Cola account, shaping campaigns and creative direction.</p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=900&q=80"
              alt="Creative brainstorming board with campaign concepts"
              loading="lazy"
            />
          </article>
          <article {...getCardProps('journey-manager')} style={cardPhoto('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80')}>
            <h3>Manager, Creative Strategy</h3>
            <p>Led a team of creative strategists and elevated execution quality across accounts.</p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
              alt="Creative strategy team meeting in an office"
              loading="lazy"
            />
          </article>
          <article {...getCardProps('journey-solutions-engineer')} style={cardPhoto('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80')}>
            <h3>Solutions Engineer</h3>
            <p>
              Sold over $4M in revenue for enterprise brands including Unilever, Bloomberg, and
              Verizon.
            </p>
            <img
              className="card-photo"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
              alt="Revenue performance chart on a laptop screen"
              loading="lazy"
            />
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>Open to collaboration across sales, solutions, and strategic initiatives.</p>
      </footer>
    </main>
  )
}

export default App
