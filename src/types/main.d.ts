declare type AvailableSections =
    | 'Home'
    | 'Work Experience'
    | 'Education'
    | 'Tech Stack'
    | 'Github'
    | 'Projects'

interface SectionProps {
    element: React.RefObject<any>
}

interface Section {
    label: AvailableSections
    link: string
}
