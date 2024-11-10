import groups from '../data/groups.json';
export interface GroupItem {
    id: string;
    type: string;
}
export interface GroupSchema {
    id: string;
    label: string;
    time: string;
    images: GroupItem[];
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
//         copy.images = Groups[group].images.map((e) => ({ id: e, type: 'image' }));
//         json[group] = copy;
//     });
//     console.log(json);
// }
// ModifiedGroupsJson();
export default Groups;
