import AddImage from './AddImage';
import { GetImagesByGroup } from '../data/Images';
import { useParams } from 'react-router-dom';
import { Alert, SimpleGrid, Text } from '@mantine/core';
import ImageCard from './ImageCard';
import { GetGroupInfo } from '../data/Groups';
import { CarouselCard } from './CarouselCard/CarouselCard';
function Location() {
    const params = useParams();
    const location = params.location ?? 'default';
    const images = GetImagesByGroup(location);
    const info = GetGroupInfo(location);
    return (
        <>
            {info.message && (
                <Alert color="yellow" m="md">
                    <Text>{info.message}</Text>
                </Alert>
            )}
            <SimpleGrid p="md" cols={{ base: 1, md: 1, lg: 2 }}>
                {images.map((item) => {
                    const { type, id } = item;
                    if (type === 'image') return <ImageCard key={id} id={id} />;
                    return <CarouselCard />;
                })}
            </SimpleGrid>
            <Alert m="md">
                <Text>
                    Well this is the end of this section. Feel free to change location from the menu
                    to view other photos.
                </Text>
            </Alert>
            <AddImage />
        </>
    );
}

export default Location;
