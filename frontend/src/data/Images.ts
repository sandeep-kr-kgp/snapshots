import images from '../data/images.json';
import Groups from './Groups';
import { GroupItem } from './Groups';
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
const Images: ImagesSchema = images;

export function GetImageConfig(id: string): ImageSchema {
    return Images[id] ?? {};
}
export function GetImagesByGroup(parent: string): GroupItem[] {
    return Groups[parent]?.images ?? [];
}

export default Images;
