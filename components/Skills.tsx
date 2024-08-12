import IconCloud from "@/components/magicui/icon-cloud";
import {ShootingStars} from "@/components/ui/shooting-stars";
import {StarsBackground} from "@/components/ui/stars-background";

const slugs = [
    "typescript",
    "javascript",
    "react",
    'nextdotjs',
    "html5",
    "css3",
    "mysql",
    "appwrite",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
    'pycharm',
    'webstorm',
    'cplusplus',
    'c',
    'django',
    'python',
    'tailwindcss',
    'bootstrap',
    'netlify'

];

export function Skills() {
    return (
        <div id="skills" className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background px-20 pb-10">
        <IconCloud iconSlugs={slugs} />
            <ShootingStars />
            <StarsBackground />
    </div>
);
}
