declare type AvailableSections =
    | 'Home'
    | 'Work Experience'
    | 'Education'
    | 'Tech Stack'
    | 'Github'
    | 'Projects'
	| 'DSA'

interface SectionProps {
    element: React.RefObject<any>
}

interface Section {
    label: AvailableSections
    link: string
	isFragment: bool
}

