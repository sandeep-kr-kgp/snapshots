import { Card, Text } from '@mantine/core';
export default function Intro() {
    return (
        <Card withBorder radius="lg" py="sm" px="md">
            <Text size="md" fw="bold">
                Hi, my name is Sandeep
            </Text>
            <Text c="dimmed">
                This is my exploration journey in pictures — a personal collection of adventures,
                landscapes, and some stories.
            </Text>
            <Text size="sm" c="dimmed">
                Last updated at : 05 Feb 2025
            </Text>
        </Card>
    );
}
