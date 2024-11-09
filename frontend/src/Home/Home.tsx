import { Avatar, Text, Flex } from '@mantine/core';
import profile from '/profile.webp';
export default function Home() {
    return (
        <Flex direction="column" mt="20vh" align="center">
            <Avatar src={profile} size={200} radius="lg" imageProps={{ loading: 'lazy' }} />
            <Text size="xl" fw="bold" ta="center" mt="md">
                Hi, my name is Sandeep
            </Text>
            <Text size="md" c="dimmed" ta="center" mt="0.25rem" maw="30rem">
                This is my journey in pictures — a personal collection of adventures, landscapes,
                and stories. Join me as I relive the magic of each place I've explored, so far.
            </Text>
        </Flex>
    );
}
