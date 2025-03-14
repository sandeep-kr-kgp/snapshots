import { Affix, Button, FileInput, Flex, Modal, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import axios from 'axios';
import { useState } from 'react';
import isDev from '../Utils/isDev';
function AddImage() {
    const [loading, setLoading] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);
    const [group, { toggle, close: groupFalse }] = useDisclosure(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>();
    if (!isDev) return <></>;
    const handleSubmit = () => {
        const formData = new FormData();
        selectedFiles?.forEach((file) => {
            formData.append('images', file); // 'images' is the name expected by the server
        });
        setLoading(true);
        axios
            .post(`/backend/upload/${group.toString()}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(close)
            .catch(console.log)
            .finally(() => setLoading(false));
    };
    const reset = () => {
        setSelectedFiles([]);
        groupFalse();
        close();
    };
    return (
        <>
            <Modal
                opened={opened}
                onClose={reset}
                withCloseButton={false}
                closeOnClickOutside={false}
                closeOnEscape={false}
            >
                <FileInput
                    clearable
                    multiple
                    label="Select Images"
                    accept="image/png,image/jpeg, image/webp"
                    onChange={(files) => setSelectedFiles(files)}
                />
                <Switch label="Group as carousel" mt="md" checked={group} onChange={toggle} />
                <Flex justify="end" mt="xl" gap="md">
                    <Button variant="default" onClick={close} disabled={loading}>
                        Cancel
                    </Button>
                    <Button disabled={!selectedFiles} onClick={handleSubmit} loading={loading}>
                        Upload
                    </Button>
                </Flex>
            </Modal>

            <Affix position={{ bottom: '1vh', left: 'calc(50vw - 10rem)' }}>
                <Button size="md" onClick={open} w="20rem">
                    Add Image
                </Button>
            </Affix>
        </>
    );
}

export default AddImage;
