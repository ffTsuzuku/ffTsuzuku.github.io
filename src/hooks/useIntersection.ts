import React, { useState, useEffect, LegacyRef } from 'react'

const useIntersection = (
    element: React.RefObject<any> | undefined,
    rootMargin: string,
    threshold = 0.8
) => {
    const [isVisible, setState] = useState(false)

    useEffect(() => {
        if (!element || !element.current) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting)
            },
            { rootMargin, threshold }
        )

        element.current && observer.observe(element.current)

        return () => observer.unobserve(element.current)
    }, [])

    return isVisible
}

export default useIntersection
