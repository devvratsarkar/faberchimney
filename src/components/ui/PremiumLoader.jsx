import { useEffect, useState } from 'react'
import { site } from '../../data/site.js'

const LETTERS = ['F', 'a', 'b', 'e', 'r']
const MIN_MS = 2200
const EXIT_MS = 560

export default function PremiumLoader() {
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

    let cancelled = false
    const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms))
    const fonts = document.fonts?.ready ?? Promise.resolve()

    Promise.all([wait(MIN_MS), fonts]).then(() => {
      if (!cancelled) setPhase('exiting')
    })

    return () => {
      cancelled = true
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

  return (
    <div
      className={`site-loader${phase === 'exiting' ? ' is-exiting' : ''}`}
      role="status"
      aria-live="polite"
      aria-busy={phase === 'loading'}
      aria-label={`${site.name} is loading`}
    >
      <div className="site-loader-bar" aria-hidden="true" />

      <div className="site-loader-brand">
        <p className="site-loader-name" aria-label="Faber">
          {LETTERS.map((letter, index) => (
            <span key={letter} style={{ '--i': index }}>
              {letter}
            </span>
          ))}
        </p>
        <p className="site-loader-tag">Chimney Repair</p>
        <span className="site-loader-track" aria-hidden="true">
          <span className="site-loader-fill" />
        </span>
      </div>
    </div>
  )
}
