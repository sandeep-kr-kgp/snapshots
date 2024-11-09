import { Group, Text } from '@mantine/core';
import SelectLocation from '../Sidebar/SelectLocation';
function Logo() {
    return (
        <Group align="center">
            <Text fw={500} c="blue">
                Snapshots
            </Text>
            <SelectLocation />
        </Group>
    );
}

export default Logo;
