import { ITechnic } from '../models/Technica'

interface SearchProps {
    technic: ITechnic[],
    value: string
}

export const useSearch = ({ technic, value }: SearchProps) => {
    return [...technic].filter((itm) => itm.title.toLowerCase().includes(value.toLowerCase()))
}

