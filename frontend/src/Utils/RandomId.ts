import { customAlphabet } from 'nanoid';
// sql is case insensitive hence only lowercase letters and numbers are used to create random id
// this function creates tableId, columnId, baseId etc
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', 16);
export default function RandomId(prefix?: string): string {
    return prefix + 'sk' + nanoid();
}
