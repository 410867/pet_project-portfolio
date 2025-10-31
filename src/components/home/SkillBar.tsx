type SkillBarProps = {
    label: string;
    value: number;
};

export default function SkillBar({label, value}: SkillBarProps) {
    const pct = Math.max(0, Math.min(100, value));

    return (
        <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-[21px] font-semibold">
                <span>{label}</span>
                <span>{pct}%</span>
            </div>

            {/* Track */}
            <div
                className="relative h-3 rounded-full bg-neutral-200 dark:bg-white/10"
                role="progressbar"
                aria-label={label}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={pct}
            >
                {/* Fill */}
                <div
                    className="absolute left-0 top-0 h-full rounded-full bg-primary"
                    style={{width: `${pct}%`}}
                />

                {/* Knob */}
                <span
                    className="absolute top-1/2 h-6 w-6 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-primary bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                    style={{left: `${pct}%`}}
                />
            </div>
        </div>
    );
}