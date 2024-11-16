import { ActionIcon, Button, FileInput, Flex, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import axios from 'axios';
import { useState } from 'react';
import isDev from '../Utils/isDev';
import { RiImageAddLine } from 'react-icons/ri';

function AddToCarousel({ id }: { id: string }) {
    const [loading, setLoading] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>();
    if (!isDev) return <></>;
    const handleSubmit = () => {
        const formData = new FormData();
        selectedFiles?.forEach((file) => {
            formData.append('images', file); // 'images' is the name expected by the server
        });
        setLoading(true);
        axios
            .post(`/backend/addToPost/${id}`, formData, {
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
                <Flex justify="end" mt="xl" gap="md">
                    <Button variant="default" onClick={close} disabled={loading}>
                        Cancel
                    </Button>
                    <Button disabled={!selectedFiles} onClick={handleSubmit} loading={loading}>
                        Upload
                    </Button>
                </Flex>
            </Modal>

            <ActionIcon variant="default" size="lg" onClick={open}>
                <RiImageAddLine size={16} />
            </ActionIcon>
        </>
    );
}

export default AddToCarousel;
