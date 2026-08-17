import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const tick = () => {
      animId = requestAnimationFrame(tick)
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
    }
    tick()

    const grow = () => {
      if (dotRef.current)  dotRef.current.style.transform = 'translate(-50%,-50%) scale(2.5)'
      if (ringRef.current) ringRef.current.style.opacity  = '0'
    }
    const shrink = () => {
      if (dotRef.current)  dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) ringRef.current.style.opacity  = '0.5'
    }

    const onMouseDown = () => {
      if (dotRef.current)  dotRef.current.style.transform = 'translate(-50%,-50%) scale(0.8)'
      if (ringRef.current) ringRef.current.style.opacity  = '0.8'
    }
    const onMouseUp = () => {
      if (dotRef.current)  dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) ringRef.current.style.opacity  = '0.5'
    }

    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    const attachListeners = () => {
      const els = document.querySelectorAll('a, button, [data-cursor]')
      els.forEach(el => {
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })
      return els
    }

    const els = attachListeners()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      els.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      {/* Glowing dot */}
      <div
        ref={dotRef}
        style={{
          position:      'fixed',
          width:         12,
          height:        12,
          background:    '#00f5ff',
          borderRadius:  '50%',
          transform:     'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex:        9999,
          boxShadow:     '0 0 20px #00f5ff88, 0 0 60px #00f5ff33',
          transition:    'transform 0.15s ease, opacity 0.15s ease',
          mixBlendMode:  'screen' as const,
        }}
      />

      {/* Trailing ring */}
      <div
        ref={ringRef}
        style={{
          position:      'fixed',
          width:         36,
          height:        36,
          border:        '1px solid #00f5ff',
          borderRadius:  '50%',
          transform:     'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex:        9998,
          opacity:       0.5,
          transition:    'opacity 0.3s',
        }}
      />
    </>
  )
}