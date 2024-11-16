import posts from './posts.json';
export interface PostSchema {
    images: string[];
    title?: string;
    description?: string;
    location?: string;
}
export interface CarouselsSchema {
    [key: string]: PostSchema;
}

const Posts: CarouselsSchema = posts;

export function GetPost(id: string): PostSchema {
    return Posts[id] ?? {};
}

export default Posts;
