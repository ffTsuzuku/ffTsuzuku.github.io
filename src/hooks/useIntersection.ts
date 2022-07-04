import React, { useState, useEffect } from 'react'

const useIntersection = (
    element: React.MutableRefObject<HTMLDivElement | undefined>,
    rootMargin: string
) => {
    const [isVisible, setState] = useState(false)

    useEffect(() => {
        if (!element.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting)
            },
            { rootMargin }
        )

        element.current && observer.observe(element.current)

        return () => observer.unobserve(element.current)
    }, [])

    return isVisible
}

export default useIntersection
