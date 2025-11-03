import {comment, enumTags, navItem, Project, Service} from "@/types/content";

export const navMenu: navItem[] = [
    {label: "Home", href: "#home"},
    {label: "About", href: "#about"},
    {label: "Services", href: "#services"},
    {label: "Projects", href: "#projects"},
    {label: "Testimonials", href: "#testimonials"},
    {label: "Contact Us", href: "#contact"},
];

export const services: Service[] = [
    {
        title: "UI/UX",
        desc: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
        icon: "UI-image.png"
    },
    {
        title: "Web Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
        icon: "web-design-image.png",
    },
    {
        title: "App Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
        icon: "app-design-image.png"
    },
    {
        title: "Graphic Design",
        desc: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
        icon: "graphic-design-image.png",
    },
];

export const projects: Project[] = [
    {title: "AirCalling Landing Page Design 1", image: "/images/home/projects/project.png", tag: enumTags.UI_UX},
    {title: "AirCalling Landing Page Design 2", image: "/images/home/projects/project.png", tag: enumTags.UI_UX},
    {title: "AirCalling Landing Page Design 3", image: "/images/home/projects/project.png", tag: enumTags.UI_UX},
    {
        title: "AirCalling Landing Page Design 4",
        image: "/images/home/projects/project.png",
        tag: enumTags.websiteDesign
    },
];

export const commentList: comment[] = [
    {
        name: "John Doe",
        role: "Founder",
        text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas. Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.",
        avatar: "/images/home/testimonials/Ava_1.png",
    },
    {
        name: "Anna Smith",
        role: "CEO",
        text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas. Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.",
        avatar: "/images/home/testimonials/Ava_2.png",
    },
    {
        name: "Michael Brown",
        role: "Product Lead",
        text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas. Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.",
        avatar: "/images/home/testimonials/Ava_2.png",
    },
];