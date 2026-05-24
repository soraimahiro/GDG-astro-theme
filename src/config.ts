import type { Media } from "./components/types/Media";

export interface AuthorConfig {
    name: string;
    avatar: string;
    bio: string;
    media?: Media[];
}

export interface FooterLink {
    name: string;
    url: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface FooterConfig {
    copyrightName: string;
    sections: FooterSection[];
}

// set your config here
export const authorConfig: AuthorConfig = {
    name: "GDGoC NTNU",
    avatar: "/GDG.jpg",
    bio: "Welcome. We are GDG on Campus NTNU.",
    media: [
        { iconName: "mingcute:instagram-fill", link: "https://www.instagram.com/gdg.ntnu" },
        { iconName: "mingcute:discord-fill", link: "https://discord.gg/ANfAvvrGZN" }
    ]
};

export const footerConfig: FooterConfig = {
    copyrightName: "GDG NTNU",
    sections: [
        {
            title: "Links",
            links: [
                { name: "Github", url: "https://github.com/soraimahiro/Astro-Theme-Lion" }
            ],
        },
        {
            title: "Reference",
            links: [
                { name: "Astro", url: "https://astro.build" },
                { name: "Tailwind CSS", url: "https://tailwindcss.com" }
            ],
        },
    ]
};
