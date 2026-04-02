// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react'

const MatrixRain = () => {
    const matrixCanvas = useRef<HTMLCanvasElement>(null)
    const rainDrops = useRef<number[]>([])
    const columns = useRef<number>()

    const katakana =
        'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const nums = '0123456789'
    const alphabet = katakana + latin + nums
    const fontSize = 16

    // Dynamic Theme Matching
    const rainColor = useColorModeValue('#111111', '#FFFFFF')
    const fadeColor = useColorModeValue('rgba(255, 255, 255, 0.05)', 'rgba(0, 0, 0, 0.05)')
    const blendMode = useColorModeValue('multiply', 'screen')

    // Set the canvas dimensions
    useEffect(() => {
        if (!matrixCanvas.current) return
        matrixCanvas.current.width = window.innerWidth
        matrixCanvas.current.height = window.innerHeight
        columns.current = window.innerWidth / fontSize

        for (let x = 0; x < columns.current; x++) {
            rainDrops.current[x] = 1
        }

        const draw = () => {
            const canvas = matrixCanvas.current
            const context = canvas?.getContext('2d')
            const rain = rainDrops.current
            if (!canvas || !context || !rainDrops.current) return

            context.fillStyle = fadeColor
            context.fillRect(0, 0, canvas.width, canvas.height)
            context.fillStyle = rainColor
            context.font = fontSize + 'px monospace'

            for (let i = 0; i < rain.length; i++) {
                const x = i * fontSize
                const y = rain[i] * fontSize
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
                context.fillText(text, x, y)

                if (y > canvas?.height && Math.random() > 0.975) {
                    rain[i] = 0
                }
                rain[i]++
            }
        }

        const runner = setInterval(draw, 70)
        return () => clearInterval(runner)
    }, [fadeColor, rainColor])

    return (
        <Flex w={'100%'} h={'100vh'} backgroundColor={'transparent'} position={'fixed'} zIndex={9999} pointerEvents="none">
            <canvas
                ref={matrixCanvas}
                style={{ width: '100%', height: '100vh', mixBlendMode: blendMode, opacity: 0.2 }}
            />
        </Flex>
    )
}

export default MatrixRain
