import { Card, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
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
        <Card radius="md" shadow="xs">
            <Card.Section>
                <Carousel draggable withIndicators={Boolean(images.length)}>
                    {slides}
                </Carousel>
            </Card.Section>
            <Card.Section px="xs" py="sm">
                <Text fw={500} contentEditable dangerouslySetInnerHTML={{ __html: 'Untitled' }} />
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
