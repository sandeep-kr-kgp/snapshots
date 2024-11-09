import { Center, Loader as MantineLoader, LoaderProps } from '@mantine/core';

function Loader(props: LoaderProps) {
    return (
        <Center>
            <MantineLoader size="sm" {...props} />
        </Center>
    );
}

export default Loader;
