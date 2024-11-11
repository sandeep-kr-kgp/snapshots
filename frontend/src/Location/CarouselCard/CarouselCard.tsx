import { Image, Card, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import BuildUrl from '../../Utils/BuildUrl';
import { GetImageConfig } from '../../data/Images';
import { CarouselItem } from '../../data/Groups';
import ImageActions from '../ImageActions';

export function CarouselCard(props: CarouselItem) {
    const { id, images } = props;
    let hasImages = false;
    const slides = images.map((imageId) => {
        const image = GetImageConfig(imageId);
        if (!image.file) return <></>;
        hasImages = true;
        return (
            <Carousel.Slide key={imageId}>
                <Image src={BuildUrl(image.file)} loading="lazy" mah="60vh" />
            </Carousel.Slide>
        );
    });
    if (!hasImages) return <></>;
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
            <ImageActions id={id} />
        </Card>
    );
}
