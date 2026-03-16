import React from 'react'

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Instagram */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/50 hover:text-white transition-colors duration-300"
        aria-label="Instagram"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>

      {/* X (Twitter) */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/50 hover:text-white transition-colors duration-300"
        aria-label="X"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/50 hover:text-white transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.65-1.2 2.25-2.2 4.65-2.2 5 0 5.9 3.3 5.9 7.6V24h-5v-7.9c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/>
        </svg>
      </a>
    </div>
  )
}

export default SocialMedia