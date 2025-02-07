import { ActionIcon, Image } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import { BiRotateLeft } from 'react-icons/bi';
import BuildUrl from '../Utils/BuildUrl';
import isDev from '../Utils/isDev';
import classes from './Styles.module.css';

export function ImageCard({ id, objectPosition }: { id: string; objectPosition?: string }) {
    const [loaded, setLoaded] = useState(false);
    const rotate = () => {
        axios.get(`/backend/post/rotate/${id}`);
    };
    console.log(loaded);
    return (
        <>
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
