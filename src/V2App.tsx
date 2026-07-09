import { useEffect, useRef, useState } from 'react'
import vidmobDiversityReportImage from './assets/vidmob-diversity-report.png'
import vidmobClosedBusinessImage from './assets/vidmob-4m-closed-business.png'
import sternCommencementPhoto from './assets/stern-commencement-photo.png'
import tsukiKawaiiCat from './assets/tsuki-kawaii-cat.png'

type Moment = {
  id: string
  title: string
  subtitle: string
  image: string
}

const salesforceHighlights: Moment[] = [
  {
    id: 'acv-driver',
    title: '#1 Driver of ACV',
    subtitle: 'Drove over $400k in ACV during Q4 2026, the highest amount of ACV on my team.',
    image: '/images/acv-driver.png',
  },
  {
    id: 'mvp',
    title: 'MVP',
    subtitle:
      'Named MVP of SB Americas by Samiran Dwivedi, SVP of SMB Solution Engineering.',
    image: '/images/mvp.png',
  },
  {
    id: 'largest-deal',
    title: '$400k+ Deal',
    subtitle:
      "Currently leading one of SB's largest opportunities: a year-long transformational evaluation for Robson Communities, solutioning products like A1E, RCA, and Agentforce.",
    image: '/images/largest-deal.png',
  },
]

const leadershipAndCulture: Moment[] = [
  {
    id: 'team-lead',
    title: 'MaciaForce Team Lead',
    subtitle: 'Oversee initiatives to increase employee satisfaction, retention, and efficiency.',
    image: '/images/team-lead.png',
  },
  {
    id: 'blackbelt',
    title: 'Slack Blackbelt',
    subtitle:
      'Lead Slack evaluations for the entire SB org, driving revenue and expansion for customers globally.',
    image: '/images/blackbelt.png',
  },
  {
    id: 'culture-president',
    title: 'SMB Culture Committee President',
    subtitle:
      'Orchestrating over 20 committee members to boost morale across SB and GRB globally.',
    image: '/images/culture-president.png',
  },
]

const colleagueQuotes = [
  {
    id: 'quote-3',
    text: `"I ADORE working with Scot. It's like having another leader co-leading my team with me, and I would be lost without him."`,
    author: 'Bianca Raker, Regional Manager',
  },
  {
    id: 'quote-4',
    text: `"Scot's poise, expertise, confidence, and ability to build rapport with the customer is so inspiring."`,
    author: 'Ava Barone, Senior SE',
  },
  {
    id: 'quote-1',
    text: `"I love Scot. He's a gem. His contributions to our forecasting calls are essential for our deals."`,
    author: 'Tessa Ameri, Sales RVP',
  },
  {
    id: 'quote-2',
    text: '"You did a fantastic job presenting to Samiran, Scot! Glad to be teaming with you."',
    author: 'Patty Hager, VP, GRB Solution Engineering',
  },
  {
    id: 'quote-5',
    text: '"I could literally cry.... Scot is basically a god in my eyes. I have never seen such beautiful custom demos, such mastered talk tracks, or such a deep wealth of knowledge. His intentional partnership, patience, and collaboration has driven literally every single win for our team. And beyond customer calls, he is always looking for new ways to enable and teach the team. He might have a theater background, but his genuine curiosity, kindness, and energy are no act. The team would be incomplete without our (not-so) secret weapon, Scot!"',
    author: 'Evyn Johnson, AE',
  },
  {
    id: 'quote-6',
    text: `"There's something that Scot does incredibly well, and I think it's missing from a lot of SEs: mirroring and reiterating objectives from the customer and validating concerns. He validates that other customers are facing similar issues, that they are not alone, and that we hear similar problems across accounts. He is not shilling our product as an immediate solution; he is validating the customer and showing that our partnership tackles those problems aligned to a longer-term vision of best-in-class customer experience."`,
    author: 'Arya Murthi, Lead Strategic SE',
  },
]

