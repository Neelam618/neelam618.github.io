import { Container, Grid } from '@mui/material'
import React from 'react'
import Girl from "../../images/girl.png"
import styled from 'styled-components'
import Skills from '../Skills'

function Home() {
    return (
        <Container maxWidth="lg">
            <Grid container alignItems="center" justifyContent="center">
                <Para item md={6}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quam, corrupti laborum maxime mollitia necessitatibus odit, quis, nihil perferendis sit eaque inventore dicta vitae voluptas aspernatur quod esse incidunt enim?</Para>
                <Grid item md={6}><Image src={Girl} alt="" /></Grid>
            </Grid>
        </Container>
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



