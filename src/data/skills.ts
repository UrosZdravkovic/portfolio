import { 
    SiReact, 
    SiJavascript, 
    SiTypescript, 
    SiCss3, 
    SiTailwindcss, 
    SiFirebase, 
    SiSupabase 
} from 'react-icons/si'
import type { IconType } from 'react-icons'

export interface Skill {
    icon: IconType
    name: string
    color: string
}

export const skills: Skill[] = [
    { icon: SiReact, name: 'React', color: 'text-blue-400' },
    { icon: SiJavascript, name: 'JS', color: 'text-yellow-400' },
    { icon: SiTypescript, name: 'TS', color: 'text-blue-500' },
    { icon: SiCss3, name: 'CSS', color: 'text-blue-600' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-400' },
    { icon: SiFirebase, name: 'Firebase', color: 'text-orange-400' },
    { icon: SiSupabase, name: 'Supabase', color: 'text-green-400' }
]