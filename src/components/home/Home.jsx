import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Girl from "../../images/girl.svg"
import styled from 'styled-components'
import Skills from './Skills'

function Home() {
    return (
        <>
            <Container maxWidth="lg" sx={{ height: { md: "66vh" }, marginTop: { md: "-10em", lg: "-12em" } }}>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item md={6}>
                        <Typography sx={{ lineheight: '1.75rem', letterSpacing: '0.6px' }}>
                            Hello there!<br /><br /> I'm Neelam, a skilled self-taught front-end web developer with a passion for creating innovative solutions.<br />Explore my portfolio and get in touch to learn more about my skills and expertise.
                        </Typography>
                    </Grid>
                    <Grid item md={6}><Image src={Girl} alt="" /></Grid>
                </Grid>
            </Container >
            < Skills />
        </>
    )
}

export default Home

const Image = styled.img`
    width: 100%
`


