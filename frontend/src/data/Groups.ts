import groups from '../data/groups.json';
export interface CarouselItem {
    id: string;
    images: string[];
}
export interface GroupSchema {
    id: string;
    label: string;
    time: string;
    images: CarouselItem[];
    message?: string;
}
export interface GroupsSchema {
    [key: string]: GroupSchema;
}
const Groups: GroupsSchema = groups;

export const GetGroupInfo = (id: string): GroupSchema => {
    return Groups[id];
};

// function ModifiedGroupsJson() {
//     const json = {};
//     Object.keys(Groups).forEach((group) => {
//         let copy = JSON.parse(JSON.stringify(Groups[group]));
//         copy.images = Groups[group].images.map((e) => ({ id: e.id, images: [e.id] }));
//         json[group] = copy.images;
//     });
//     console.log(json);
// }
// ModifiedGroupsJson();
export default Groups;
