import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { TbSunHigh, TbMoonStars } from 'react-icons/tb';
export default function UserMenu() {
    const { setColorScheme } = useMantineColorScheme();
    const theme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const darkTheme = theme === 'dark';
    const ThemeIcon = darkTheme ? TbSunHigh : TbMoonStars;
    return (
        <ActionIcon
            size="md"
            variant="default"
            onClick={() => setColorScheme(darkTheme ? 'light' : 'dark')}
        >
            <ThemeIcon size={16} />
        </ActionIcon>
    );
}
