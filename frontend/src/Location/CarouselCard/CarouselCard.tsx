import { Image, Card, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import BuildUrl from '../../Utils/BuildUrl';
import { GetImageConfig } from '../../data/Images';

const images = ['260d37f496337364d3e6be9013748b06'];

export function CarouselCard() {
    const slides = images.map((id) => {
        const image = GetImageConfig(id);
        return (
            <Carousel.Slide key={id}>
                <Image src={BuildUrl(image.file)} loading="lazy" mah="60vh" />
            </Carousel.Slide>
        );
    });

    return (
        <Card radius="md" withBorder>
            <Card.Section>
                <Carousel draggable withIndicators>
                    {slides}
                </Carousel>
            </Card.Section>
            <Text
                fw={500}
                mt="xs"
                contentEditable
                dangerouslySetInnerHTML={{ __html: 'Untitled' }}
            />
            <Text
                size="sm"
                c="dimmed"
                contentEditable
                dangerouslySetInnerHTML={{
                    __html: 'Description',
                }}
            />
        </Card>
    );
}
