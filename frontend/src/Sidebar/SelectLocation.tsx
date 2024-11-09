import { Popover, Text, Button } from '@mantine/core';
import { VscChevronDown, VscLocation } from 'react-icons/vsc';
import Sidebar from './Sidebar';
import { useDisclosure } from '@mantine/hooks';
export default function SelectLocation() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Popover
            width={300}
            position="bottom"
            withArrow
            shadow="md"
            opened={opened}
            onClose={close}
        >
            <Popover.Target>
                <Button
                    hiddenFrom="lg"
                    visibleFrom="sm"
                    variant="default"
                    size="xs"
                    leftSection={<VscLocation size={16} />}
                    rightSection={<VscChevronDown size={16} />}
                    onClick={open}
                >
                    <Text size="sm"> Location</Text>
                </Button>
            </Popover.Target>
            <Popover.Dropdown p={0}>
                <Sidebar toggleMobile={close} />
            </Popover.Dropdown>
        </Popover>
    );
}
