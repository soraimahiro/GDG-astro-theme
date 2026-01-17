import type { ImageMetadata } from 'astro';

export interface PostData {
    title: string;     
    date: string;        
    image?: ImageMetadata;        
    url: string;
}