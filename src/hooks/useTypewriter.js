import { useState, useEffect } from 'react'

export function useTypewriter(roles) {
  const [text, setText] = useState('')

  useEffect(() => {
    let roleIndex  = 0
    let charIndex  = 0
    let isDeleting = false
    let timeout

    function tick() {
      const current = roles[roleIndex]

      if (isDeleting) {
        setText(current.substring(0, charIndex - 1))
        charIndex--
      } else {
        setText(current.substring(0, charIndex + 1))
        charIndex++
      }

      let delay = isDeleting ? 55 : 95

      if (!isDeleting && charIndex === current.length) {
        delay = 2400
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length
        delay = 380
      }

      timeout = setTimeout(tick, delay)
    }

    tick()
    return () => clearTimeout(timeout)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return text
}
