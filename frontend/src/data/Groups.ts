import groups from '../data/groups.json';
export interface GroupSchema {
    id: string;
    label: string;
    time: string;
    images: string[];
    message?: string;
}
export interface GroupsSchema {
    [key: string]: GroupSchema;
}
const Groups: GroupsSchema = groups;
export const GetGroupInfo = (id: string): GroupSchema => {
    return Groups[id];
};
export default Groups;
