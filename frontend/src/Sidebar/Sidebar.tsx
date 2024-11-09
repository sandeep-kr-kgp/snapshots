import { Stack, Text, TextInput } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';
import classes from './Sidebar.module.css';
import { useState } from 'react';
import Groups from '../data/Groups';
import { LiaSearchLocationSolid } from 'react-icons/lia';
export default function Sidebar({ toggleMobile }: { toggleMobile: () => void }) {
    const [query, setQuery] = useState('');
    const params = useParams();
    const list = Object.keys(Groups).filter((id) =>
        Groups[id].label.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <Stack className={classes.navbar} gap="xs" style={{ overflow: 'auto' }}>
            <TextInput
                placeholder="Search Location"
                mb="sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                leftSection={<LiaSearchLocationSolid size={16} />}
            />
            {list.map((id) => {
                const group = Groups[id];
                const link = '/' + group.id;
                const active = params.location === group.id;
                return (
                    <Link
                        key={id}
                        className={classes.link}
                        to={link}
                        data-highlight={active ? true : null}
                        onClick={toggleMobile}
                    >
                        <Text truncate>{group.label}</Text>
                        <Text size="xs">{group.time}</Text>
                    </Link>
                );
            })}
        </Stack>
    );
}
