import { Box, Image, Badge, useColorModeValue } from '@chakra-ui/react'

interface Props {
    badge?: string
    badgeInfo?: string
    variant?: 'vetical' | 'horizontal'
    image?: string
    fallback?: string
    title?: string
    subTitle?: string
    text?: string
}

function Card({
    badge,
    badgeInfo,
    image,
    fallback,
    title,
    subTitle,
    text,
    variant,
}: Props) {
    const badgeFill = useColorModeValue('purple.400', 'purple.700')
    return (
        <Box
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            shadow={'2xl'}
        >
            <Image src={image} alt={fallback} fit='cover' loading='lazy'/>

            <Box p='6'>
                <Box
                    textAlign={'left'}
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {title}
                </Box>

                <Box textAlign={'left'}>{subTitle}</Box>

                <Box textAlign={'left'}>{text}</Box>

                <Box display='flex' alignItems='baseline'>
                    <Badge
                        borderRadius='full'
                        px='2'
                        py='1'
                        colorScheme={'purple'}
                    >
                        {badge}
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='sm'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {badgeInfo}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Card
