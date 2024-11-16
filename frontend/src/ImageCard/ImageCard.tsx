import { Image } from '@mantine/core';
import BuildUrl from '../Utils/BuildUrl';
export function ImageCard({ id }: { id: string }) {
    return <Image src={BuildUrl(id)} loading="lazy" maw="100%" mah="80vh" />;
}
