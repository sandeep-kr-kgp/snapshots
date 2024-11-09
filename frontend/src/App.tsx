import './App.css';
import Sidebar from './Sidebar/Sidebar';
import { AppShell, Flex, Group, rem, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import UserMenu from './Components/UserMenu';
import Logo from './Components/Logo';
import Breadcrumbs from './Components/Breadcrumbs';
function App() {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    return (
        <div className="app">
            <AppShell
                header={{ height: 50 }}
                navbar={{
                    width: { base: rem(200), md: rem(250), lg: rem(300) },
                    breakpoint: 'sm',
                    collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
                }}
                w="100%"
            >
                <AppShell.Header>
                    <Group h="100%" px="md" py="sm" align="center">
                        <Flex w="100%" justify="space-between">
                            <Group align="center">
                                <Burger
                                    size="sm"
                                    opened={mobileOpened}
                                    onClick={toggleMobile}
                                    hiddenFrom="sm"
                                />
                                <Burger
                                    size="sm"
                                    opened={desktopOpened}
                                    onClick={toggleDesktop}
                                    visibleFrom="sm"
                                />
                                <Logo />
                                <Breadcrumbs />
                            </Group>
                            <Group align="center">
                                <UserMenu />
                            </Group>
                        </Flex>
                    </Group>
                </AppShell.Header>
                <AppShell.Navbar p="0">
                    <Sidebar toggleMobile={toggleMobile} />
                </AppShell.Navbar>
                <AppShell.Main className="content">
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </div>
    );
}

export default App;
