import { Container, Stack } from '@mantine/core';
import Intro from './Intro';
import { ImageCard } from '../ImageCard/ImageCard';
import { CarouselCard } from '../ImageCard/CarouselCard';
export default function Home() {
    return (
        <Container p="xs">
            <Stack pb="xl" gap="lg">
                <Intro />
                <ImageCard />
                <CarouselCard />
            </Stack>
        </Container>
    );
}
