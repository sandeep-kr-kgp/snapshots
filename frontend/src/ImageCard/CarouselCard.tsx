import { Carousel } from '@mantine/carousel';
import { Badge, Card, Group, Text } from '@mantine/core';
import { ImageCard } from './ImageCard';

export function CarouselCard() {
    const images = [1, 2, 3, 4];
    let hasImages = false;
    const slides = images.map((imageId) => {
        hasImages = true;
        return (
            <Carousel.Slide key={imageId}>
                <ImageCard />
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
                        dangerouslySetInnerHTML={{ __html: 'Untitled' }}
                        flex={1}
                        truncate
                    />
                    <Badge size="lg" variant="light" maw="7rem">
                        Himachal
                    </Badge>
                </Group>
                <Text
                    size="sm"
                    c="dimmed"
                    contentEditable
                    dangerouslySetInnerHTML={{
                        __html: 'Description',
                    }}
                />
            </Card.Section>
        </Card>
    );
}
