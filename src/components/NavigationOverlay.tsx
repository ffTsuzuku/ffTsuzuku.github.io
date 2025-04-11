import {
    Box,
    Grid,
    Icon,
    Tooltip,
    useColorModeValue,
    Link,
} from '@chakra-ui/react'

import { sections as links } from '../types/global'
interface NavigationOverlay {
    currentlyViewing: AvailableSections | undefined
}
export default function NavigationOverlay({
    currentlyViewing,
}: NavigationOverlay) {
    const breadCrumbFill = useColorModeValue('blue.500', 'whiteAlpha.700')
    const currentlyViewingFill = useColorModeValue('blue.200', 'white')
    const toolTipTextColor = useColorModeValue('blue.400', 'purple.700')

    const linksJSX = links.map((link) => {
        const fillColor =
            currentlyViewing === link.label
                ? currentlyViewingFill
                : breadCrumbFill

        return (
            <Tooltip
                fontWeight={'bold'}
                padding={2}
                hasArrow
                key={link.label}
                label={`Jump to ${link.label}`}
                placement={'left'}
                color={toolTipTextColor}
            >
                <Link href={link.link} _hover={{}}>
                    <span>
                    </span>
                </Link>
            </Tooltip>
        )
    })

    return (
        <Grid
            position={'fixed'}
            top={'50%'}
            transform={'translateY(-50%)'}
            marginLeft={'95%'}
            gridTemplateColumns={'20px'}
            gridRowGap={'30px'}
        >
            {linksJSX}
        </Grid>
    )
}
