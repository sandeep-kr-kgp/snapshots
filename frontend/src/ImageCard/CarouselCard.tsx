import { Carousel } from '@mantine/carousel';
import { Badge, Card, Group, Text } from '@mantine/core';
import axios from 'axios';
import { GetPost } from '../data/Posts';
import ImageActions from './ImageActions';
import { ImageCard } from './ImageCard';
import isDev from '../Utils/isDev';
export function CarouselCard({ id }: { id: string }) {
    const post = GetPost(id);
    const { images, description, title, location, objectPosition } = post;
    let hasImages = false;
    const slides = images.map((imageId) => {
        hasImages = true;
        // window.images = window.images ? window.images + 1 : 1;
        return (
            <Carousel.Slide key={imageId}>
                <ImageCard id={imageId} objectPosition={objectPosition} />
            </Carousel.Slide>
        );
    });
    const update = (key: string, value: string) => {
        axios.post('/backend/post/update', { id, location, title, description, [key]: value });
    };
    if (!hasImages) return <></>;
    const hideDescription = !isDev && !description;
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
                        contentEditable={isDev}
                        dangerouslySetInnerHTML={{ __html: title || 'Untitled' }}
                        flex={1}
                        truncate
                        onBlur={(e) => update('title', e.target.textContent || '')}
                    />
                    <Badge size="lg" variant="light" maw="12rem" miw="5rem">
                        {isDev ? (
                            <Text
                                contentEditable
                                dangerouslySetInnerHTML={{
                                    __html: location || 'Location',
                                }}
                                onBlur={(e) => update('location', e.target.textContent || '')}
                            />
                        ) : (
                            location
                        )}
                    </Badge>
                </Group>
                {!hideDescription && (
                    <Text
                        c="dimmed"
                        contentEditable={isDev}
                        dangerouslySetInnerHTML={{
                            __html: description || 'Description',
                        }}
                        onBlur={(e) => update('description', e.target.textContent || '')}
                    />
                )}
                <ImageActions id={id} />
            </Card.Section>
        </Card>
    );
}
