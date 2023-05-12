import React, { useState, useEffect, useRef } from 'react'
import { Flex, Text } from '@chakra-ui/react'

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

            context.fillStyle = 'rgba(0, 0, 0, 0.05)'
            context.fillRect(0, 0, canvas.width, canvas.height)
            context.fillStyle = '#0F0'
            context.font = fontSize + 'px monospace'

            for (let i = 0; i < rain.length; i++) {
                const x = i * fontSize
                const y = rain[i] * fontSize
                const text = alphabet.charAt(Math.random() * alphabet.length)
                context.fillText(text, x, y)

                if (y > canvas?.height && Math.random() > 0.975) {
                    rain[i] = 0
                }
                rain[i]++
            }
        }

        setInterval(draw, 30)
    }, [])

    return (
        <Flex w={'100%'} h={'100vh'} backgroundColor={'black'}>
            <canvas
                ref={matrixCanvas}
                style={{ width: '100%', height: '100vh' }}
            />
            <Text
                color={'white'}
                fontSize={'4em'}
                position={'fixed'}
                left={'50%'}
                top={'50%'}
                transform={'translate(-50%, -50%)'}
                textAlign={'center'}
                animation={'fade 5s ease-in-out infinite'}
            >
                {'Wake Up Neo'}
            </Text>
        </Flex>
    )
}

export default MatrixRain
