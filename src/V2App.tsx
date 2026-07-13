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
    id: 'mvp',
    title: 'MVP',
    subtitle:
      'Named MVP of SB Americas by Samiran Dwivedi, SVP of SMB Solution Engineering.',
    image: '/images/mvp.png',
  },
  {
    id: 'acv-driver',
    title: '#1 Driver of ACV',
    subtitle: 'Drove over $400k in ACV during Q4 2026, the highest amount of ACV on my team.',
    image: '/images/acv-driver.png',
  },
  {
    id: 'largest-deal',
    title: '$300k+ Deal',
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
      'Developed Slack enablement series for SB, and act as a Slack specialist SE on high-ACV Slack evaluations.',
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
  const [showTsukiBubble, setShowTsukiBubble] = useState(false)
  const [activeCareerVideo, setActiveCareerVideo] = useState<string | null>(null)
  const quotesWrapRef = useRef<HTMLDivElement | null>(null)
  const quotesContentRef = useRef<HTMLDivElement | null>(null)
  const tsukiWrapRef = useRef<HTMLDivElement | null>(null)

  const careerVideoLinks: Record<string, string> = {
    'vidmob-diversity':
      'https://drive.google.com/file/d/1fuvqr-F1fhG74VM4vvgYaAV9ZzZW2dSV/preview',
    stern: 'https://www.youtube.com/embed/AVt4dJAhc1Q?autoplay=1&rel=0',
    'largest-deal':
      'https://drive.google.com/file/d/1DD_KLL64F5eME0sqvHnicUjZeJql1kai/preview',
    mvp: 'https://drive.google.com/file/d/1fHNxtih7oFFaomxJTjmDHUZnwKELq_cc/preview',
    blackbelt: 'https://drive.google.com/file/d/1GfvhhZMP-DlQLOHKHWGDMTeiGZe01qte/preview',
  }

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
          <span className="v2-no-wrap">Revenue-Driving Solution Engineer</span>
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
              className={`v2-moment ${moment.id === 'largest-deal' || moment.id === 'mvp' ? 'has-video' : ''} ${expandedMoment === moment.id ? 'is-expanded' : ''}`}
              onClick={() => {
                if (moment.id === 'largest-deal' || moment.id === 'mvp') return
                setExpandedMoment((current) => (current === moment.id ? null : moment.id))
              }}
            >
              <img src={moment.image} alt={moment.title} loading="lazy" />
              {(moment.id === 'largest-deal' || moment.id === 'mvp') && (
                <button
                  type="button"
                  className="v2-moment-play-button"
                  aria-label={moment.id === 'mvp' ? 'Play MVP video' : 'Play $400k+ Deal video'}
                  onClick={(event) => {
                    event.stopPropagation()
                    setActiveCareerVideo(
                      moment.id === 'mvp' ? careerVideoLinks.mvp : careerVideoLinks['largest-deal'],
                    )
                  }}
                >
                  <span aria-hidden="true" />
                </button>
              )}
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
              className={`v2-moment ${moment.id === 'blackbelt' ? 'has-video' : ''} ${expandedMoment === moment.id ? 'is-expanded' : ''}`}
              onClick={() => {
                if (moment.id === 'blackbelt') return
                setExpandedMoment((current) => (current === moment.id ? null : moment.id))
              }}
            >
              <img src={moment.image} alt={moment.title} loading="lazy" />
              {moment.id === 'blackbelt' && (
                <button
                  type="button"
                  className="v2-moment-play-button"
                  aria-label="Play Slack Blackbelt video"
                  onClick={(event) => {
                    event.stopPropagation()
                    setActiveCareerVideo(careerVideoLinks.blackbelt)
                  }}
                >
                  <span aria-hidden="true" />
                </button>
              )}
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
        <div className="v2-career-columns">
          <article className="v2-career-card has-video">
            <button
              type="button"
              className="v2-career-image-button"
              onClick={() => setActiveCareerVideo(careerVideoLinks['vidmob-diversity'])}
              aria-label="Play VidMob Diversity Report video"
            >
              <img
                className="v2-career-logo"
                src={vidmobDiversityReportImage}
                alt="VidMob Diversity Report visual"
                loading="lazy"
              />
            </button>
            <button
              type="button"
              className="v2-career-play-button"
              aria-label="Play VidMob Diversity Report video"
              onClick={() => setActiveCareerVideo(careerVideoLinks['vidmob-diversity'])}
            >
              <span aria-hidden="true" />
            </button>
            <h3>VidMob Diversity Report</h3>
            <p>
              Conceived and developed VidMob's Diversity Report in partnership with Product,
              encouraging brands to feature more diverse skin tones, gender identities, and ages,
              generating over $150,000 in revenue from customers like L'Oréal.
            </p>
          </article>

          <article className="v2-career-card">
            <div className="v2-career-image-button is-static" aria-hidden="true">
              <img
                className="v2-career-logo"
                src={vidmobClosedBusinessImage}
                alt="$4M in closed business"
                loading="lazy"
              />
            </div>
            <h3>$4M in Enterprise Sales</h3>
            <p>
              Drove over $4M in revenue as a VidMob SE, closing enterprise opportunities from
              customers like Coca-Cola, Unilever, and Bloomberg.
            </p>
          </article>

          <article className="v2-career-card has-video">
            <button
              type="button"
              className="v2-career-image-button"
              onClick={() => setActiveCareerVideo(careerVideoLinks.stern)}
              aria-label="Play NYU Stern commencement video"
            >
              <img
                className="v2-career-logo"
                src={sternCommencementPhoto}
                alt="NYU Stern commencement speech"
                loading="lazy"
              />
            </button>
            <button
              type="button"
              className="v2-career-play-button"
              aria-label="Play Stern Commencement Speaker video"
              onClick={() => setActiveCareerVideo(careerVideoLinks.stern)}
            >
              <span aria-hidden="true" />
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

      {activeCareerVideo && (
        <div className="v2-video-modal" role="dialog" aria-modal="true" onClick={() => setActiveCareerVideo(null)}>
          <div className="v2-video-frame-wrap" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="v2-video-close"
              aria-label="Close video"
              onClick={() => setActiveCareerVideo(null)}
            >
              Close
            </button>
            {activeCareerVideo.includes('.mp4') || activeCareerVideo.includes('.mov') ? (
              <video src={activeCareerVideo} controls autoPlay playsInline />
            ) : (
              <iframe
                src={activeCareerVideo}
                title="Career highlight video"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </main>
  )
}

export default V2App
