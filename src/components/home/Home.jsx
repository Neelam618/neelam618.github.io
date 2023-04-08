import { Container, Grid } from '@mui/material'
import React from 'react'
import Girl from "../../images/girl.png"
import styled from 'styled-components'
import Skills from '../Skills'
import Box from '@mui/material/Box';
import Waves from "../../images/wave.svg";
import WavesMobile from "../../images/wave2.svg"
import Navbar from '../Navbar'

function Home() {
    return (
        <>
            <Box sx={{ backgroundImage: { xs: `url(${WavesMobile})`, md: `url(${Waves})` }, backgroundRepeat: "no-repeat", padding: { xs: '1em 0', sm: '1.5em 0', md: '2.5em 1em', lg: '4em 1em' } }}>
                <Navbar />
                <Container maxWidth="lg">
                    <Grid container alignItems="center" justifyContent="center">
                        <Para item md={6}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quam, corrupti laborum maxime mollitia necessitatibus odit, quis, nihil perferendis sit eaque inventore dicta vitae voluptas aspernatur quod esse incidunt enim?</Para>
                        <Grid item md={6}><Image src={Girl} alt="" /></Grid>
                    </Grid>
                </Container>
            </Box>
            <Skills />
        </>
    )
}

export default Home

const Image = styled.img`
    width: 100%
`

const Para = styled(Grid)`
    font-size: 1.125rem;
    line-height: 1.75rem;
    letter-spacing: 0.6px;
`



