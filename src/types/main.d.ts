declare type AvailableSections =
    | 'Home'
    | 'Work Experience'
    | 'Education'
    | 'Tech Stack'
    | 'Github'

interface SectionProps {
    onVisible: () => void
}

interface Section {
    label: AvailableSections
    link: string
}
