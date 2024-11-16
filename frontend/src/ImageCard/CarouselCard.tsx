import { Carousel } from '@mantine/carousel';
import { Badge, Card, Group, Text } from '@mantine/core';
import axios from 'axios';
import { GetPost } from '../data/Posts';
import ImageActions from './ImageActions';
import { ImageCard } from './ImageCard';
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
    const update = (key: string, value: string) => {
        axios.post('/backend/post/update', { id, location, title, description, [key]: value });
    };
    if (!hasImages) return <></>;
    return (
        <Card radius="lg" withBorder pos="relative">
            <Card.Section>
                <Carousel
                    draggable
                    withIndicators={images.length > 1}
                    withControls={images.length > 1}
                >
                    {slides}
                </Carousel>
            </Card.Section>
            <Card.Section px="xs" py="sm">
                <Group justify="space-between" align="center">
                    <Text
                        fw={500}
                        contentEditable
                        dangerouslySetInnerHTML={{ __html: title || 'Untitled' }}
                        flex={1}
                        truncate
                        onBlur={(e) => update('title', e.target.textContent || '')}
                    />
                    <Badge size="lg" variant="light" maw="7rem" miw="5rem">
                        <Text
                            contentEditable
                            dangerouslySetInnerHTML={{
                                __html: location || 'Location',
                            }}
                            onBlur={(e) => update('location', e.target.textContent || '')}
                        />
                    </Badge>
                </Group>
                <Text
                    c="dimmed"
                    contentEditable
                    dangerouslySetInnerHTML={{
                        __html: description || 'Description',
                    }}
                    onBlur={(e) => update('description', e.target.textContent || '')}
                />
                <ImageActions id={id} />
            </Card.Section>
        </Card>
    );
}
