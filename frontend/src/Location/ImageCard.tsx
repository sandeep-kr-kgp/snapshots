import { Card, Image, Text } from '@mantine/core';
import BuildUrl from '../Utils/BuildUrl';
import ImageActions from './ImageActions';
import { GetImageConfig } from '../data/Images';
import { useState } from 'react';
import axios from 'axios';
interface ImageCardProps {
    id: string;
}
function ImageCard(props: ImageCardProps) {
    const { id } = props;
    const img = GetImageConfig(id);
    const [title, setTitle] = useState(img.title);
    const [description, setDescription] = useState(img.description);
    if (!img.file) return <></>;
    const handleSave = () => {
        axios.post(`/backend/image/update`, {
            id,
            title,
            description,
        });
    };
    return (
        <Card withBorder radius="md">
            <Card.Section>
                <Image src={BuildUrl(img.file)} alt={img.file} loading="lazy" mah="60vh" />
            </Card.Section>
            <Text
                fw={500}
                mt="xs"
                contentEditable
                dangerouslySetInnerHTML={{ __html: img.title ?? 'Untitled' }}
                onBlur={(e) => setTitle(e.target.textContent ?? '')}
            />
            <Text
                size="sm"
                c="dimmed"
                contentEditable
                dangerouslySetInnerHTML={{
                    __html: img.description ?? 'Description',
                }}
                onBlur={(e) => setDescription(e.target.textContent ?? '')}
            />
            <ImageActions id={id} onSave={handleSave} />
        </Card>
    );
}

export default ImageCard;
