import { Link } from 'react-router-dom';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { VscLinkExternal, VscSave, VscTrash, VscEyeClosed } from 'react-icons/vsc';
import isDev from '../Utils/isDev';
import { BiRotateLeft } from 'react-icons/bi';
import classes from './Location.module.css';
import axios from 'axios';
interface Props {
    id: string;
    onSave?: () => void;
}
function ImageActions(props: Props) {
    const { id, onSave } = props;
    const deleteImage = () => {
        const confirmation = window.confirm('Are you sure you want to delete this photo ?');
        if (confirmation) axios.delete(`/backend/image/${id}`);
    };
    const rotate = () => {
        axios.get(`/backend/image/rotate/${props.id}`);
    };
    const actions = [
        { icon: VscSave, onClick: onSave, label: 'Save Changes' },
        { icon: BiRotateLeft, onClick: rotate, label: 'Rotate Image' },
        {
            icon: VscEyeClosed,
            onClick: () => null,
            label: 'Hide Image (Remove the image from this group)',
        },
        { icon: VscTrash, onClick: deleteImage, label: 'Delete Image', c: 'red' },
    ];
    return (
        <Group mt="md">
            <Tooltip label="Open image in new tab" withArrow position="bottom">
                <ActionIcon
                    size="lg"
                    variant="default"
                    component={Link}
                    to={`/image/${props.id}`}
                    target="_blank"
                    className={classes.open}
                >
                    <VscLinkExternal size={16} />
                </ActionIcon>
            </Tooltip>
            {isDev && (
                <Group align="center">
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
            )}
        </Group>
    );
}

export default ImageActions;
