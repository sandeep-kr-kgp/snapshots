import { Image } from '@mantine/core';
import profile from '/profile.webp';
export function ImageCard() {
    return <Image src={profile} loading="lazy" maw="100%" mah="80vh" />;
}
