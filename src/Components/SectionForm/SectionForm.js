import React, {useReducer, useState} from "react";
import {Checkbox, FormControlLabel, IconButton, makeStyles, MenuItem, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import {API, graphqlOperation} from "aws-amplify";
import {createDataModel, createOverall, createUserInterface} from "../../graphql/mutations";
import {useHistory} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '60ch',
    },
    sectionWrap: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: 0,
    },
    sectionTitle: {
        marginBottom: theme.spacing(2),
    },
    fieldSection: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    fieldBody: {
        marginTop: 0,
        marginBottom: 0
    },
    fieldHeader: {
        margin: 0,
        padding: 0
    },
    fieldLabel: {
        color: 'rgba(0,0,0,.5)',
        fontSize: '1.1em',
        paddingBottom: 0
    },

    flexWrap: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    fileInput: {
        display: 'none',
    },
    formCta: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        width: '600px',
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

const overallReducer = (state, action) => {
    if (action.reset) {
        return {
            name: '',
            value: ''
        }
    }
    return {
        ...state,
        [action.name]: action.value
    }
}
const modelReducer = (state, action) => {
    if (action.reset) {
        return {
            name: '',
            value: ''
        }
    }
    return {
        ...state,
        [action.name]: action.value
    }
}
const uiReducer = (state, action) => {
    if (action.reset) {
        return {
            name: '',
            value: ''
        }
    }
    return {
        ...state,
        [action.name]: action.value
    }
}

const SectionForm = () => {
    let history = useHistory();
    const [overallGroup, setOverall] = useReducer(overallReducer, {});
    const [modelGroup, setModel] = useReducer(modelReducer, {});
    const [uiGroup, setUI] = useReducer(uiReducer, {});
    const classes = useStyles();

    const handleOverallChange = e => {
        setOverall({
            name: e.target.name,
            value: e.target.value
        })
    }
    const handleModelChange = e => {
        setModel({
            name: e.target.name,
            value: e.target.value
        })
    }
    const handleInterfaceChange = e => {
        setUI({
            name: e.target.name,
            value: e.target.value
        })
    }
    const handleOverallSubmit = async e => {
        e.preventDefault();
        const payload = {
            label: overallGroup.overallLabel,
            value: overallGroup.overallVal
        }
        console.log('Payl', payload);
        try {
           const result = await API.graphql(graphqlOperation(createOverall, {input: payload}));
           console.log('Created Overall', result.data.createOverall.id);
           setOverall({reset: true})
            if (result) {
                history.push('/home');
            }
        } catch (err) {
            console.log('Err', err)
        }

    }
    const handleModelSubmit = async e => {
        e.preventDefault();
        const payload = {
            label: modelGroup.modelLabel,
            value: modelGroup.modelVal
        }
        console.log('Payl', payload);
        try {
            const result = await API.graphql(graphqlOperation(createDataModel, {input: payload}));
            console.log('Created Data', result.data.createDataModel.id);
            setOverall({reset: true})
            if (result) {
                history.push('/home');
            }
        } catch (err) {
            console.log('Err', err)
        }
    }
    const handleUISubmit = async e => {
        e.preventDefault();
        try {
            const payload = {
                label: uiGroup.uiLabel,
                value: uiGroup.uiVal
            }
            const result = await API.graphql(graphqlOperation(createUserInterface, {input: payload}));
            console.log('Created Interface', result.data.createUserInterface.id);
            setUI({reset: true});
            if (result) {
                history.push('/home');
            }
        } catch (err) {
            console.log('Err', err)
        }
    }

    return (
        <Paper className={classes.paper}>
            <Typography component="h4" variant="h4" align="left">
                Add Overall Standard
            </Typography>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleOverallSubmit}>
                {/*<div className={classes.root}>*/}
                <div>
                    <TextField
                        id="overallLabel"
                        name="overallLabel"
                        label="Label"
                        onChange={handleOverallChange}
                        value={overallGroup['overallLabel'] || ''}
                        style={{margin: 8}}
                        placeholder="type"
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="overallVal"
                        name="overallVal"
                        label="Value"
                        onChange={handleOverallChange}
                        value={overallGroup['overallVal'] || ''}
                        style={{margin: 8}}
                        placeholder="type"
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <div className={classes.formCta}>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit" >Submit</Button>
                    </div>
                </div>
            </form>
            <Typography component="h4" variant="h4" align="left">
                Add Data Model Standard
            </Typography>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleModelSubmit}>
                {/*<div className={classes.root}>*/}
                <div>

                    <TextField
                        id="modelLabel"
                        name="modelLabel"
                        label="Label"
                        onChange={handleModelChange}
                        value={modelGroup['modelLabel'] || ''}
                        style={{margin: 8}}
                        placeholder="type"
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="r2value"
                        name="modelVal"
                        label="Value"
                        onChange={handleModelChange}
                        value={modelGroup['modelVal'] || ''}
                        style={{margin: 8}}
                        placeholder="type"
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <div className={classes.formCta}>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit" >Submit</Button>
                    </div>
                </div>
            </form>
            <Typography component="h4" variant="h4" align="left">
                Add Interface Standard
            </Typography>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleUISubmit}>
                {/*<div className={classes.root}>*/}
                <div>
                    <TextField
                        id="uiLabel"
                        name="uiLabel"
                        label="Label"
                        onChange={handleInterfaceChange}
                        value={uiGroup['uiLabel'] || ''}
                        style={{margin: 8}}
                        placeholder="type"
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="uiVal"
                        name="uiVal"
                        label="Value"
                        onChange={handleInterfaceChange}
                        value={uiGroup['uiVal'] || ''}
                        style={{margin: 8}}
                        placeholder="type"
                        className={classes.textField}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <div className={classes.formCta}>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit" >Submit</Button>
                    </div>
                </div>
            </form>

        </Paper>
    )
}
export default SectionForm;
