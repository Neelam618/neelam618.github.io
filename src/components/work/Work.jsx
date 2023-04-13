import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/system';
import SchemaGenerator from "../../images/schema-generator.png";
import FinanceTracker from "../../images/finance-tracker.png";
import RecipeFinder from "../../images/recipe.png";
import MovieFight from "../../images/movie-fight.png";
import ExpenseTracker from "../../images/expensetracker.png";
import NoteTaker from "../../images/notetaker.png";
import BrainToPocket from "../../images/brain2pocket.png"
import StyleStage from "../../images/Style-Stage.png"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import GitHubIcon from '@mui/icons-material/GitHub';
import NearMeIcon from '@mui/icons-material/NearMe';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const workList = [
    {
        name: "JSON Generator",
        img: `${SchemaGenerator}`,
        description: { line1: "Built an app for generating the JSON schema with drag and drop feature", line2: "JSON schema generator will give schema and uiSchema JSON objects containing all the properties required to render a form", line3: "Built with react and react-jsonschema-form library" },
        tags: ["React", "react-jsonschema-form"],
        code: "https://github.com/Neelam618/rjsf-generator",
        live: "https://rjsf-generator.netlify.app/"
    },
    {
        name: "Finance Tracker",
        img: `${FinanceTracker}`,
        description: { line1: "Built an app for storing daily expense data.", line2: "Worked with firestore for storing data in the backend and firebase auth for user authentication" },
        tags: ["React", "firebase"],
        code: "https://github.com/Neelam618/finance-tracker-react-firebase",
        live: "https://mymoney-finance-tracker.web.app/login"
    },
    {
        name: "Recipe Finder App",
        img: `${RecipeFinder}`,
        description: { line1: "Built an app for finding the recipes around the globe based on any ingredient", line2: "Type in the ingredient in the search box and all the recipes including that ingredient will be rendered", line3: "Integrated API for recipe search using https://www.edamam.com/" },
        tags: ["React"],
        code: "https://github.com/Neelam618/search-recipe-app-react",
        live: "https://recipesearch-app.netlify.app/"
    },
    {
        name: "Movie Fight",
        img: `${MovieFight}`,
        description: { line1: "Built an app for comparing two movies depending on the movie database", line2: "Integrated API for getting the movie using an open movie database OMDb API", line3: "Built with vanilla JS" },
        tags: ["Javascript"],
        code: "https://github.com/Neelam618/movie-fight",
        live: "https://neelam618.github.io/movie-fight/"
    },
    {
        name: "Expense Tracker",
        img: `${ExpenseTracker}`,
        description: { line1: "Built a web app to track daily expenses, with totals calculated automatically.", line2: "Made it easy to search and sort through the expenses by using a 3rd party library called DataTables.js", line3: "Designed and implemented all the features & wrote logic in JavaScript." },
        tags: ["Javascript", "DataTables.js"],
        code: "https://github.com/Neelam618/Expense-tracker",
        live: "https://neelam618.github.io/Expense-tracker/"
    },
    {
        name: "Note Taker",
        img: `${NoteTaker}`,
        description: { line1: "Built a note-taking web application for creating and managing simple notes.", line2: "Synced the notes created by the user in browser's localStorage.", line3: "Designed and implemented all the features from scratch using HTML, CSS, JavaScript & Bootstrap." },
        tags: ["Javascript", "Bootstrap"],
        code: "https://github.com/Neelam618/Note-Taker",
        live: "https://neelam618.github.io/Note-Taker/"
    },
    {
        name: "Personal Portfolio",
        img: `${NoteTaker}`,
        description: { line1: "Designed, developed and tested a nice & clean portfolio website to share my work and thoughts", line2: "Built using HTML, SASS and Bootstrap" },
        tags: ["HTML", "SASS", "Bootstrap"],
        code: "https://github.com/Neelam618/neelam618.github.io",
        live: "https://neelam618.github.io/"
    },
    {
        name: "Brain2Pocket",
        img: `${BrainToPocket}`,
        description: { line1: "Built a static website for a small consulting business to improve its web presence", line2: "Used a Bootstrap template to quickly build a good looking, performant website as per the client's requirements.", line3: "Customized the website in various ways as per the client's feedback." },
        tags: ["HTML", "Bootstrap"],
        code: "https://github.com/Neelam618/Brain-in-Pocket-Website",
        live: "https://neelam618.github.io/Brain-in-Pocket-Website/"
    },
    {
        name: "Style Stage",
        img: `${StyleStage}`,
        description: { line1: "Contributed to stylestage.dev by writing a custom modern CSS stylesheet.", line2: "Featured on https://stylestage.dev/styles/" },
        tags: ["HTML"],
        code: "https://github.com/Neelam618/Style-Stage",
        live: "https://stylestage.dev/styles/floral-vibes/"
    },
]

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Work() {
    const [expanded, setExpanded] = useState({});
    const theme = useTheme();

    const handleExpandClick = (name) => {
        setExpanded({ ...expanded, [name]: !expanded[name] });
    };

    return (
        <Container maxWidth="xl" sx={{ padding: { xs: '1em', sm: '1.5em', md: '2.5em 1em', lg: '4em 2em' }, marginTop: { md: "-10em", lg: "-12em" } }}>
            <Grid container justifyContent="center"
                alignItems="center" sx={{ padding: { lg: "2em" } }} >
                {
                    workList.map((work, i) => {
                        return (
                            <Grid item sm={6} md={4} lg={3} key={i}>
                                <Card raised sx={{ margin: "1em", minHeight: "350px" }} >
                                    <CardHeader
                                        title={work.name}
                                    >
                                        <Chip label="React" color="primary" />
                                    </CardHeader>
                                    <CardMedia
                                        component="img"
                                        image={work.img}
                                        alt={work.name}
                                    />
                                    <CardContent>
                                        <Box sx={{ display: 'flex', gap: '10px' }}>
                                            {
                                                work.tags.map((tag, i) => {
                                                    return (
                                                        <Chip key={tag + i} label={tag} variant='outlined' color="primary" size='small' />
                                                    )
                                                })
                                            }
                                        </Box>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="view code" title='view code'>
                                            <Link to={work.code} target="_blank" style={{ color: theme.palette.primary.main }}>
                                                <GitHubIcon />
                                            </Link>
                                        </IconButton>
                                        <IconButton aria-label="launch site" title='launch site'>
                                            <Link to={work.live} target="_blank" style={{ color: theme.palette.primary.main }}>
                                                <NearMeIcon />
                                            </Link>
                                        </IconButton>
                                        <ExpandMore
                                            expand={expanded}
                                            onClick={() => handleExpandClick(work.name)}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded[work.name]} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            {
                                                Object.keys(work.description).map((lineNo, i) => {
                                                    return (
                                                        <List dense={true} key={lineNo + i}>
                                                            <ListItem
                                                                sx={{ padding: 0 }}
                                                            >
                                                                <ListItemText
                                                                    primary={work.description[lineNo]}
                                                                />
                                                            </ListItem>
                                                        </List>
                                                    )
                                                })
                                            }

                                        </CardContent>
                                    </Collapse>
                                </Card >
                            </Grid>
                        )
                    })
                }
            </Grid>

        </Container >

    )
}

export default Work