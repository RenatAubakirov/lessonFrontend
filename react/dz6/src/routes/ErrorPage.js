import { useRouteError } from "react-router-dom";
import { Typography } from '@mui/material';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <Typography variant='h1'>Ошибка!!!</Typography>
            <Typography variant="body2">Что-то пошло не по плану.</Typography>
            <Typography variant="body2"><i>{error.status} {error.statusText || error.message}</i></Typography>
        </div>
    );
}