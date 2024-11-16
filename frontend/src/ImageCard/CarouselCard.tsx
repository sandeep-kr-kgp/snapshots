import { Carousel } from '@mantine/carousel';
import { Badge, Card, Group, Text } from '@mantine/core';
import { ImageCard } from './ImageCard';
import { GetPost } from '../data/Posts';
export function CarouselCard({ id }: { id: string }) {
    const post = GetPost(id);
    const { images, description, title, location } = post;
    let hasImages = false;
    const slides = images.map((imageId) => {
        hasImages = true;
        return (
            <Carousel.Slide key={imageId}>
                <ImageCard id={imageId} />
            </Carousel.Slide>
        );
    });
    if (!hasImages) return <></>;
    return (
        <Card radius="md" shadow="xs" pos="relative">
            <Card.Section>
                <Carousel draggable withIndicators={Boolean(images.length)}>
                    {slides}
                </Carousel>
            </Card.Section>
            <Card.Section px="xs" py="sm">
                <Group justify="space-between" align="center">
                    <Text
                        fw={500}
                        contentEditable
                        dangerouslySetInnerHTML={{ __html: title ?? 'Untitled' }}
                        flex={1}
                        truncate
                    />
                    {location && (
                        <Badge size="lg" variant="light" maw="7rem">
                            {location}
                        </Badge>
                    )}
                </Group>
                <Text
                    size="sm"
                    c="dimmed"
                    contentEditable
                    dangerouslySetInnerHTML={{
                        __html: description ?? 'Description',
                    }}
                />
            </Card.Section>
        </Card>
    );
}
