import { ActionIcon, Image, Skeleton } from '@mantine/core';
import BuildUrl from '../Utils/BuildUrl';
import { BiRotateLeft } from 'react-icons/bi';
import classes from './Styles.module.css';
import axios from 'axios';
import isDev from '../Utils/isDev';
import { useState } from 'react';

export function ImageCard({ id, objectPosition }: { id: string; objectPosition?: string }) {
    const [loaded, setLoaded] = useState(false);
    const rotate = () => {
        axios.get(`/backend/post/rotate/${id}`);
    };
    console.log(loaded);
    return (
        <>
            {!loaded && <Skeleton h="400" />}
            <Image
                style={{ opacity: loaded ? 1 : 0, objectPosition: objectPosition }}
                src={BuildUrl(id)}
                loading="lazy"
                maw="100%"
                mah="90vh"
                onLoadCapture={() => setLoaded(true)}
            />
            {isDev && (
                <ActionIcon onClick={rotate} className={classes.rotate} size="lg" variant="default">
                    <BiRotateLeft size={16} />
                </ActionIcon>
            )}
        </>
    );
}