function V2App() {
  const [expandedMoment, setExpandedMoment] = useState<string | null>(null)
  const [showQuotes, setShowQuotes] = useState(false)
  const [expandedCareerId, setExpandedCareerId] = useState<string | null>(null)
  const [showTsukiBubble, setShowTsukiBubble] = useState(false)
  const quotesWrapRef = useRef<HTMLDivElement | null>(null)
  const quotesContentRef = useRef<HTMLDivElement | null>(null)
  const tsukiWrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!quotesWrapRef.current?.contains(event.target as Node)) {
        setShowQuotes(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  useEffect(() => {
    if (showQuotes && quotesContentRef.current) {
      quotesContentRef.current.scrollTop = 0
    }
  }, [showQuotes])

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!tsukiWrapRef.current?.contains(event.target as Node)) {
        setShowTsukiBubble(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  return (
    <main className="v2-page">
      <header className="v2-hero">
        <div className="v2-hero-top">
          <p className="v2-kicker">Scot Dalbery</p>
          <aside className="v2-stats-blurb" aria-label="Quick profile stats">
            <p>
              <span>Role:</span>Account SE, Small Business
            </p>
            <p>
              <span>Location:</span>San Francisco
            </p>
            <p>
              <span>Salesforce Start Date:</span>August 2025
            </p>
          </aside>
        </div>
        <h1>
          Empathetic Leader,
          <br />
          Inquisitive Storyteller,
          <br />
          Revenue-Driving Solution Engineer
        </h1>
        <p className="v2-subhead">
          I'm Scot - thanks for stopping by!
          <br />
          I'm always open for a coffee chat or a walk through Salesforce Park :)
        </p>
        <div className="v2-hero-row">
          <div className="v2-links">
            <a href="https://www.linkedin.com/in/scot-dalbery/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a
              href="https://salesforce.enterprise.slack.com/team/U098P4AH11S"
              target="_blank"
              rel="noreferrer"
            >
              Slack Me
            </a>
          </div>
          <div className="v2-hero-right">
            <div
              className="v2-quotes-wrap"
              ref={quotesWrapRef}
              onMouseLeave={() => setShowQuotes(false)}
            >
              <button
                className="v2-quotes-tile"
                onClick={() => setShowQuotes((current) => !current)}
                aria-expanded={showQuotes}
              >
                <span className="v2-quotes-title">Quotes from Colleages</span>
              </button>
              <div
                className={`v2-quotes-content ${showQuotes ? 'is-open' : ''}`}
                role="region"
                aria-label="Quotes from colleagues"
                aria-hidden={!showQuotes}
                ref={quotesContentRef}
              >
                <h3>Quotes from Colleages</h3>
                <div className="v2-quotes-list">
                  {colleagueQuotes.map((quote) => (
                    <blockquote key={quote.id}>
                      <p>{quote.text}</p>
                      <cite>{quote.author}</cite>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="v2-section">
        <h2>Sales Highlights</h2>
        <div className="v2-moments" onMouseLeave={() => setExpandedMoment(null)}>
          {salesforceHighlights.map((moment) => (
            <article
              key={moment.id}
              className={`v2-moment ${expandedMoment === moment.id ? 'is-expanded' : ''}`}
              onClick={() =>
                setExpandedMoment((current) => (current === moment.id ? null : moment.id))
              }
            >
              <img src={moment.image} alt={moment.title} loading="lazy" />
              <div className="v2-moment-copy">
                <h3>{moment.title}</h3>
                <p>{moment.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section">
        <h2>Leadership and Culture Highlights</h2>
        <div className="v2-moments" onMouseLeave={() => setExpandedMoment(null)}>
          {leadershipAndCulture.map((moment) => (
            <article
              key={moment.id}
              className={`v2-moment ${expandedMoment === moment.id ? 'is-expanded' : ''}`}
              onClick={() =>
                setExpandedMoment((current) => (current === moment.id ? null : moment.id))
              }
            >
              <img src={moment.image} alt={moment.title} loading="lazy" />
              <div className="v2-moment-copy">
                <h3>{moment.title}</h3>
                <p>{moment.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section">
        <h2>Pre-Salesforce Career Highlights</h2>
        <div className="v2-career-columns" onMouseLeave={() => setExpandedCareerId(null)}>
          <article
            className={`v2-career-card ${expandedCareerId === 'vidmob-diversity' ? 'is-expanded' : ''}`}
          >
            <button
              type="button"
              className="v2-career-image-button"
              onClick={() =>
                setExpandedCareerId((current) =>
                  current === 'vidmob-diversity' ? null : 'vidmob-diversity',
                )
              }
              aria-label="Expand VidMob Diversity Report visual"
            >
              <img
                className="v2-career-logo"
                src={vidmobDiversityReportImage}
                alt="VidMob Diversity Report visual"
                loading="lazy"
              />
            </button>
            <h3>VidMob Diversity Report</h3>
            <p>
              Collaborated with VidMob's Product team to build the Diversity Report, encouraging
              brands to feature a more diverse range of skin tones, gender identities, and ages.
              The product drove over $150,000 in revenue from customers like L'Oréal.
            </p>
          </article>

          <article
            className={`v2-career-card ${expandedCareerId === 'vidmob-4m' ? 'is-expanded' : ''}`}
          >
            <button
              type="button"
              className="v2-career-image-button"
              onClick={() =>
                setExpandedCareerId((current) => (current === 'vidmob-4m' ? null : 'vidmob-4m'))
              }
              aria-label="Expand $4M in closed business visual"
            >
              <img
                className="v2-career-logo"
                src={vidmobClosedBusinessImage}
                alt="$4M in closed business"
                loading="lazy"
              />
            </button>
            <h3>$4M in Enterprise Sales</h3>
            <p>
              Drove over $4M in revenue as a VidMob SE, closing enterprise opportunities from
              customers like Coca-Cola, Unilever, and Bloomberg.
            </p>
          </article>

          <article
            className={`v2-career-card ${expandedCareerId === 'stern' ? 'is-expanded' : ''}`}
          >
            <button
              type="button"
              className="v2-career-image-button"
              onClick={() =>
                setExpandedCareerId((current) => (current === 'stern' ? null : 'stern'))
              }
              aria-label="Expand NYU Stern commencement photo"
            >
              <img
                className="v2-career-logo"
                src={sternCommencementPhoto}
                alt="NYU Stern commencement speech"
                loading="lazy"
              />
            </button>
            <h3>Stern Commencement Speaker</h3>
            <p>
              Selected as NYU Stern's Commencement Speaker during the 2022 MBA graduation ceremony
              in Madison Square Garden.
            </p>
          </article>
        </div>
      </section>

      <div className="v2-tsuki-wrap" ref={tsukiWrapRef} onMouseLeave={() => setShowTsukiBubble(false)}>
        <button
          type="button"
          className="v2-tsuki-button"
          aria-label="Say hi to Tsuki"
          aria-expanded={showTsukiBubble}
          onClick={() => setShowTsukiBubble((current) => !current)}
        >
          <img src={tsukiKawaiiCat} alt="" aria-hidden="true" />
        </button>
        {showTsukiBubble && <div className="v2-tsuki-bubble">I'm Scot's cat, Tsuki!</div>}
      </div>
    </main>
  )
}

export default V2App
