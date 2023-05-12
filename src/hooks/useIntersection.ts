import React, { useState, useEffect, LegacyRef } from 'react'

interface useIntersectionProps {
    element: React.RefObject<any> | undefined
    rootMargin: string
    threshold?: number
    onIntersect?: (element: IntersectionObserverEntry) => void
}

const useIntersection = ({
    element,
    rootMargin,
    threshold = 0.8,
    onIntersect,
}: useIntersectionProps) => {
    const [isVisible, setState] = useState(false)

    useEffect(() => {
        if (!element || !element.current) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting)
                onIntersect?.(entry)
            },
            { rootMargin, threshold }
        )

        element.current && observer.observe(element.current)

        return () => {
            if (!element.current) return
            observer.unobserve(element.current)
        }
    }, [])

    return isVisible
}

export default useIntersection
