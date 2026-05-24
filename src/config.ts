import type { Media } from "./components/types/Media";

export interface AuthorConfig {
    name: string;
    avatar: string;
    bio: string;
    media?: Media[];
}

export const authorConfig: AuthorConfig = {
    name: "Lion",
    avatar: "/Logo.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    media: [
        { iconName: "mingcute:github-fill", link: "https://github.com" },
        { iconName: "mingcute:mail-fill", link: "mailto:example@example.com" }
    ]
};
