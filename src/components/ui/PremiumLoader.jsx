import { useEffect, useState } from 'react'
import { site } from '../../data/site.js'

const LETTERS = ['F', 'a', 'b', 'e', 'r']
const LOAD_MS = 2100
const HOLD_MS = 260
const EXIT_MS = 620
const RADIUS = 38
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

export default function PremiumLoader() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('is-loading')

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setPhase('gone')
      root.classList.remove('is-loading', 'is-booting')
      return undefined
    }

    let start
    let hold
    const timer = window.setInterval(() => {
      if (!start) start = performance.now()
      const t = Math.min(1, (performance.now() - start) / LOAD_MS)
      setProgress(Math.round(easeOutCubic(t) * 100))

      if (t >= 1) {
        window.clearInterval(timer)
        hold = window.setTimeout(() => setPhase('exiting'), HOLD_MS)
      }
    }, 16)

    return () => {
      window.clearInterval(timer)
      window.clearTimeout(hold)
      root.classList.remove('is-loading')
    }
  }, [])

  useEffect(() => {
    if (phase !== 'exiting') return undefined
    const timer = window.setTimeout(() => {
      setPhase('gone')
      document.documentElement.classList.remove('is-loading', 'is-booting')
    }, EXIT_MS)
    return () => window.clearTimeout(timer)
  }, [phase])

  if (phase === 'gone') return null

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE
  const angle = (progress / 100) * Math.PI * 2 - Math.PI / 2
  const capX = 48 + RADIUS * Math.cos(angle)
  const capY = 48 + RADIUS * Math.sin(angle)

  return (
    <div
      className={`site-loader${phase === 'exiting' ? ' is-exiting' : ''}`}
      style={{ '--loader-p': progress / 100 }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-label={`${site.name} is loading`}
    >
      <div className="site-loader-wash" aria-hidden="true" />
      <div className="site-loader-bar" aria-hidden="true" />

      <div className="site-loader-brand">
        <div className="site-loader-dial">
          <svg viewBox="0 0 96 96" aria-hidden="true">
            <defs>
              <linearGradient id="site-loader-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e40014" />
                <stop offset="100%" stopColor="#fe6e00" />
              </linearGradient>
            </defs>
            <circle className="site-loader-track" cx="48" cy="48" r={RADIUS} />
            <circle
              className="site-loader-value"
              cx="48"
              cy="48"
              r={RADIUS}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
            />
            <circle className="site-loader-cap" cx={capX} cy={capY} r="3.15" />
          </svg>
          <span className="site-loader-count">{progress}</span>
        </div>

        <p className="site-loader-name" aria-label="Faber">
          {LETTERS.map((letter, index) => (
            <span key={letter} style={{ '--i': index }}>
              {letter}
            </span>
          ))}
        </p>
        <p className="site-loader-tag">Chimney Repair</p>
      </div>
    </div>
  )
}
