import React, {useEffect, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Chip, Container, Divider, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {API, graphqlOperation} from "aws-amplify";
import {listReviews} from "../graphql/queries";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    block: {
        marginTop: "40px"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    test: {
        margin: "0 40px"
    }
}));
const ReviewsListPage = () => {
    const classes = useStyles();
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        getReviews();
    }, [])
    const getReviews = async () => {
        try {
            const revData = await API.graphql(graphqlOperation(listReviews));
            const rv = revData.data.listReviews.items;
            setReviews(rv)
            console.log('REVIEWS', rv);
        } catch (err) {
            console.log('Error', err)
        }
    }
    return (<Container className={classes.block} fixed>
        <Typography component="h1" variant="h4" align="center">
            Reviews submitted by the user ...
        </Typography>
        {reviews.map(el => (
            <Accordion key={el.id}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>RID: {el.id}; AppName: {el.appName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.test}>
                        <Typography>
                            <p>Components to Change:</p>
                            {el.revComponents && el.revComponents.length && el.revComponents.map(c => (
                                <Chip label={c} variant="outlined"/>
                            ))}
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            <p>Overall Standards Done:</p>
                            {el.stdOverall && el.stdOverall.length && el.stdOverall.map(c => (
                                <Chip label={c} variant="outlined"/>
                            ))}
                        </Typography>
                    </div>

                </AccordionDetails>
            </Accordion>
        ))

        }

    </Container>)
}

export default ReviewsListPage;