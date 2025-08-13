import { Container, Stack, Typography } from "@mui/material"



const Footer = () => {
    return (
        <Stack sx={{ backgroundColor: theme => theme.palette.primary.main, height: '50px' }}>
            <Container maxWidth='lg' sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                <Typography variant="h5" color="white">Footer</Typography>

            </Container>
        </Stack>
    )
}

export default Footer;