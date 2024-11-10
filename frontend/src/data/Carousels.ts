import carousels from '../data/carousels.json';
export interface CarouselSchema {
    time: string;
    images: string[];
    title?: string;
    description?: string;
}
export interface CarouselsSchema {
    [key: string]: CarouselSchema;
}

const Carousels: CarouselsSchema = carousels;

export function GetCarouselConfig(id: string): CarouselSchema {
    return Carousels[id] ?? {};
}

export default Carousels;
