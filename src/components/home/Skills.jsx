import { Box, Chip, Container, Typography } from '@mui/material'
import React from 'react'
import Waves from "../../images/skillsbg.svg"

const skills = ["React", "JavaScript", "Next.js", "Typescript", "HTML", "CSS", "Bootstrap", "jQuery", "SASS", "Git", "Tailwind CSS", "Material UI"]

function Skills() {
    return (
        <Box sx={{ backgroundImage: `url(${Waves})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: { xs: '1em 0', sm: '1.5em 0', md: '1em 1em', marginBottom: "6em", height: "300px" } }}>
            <Container >
                <Typography variant="h5" component="h3">Skills</Typography>
                <Box sx={{ background: "#fff", borderRadius: "10px", padding: { xs: "1em", md: "2em 4em" }, margin: "1em 0" }}>
                    <Box sx={{ display: 'flex', gap: "20px", flexWrap: "wrap" }}>
                        {
                            skills.map(skill => {
                                return (
                                    <Chip label={skill} color="primary" />
                                )
                            })
                        }
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default Skills
