import { useParams } from 'react-router-dom';
import { GetImageConfig } from '../data/Images';
import { Card, Image, Text, Flex, Box } from '@mantine/core';
import BuildUrl from '../Utils/BuildUrl';
function StandAlone() {
    const params = useParams();
    const id = params.id ?? 'default';
    const img = GetImageConfig(id);
    return (
        <Flex p="xs" justify="center" align="center">
            <Card withBorder radius="lg">
                <Card.Section>
                    <Image src={BuildUrl(img.file)} alt={img.file} loading="lazy" mah="100vh" />
                </Card.Section>
                <Box>
                    {img.title && (
                        <Text fw={500} mt="md">
                            {img.title}
                        </Text>
                    )}
                    {img.description && (
                        <Text size="sm" c="dimmed" mt="5">
                            {img.description}
                        </Text>
                    )}
                </Box>
            </Card>
        </Flex>
    );
}

export default StandAlone;
