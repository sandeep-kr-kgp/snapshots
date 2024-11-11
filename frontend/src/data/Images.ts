import images from '../data/images.json';
import group_images from '../data/group_images.json';
import { CarouselItem } from './Groups';
export interface ImageSchema {
    parent: string;
    file: string;
    date: string;
    title?: string;
    description?: string;
}
export interface ImagesSchema {
    [key: string]: ImageSchema;
}
export interface ImageList extends ImageSchema {
    id: string;
}
export interface GroupImagesSchema {
    [key: string]: CarouselItem[];
}
const Images: ImagesSchema = images;
const GroupImages: GroupImagesSchema = group_images;
export function GetImageConfig(id: string): ImageSchema {
    return Images[id] ?? {};
}
export function GetImagesByGroup(parent: string): CarouselItem[] {
    return GroupImages[parent] ?? [];
}

export default Images;
