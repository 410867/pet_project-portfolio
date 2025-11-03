export type PngPath = `${string}.png`;
export type ProjectImagePath = `/images/home/projects/${string}.png`;

export type navItem = {
    label: string;
    href: `#${string}`;
};

export const enumTags = {
    UI_UX: "UI/UX",
    websiteDesign: "Website Design",
    appDesign: "App Design",
    graphicDesign: "Graphic Design",
} as const;

export type Tag = typeof enumTags[keyof typeof enumTags];

export interface Service {
    title: string;
    desc: string;
    icon: PngPath;
}

export interface Project {
    title: string;
    image: ProjectImagePath;
    tag: Tag;
}

export interface comment {
    name: string;
    role: string;
    text: string;
    avatar: `/images/home/testimonials/${string}.png`;
}
