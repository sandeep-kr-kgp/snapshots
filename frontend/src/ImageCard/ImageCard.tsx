import { ActionIcon, Image } from '@mantine/core';
import BuildUrl from '../Utils/BuildUrl';
import { BiRotateLeft } from 'react-icons/bi';
import classes from './Styles.module.css';
import axios from 'axios';
import isDev from '../Utils/isDev';
export function ImageCard({ id }: { id: string }) {
    const rotate = () => {
        axios.get(`/backend/post/rotate/${id}`);
    };
    return (
        <>
            <Image src={BuildUrl(id)} loading="lazy" maw="100%" mah="80vh" />
            {isDev && (
                <ActionIcon onClick={rotate} className={classes.rotate} size="lg" variant="default">
                    <BiRotateLeft size={16} />
                </ActionIcon>
            )}
        </>
    );
}
