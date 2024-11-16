import { Card, Text } from '@mantine/core';
export default function Intro() {
    return (
        <Card withBorder radius="lg" py="xs" px="sm">
            <Text size="md" fw="bold">
                Hi, my name is Sandeep
            </Text>
            <Text c="dimmed">
                This is my exploration journey in pictures — a personal collection of adventures,
                landscapes, and some stories.
            </Text>
            {/* <Text>Total Images : {GetCount()}</Text> */}
        </Card>
    );
}
