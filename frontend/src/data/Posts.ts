import posts from './posts.json';
export interface PostSchema {
    images: string[];
    title?: string;
    description?: string;
    location?: string;
    objectPosition?: string;
}
export interface CarouselsSchema {
    [key: string]: PostSchema;
}

const Posts: CarouselsSchema = posts;

export function GetPost(id: string): PostSchema {
    return Posts[id] ?? {};
}

export function GetCount(): number {
    let count = 0;
    Object.keys(Posts).forEach((id) => (count = count + Posts[id].images.length));
    return count;
}
export default Posts;
