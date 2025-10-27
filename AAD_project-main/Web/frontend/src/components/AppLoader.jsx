import { useEffect, useState } from 'react'

// Small full-screen entry loader that animates the words: BUY, SELL, RENT, PLAY
export default function AppLoader({ duration = 1200 }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(t)
  }, [duration])

  if (!visible) {
    return null
  }

  const words = ['BUY', 'SELL', 'RENT', 'PLAY']

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="flex items-center justify-center gap-6 px-6 py-4">
          {words.map((w, i) => (
            <span
              key={w}
              className="text-2xl md:text-3xl font-bold text-lavender-700 opacity-0"
              style={{
                display: 'inline-block',
                animation: `os-pop 1.2s ease-in-out ${i * 0.18}s both`,
              }}
            >
              {w}
            </span>
          ))}
        </div>
        <div className="mt-3 text-sm text-stroke-strong">Welcome to OpenShelf</div>
      </div>

      {/* Inline keyframes to avoid touching global CSS files */}
      <style>
        {`@keyframes os-pop {
          0% { opacity: 0; transform: translateY(10px) scale(0.95); }
          30% { opacity: 1; transform: translateY(0) scale(1); }
          70% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-10px) scale(0.95); }
        }`}
      </style>
    </div>
  )
}
