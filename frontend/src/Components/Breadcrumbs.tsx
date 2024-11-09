import { useParams, Link } from 'react-router-dom';
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
function Breadcrumbs() {
    const params = useParams();
    const baseId = params.base_id;
    const tableId = params.table_id;
    return (
        <MantineBreadcrumbs>
            {baseId && (
                <Anchor to={`/base/${baseId}`} c="dimmed" component={Link}>
                    {baseId}
                </Anchor>
            )}
            {tableId && (
                <Anchor to={`/base/${baseId}/${tableId}/overview`} c="dimmed" component={Link}>
                    {tableId}
                </Anchor>
            )}
        </MantineBreadcrumbs>
    );
}

export default Breadcrumbs;
