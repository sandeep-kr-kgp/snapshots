import { Affix, Button, FileInput, Flex, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import isDev from '../Utils/isDev';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function AddImage() {
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>();
    const location = params.location;
    console.log(location);
    if (!isDev) return <></>;
    const handleSubmit = () => {
        const formData = new FormData();
        selectedFiles?.forEach((file) => {
            formData.append('images', file); // 'images' is the name expected by the server
        });
        setLoading(true);
        axios
            .post(`/backend/upload/${location}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(close)
            .catch(console.log)
            .finally(() => setLoading(false));
    };
    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
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

            <Affix position={{ bottom: '0.25rem', right: '0.25rem' }}>
                <Button size="md" onClick={open}>
                    Add Image
                </Button>
            </Affix>
        </>
    );
}

export default AddImage;
