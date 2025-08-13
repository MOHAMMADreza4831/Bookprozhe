import { Container, Stack, Typography } from "@mui/material"



const Header = () => {
    return (
        <Stack className="bg-primary-main"
            sx={{
                height: '65px'
            }}
        >
            <Container maxWidth='lg' sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                <Typography variant="h5" className="text-white">Header</Typography>
            </Container>
        </Stack>
    )
}

export default Header;