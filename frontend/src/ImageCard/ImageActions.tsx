import { ActionIcon, Group, Text, Tooltip } from '@mantine/core';
import axios from 'axios';
import { VscEyeClosed, VscTrash } from 'react-icons/vsc';
import AddToCarousel from './AddToCarousel';
interface Props {
    id: string;
}
function ImageActions(props: Props) {
    const { id } = props;
    const deleteImage = () => {
        const confirmation = window.confirm('Are you sure you want to delete this photo ?');
        if (confirmation) axios.delete(`/backend/image/${id}`);
    };

    const actions = [
        {
            icon: VscEyeClosed,
            onClick: () => null,
            label: 'Hide Image (Remove the image from this group)',
        },
        { icon: VscTrash, onClick: deleteImage, label: 'Delete Image', c: 'red' },
    ];
    return (
        <Group mt="md" align="center">
            <Text size="sm">{id}</Text>
            <AddToCarousel id={id} />
            {actions.map((a) => {
                const Icon = a.icon;
                return (
                    <Tooltip withArrow label={a.label} key={a.label}>
                        <ActionIcon variant="default" c={a.c} size="lg">
                            <Icon size={16} />
                        </ActionIcon>
                    </Tooltip>
                );
            })}
        </Group>
    );
}

export default ImageActions;
