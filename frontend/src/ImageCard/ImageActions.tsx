import { ActionIcon, Group, Tooltip } from '@mantine/core';
import axios from 'axios';
import { BiRotateLeft } from 'react-icons/bi';
import { RiImageAddLine } from 'react-icons/ri';
import { VscEyeClosed, VscTrash } from 'react-icons/vsc';
import isDev from '../Utils/isDev';
interface Props {
    id: string;
}
function ImageActions(props: Props) {
    const { id } = props;
    if (!isDev) return <></>;
    const deleteImage = () => {
        const confirmation = window.confirm('Are you sure you want to delete this photo ?');
        if (confirmation) axios.delete(`/backend/image/${id}`);
    };
    const rotate = () => {
        axios.get(`/backend/image/rotate/${props.id}`);
    };
    const actions = [
        { icon: RiImageAddLine, onClick: () => null, label: 'Add image to this caropusel' },
        { icon: BiRotateLeft, onClick: rotate, label: 'Rotate Image' },
        {
            icon: VscEyeClosed,
            onClick: () => null,
            label: 'Hide Image (Remove the image from this group)',
        },
        { icon: VscTrash, onClick: deleteImage, label: 'Delete Image', c: 'red' },
    ];
    return (
        <Group mt="md" align="center">
            {id}
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
