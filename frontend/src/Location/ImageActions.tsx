import { Link } from 'react-router-dom';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { VscLinkExternal, VscSave, VscTrash } from 'react-icons/vsc';
import isDev from '../Utils/isDev';
import { BiRotateLeft } from 'react-icons/bi';
import classes from './Location.module.css';
import axios from 'axios';
interface Props {
    id: string;
    onSave?: () => void;
}
function ImageActions(props: Props) {
    const deleteImage = () => {
        const confirmation = window.confirm('Are you sure you want to delete this photo ?');
        if (confirmation) axios.delete(`/backend/image/${props.id}`);
    };
    const rotate = () => {
        axios.get(`/backend/image/rotate/${props.id}`);
    };
    return (
        <>
            <Tooltip label="Open image in new tab" withArrow position="bottom">
                <ActionIcon
                    variant="default"
                    component={Link}
                    to={`/image/${props.id}`}
                    target="_blank"
                    className={classes.open}
                >
                    <VscLinkExternal />
                </ActionIcon>
            </Tooltip>
            {isDev && (
                <Group align="center">
                    <ActionIcon variant="default" onClick={props.onSave}>
                        <VscSave />
                    </ActionIcon>
                    <ActionIcon variant="default" onClick={rotate}>
                        <BiRotateLeft />
                    </ActionIcon>
                    <ActionIcon variant="outline" color="red" onClick={deleteImage}>
                        <VscTrash />
                    </ActionIcon>
                </Group>
            )}
        </>
    );
}

export default ImageActions;
