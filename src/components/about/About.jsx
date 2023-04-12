import React from 'react'
import { Container, Typography } from '@mui/material'

function About() {
    return (
        <Container maxWidth="xl" sx={{ padding: { xs: '5em 1em 0 1em', sm: '5em 2em 0 2em', md: '0 8em 0 8em', lg: '0 20em 4em 20em' }, marginTop: '-5em', textAlign: "justify" }}>
            <Typography component='p' sx={{ paddingBottom: "1em" }}>Hello, I'm Neelam Chavan, a skilled self-taught front-end web developer with a non-IT background. With 2 years of experience in this field, I am now seeking a full-time role to enhance my skills further while contributing to software products.</Typography>

            <Typography component='p' sx={{ paddingBottom: "1em" }}>Prior to discovering my interest in front-end web development, I worked as a PCB Designer for approximately six years. Initially, I started with HTML & CSS and then progressed towards JavaScript & jQuery to create interactive websites. My journey has led me to master the ReactJs framework, which I got to explore while working for a startup for a year. Later, I joined another company, where I gained experience working with a team and developed as a professional. I have also worked as a part-time freelancer to build websites for local businesses and helped them establish their online presence.</Typography>

            <Typography component='p' sx={{ paddingBottom: "1em" }}>I am thrilled to keep advancing on my learning journey and offer my skills and expertise to new projects. At present, I am actively seeking a full-time role as a front-end developer to leverage my passion and abilities in creating innovative solutions. I am eager to join a dynamic team where I can collaborate, learn from my peers, and contribute to the development of top-notch products.</Typography>
        </Container>
    )
}

export default About