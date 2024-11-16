import { Container, Stack } from '@mantine/core';
import Intro from './Intro';
import { CarouselCard } from '../ImageCard/CarouselCard';
import AddImage from './AddImage';
import Posts from '../data/Posts';
export default function Home() {
    return (
        <Container p="xs">
            <Stack pb="xl" gap="lg">
                <Intro />
                {Object.keys(Posts).map((postId) => {
                    return <CarouselCard id={postId} />;
                })}
                <AddImage />
            </Stack>
        </Container>
    );
}
