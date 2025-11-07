import type { Skill } from '../data/skills'

interface SkillCardProps extends Skill {}

export default function SkillCard({ icon: Icon, name, color }: SkillCardProps) {
    return (
        <div className="flex flex-col items-center gap-2 p-3 bg-white/3 border border-white/8 rounded-lg hover:bg-white/5 transition-colors">
            <Icon className={`w-6 h-6 ${color}`} />
            <span className="text-gray-300 text-xs font-medium">{name}</span>
        </div>
    )
}