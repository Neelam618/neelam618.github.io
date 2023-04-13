import { Box, Chip, Container, Typography } from '@mui/material'
import React from 'react'
import Waves from "../../images/skillsbg.svg"

function Skills() {
    return (
        <Box sx={{ backgroundImage: `url(${Waves})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: { xs: '1em 0', sm: '1.5em 0', md: '2.5em 1em', lg: '4em 1em', marginBottom: "6em", height: "300px" } }}>
            <Container >
                <Typography variant="h5" component="h3">Skills</Typography>
                <Box sx={{ background: "#fff", borderRadius: "10px", padding: { xs: "1em", md: "2em 4em" }, margin: "1em 0" }}>
                    <Box sx={{ display: 'flex', gap: "20px", flexWrap: "wrap" }}>
                        <Chip label="React" color="primary" />
                        <Chip label="JavaScript" color="primary" />
                        <Chip label="HTML" color="primary" />
                        <Chip label="CSS" color="primary" />
                        <Chip label="Typescript" color="primary" />
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default Skills
