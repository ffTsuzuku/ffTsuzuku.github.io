import {
    HStack,
    Icon,
    Progress,
    VStack,
    Text,
    Popover,
    Button,
    PopoverTrigger,
    PopoverBody,
    PopoverArrow,
    PopoverContent,
} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

interface Props {
    value: number
    icon: IconType
    name: string
}

function ProgressBar({ value, icon, name }: Props) {
    return (
        <Popover
            defaultIsOpen={true}
            isOpen={true}
            onClose={close}
            placement='top'
            closeOnBlur
        >
            <PopoverTrigger>
                <Progress value={value} />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />

                <PopoverBody>
                    Are you sure you want to continue with your action?
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default ProgressBar
