import React, {useEffect, useReducer, useState} from "react";
import {Amplify, Storage} from "aws-amplify";
import {
    Checkbox,
    FormControlLabel, IconButton,
    makeStyles,
    MenuItem,
    TextField
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { AmplifyS3ImagePicker } from '@aws-amplify/ui-react';
import { AmplifyS3TextPicker } from '@aws-amplify/ui-react';
import {API, graphqlOperation} from "aws-amplify";
import {listDataModels, listOveralls, listReviews, listUserInterfaces} from "../../graphql/queries";
import {createReview} from "../../graphql/mutations";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '50ch',
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
        marginTop: theme.spacing(3),
    }
}));

const platforms_in_use = [
    {label: 'Teradata', value: '1'},
    {label: 'SQL Server', value: '2'},
    {label: 'DB2', value: '3'},
    {label: 'CSV', value: '4'},
    {label: 'Excel', value: '5'},
    {label: 'Oracle', value: '6'},
    {label: 'Hadoop', value: '7'},
]

const review_overall = [
    {label: 'Overall 1', value: '1'},
    {label: 'Overall 2', value: '2'},
    {label: 'Overall 3', value: '3'},
    {label: 'Overall 4', value: '4'},
    {label: 'Overall 5', value: '5'},
]

const review_datamodel = [
    {label: 'Data model 1', value: '1'},
    {label: 'Datamodel  2', value: '2'},
    {label: 'Script 3', value: '3'},
    {label: 'Data model and script 4', value: '4'},
]

const review_interface = [
    {label: 'Review Interface Stanard 1', value: '1'},
    {label: 'Interface Standard 2', value: '2'},
    {label: 'Interface Standard 3', value: '3'},
]

const review_threshold = [
    {label: 'threshold standard 1', value: '1'},
    {label: 'threshold standard 2', value: '2'},
    {label: 'threshold standard 3', value: '3'},
]

const flagged_overall = [
    {label: 'Flagged Overall 1', value: '1'},
    {label: 'Flagged Overall 2', value: '2'},
    {label: 'Flagged Overall 3', value: '3'},
    {label: 'Flagged Overall 4', value: '4'},
]

const flagged_ds = [
    {label: 'Flagged Data Source 1', value: '1'},
    {label: 'Flagged Data Source 2', value: '2'},
    {label: 'Flagged Data Source 3', value: '3'},
]

const flagged_dm = [
    {label: 'Flagged Data Model 1', value: '1'},
    {label: 'Flagged Data model 2', value: '2'},
    {label: 'Flagged Data model 3', value: '3'},
]

const flagged_ui = [
    {label: 'ui 1', value: '1'},
    {label: 'Flagged interface 2', value: '2'},
    {label: 'Flagged ui 3', value: '3'},
]


const flagged_design = [
    {label: 'Flagged design 1', value: '1'},
    {label: 'Flagged Design 2', value: '2'},
    {label: 'Flagged Design 3', value: '3'},
    {label: 'Flagged Design 4', value: '4'},
    {label: 'Temp Flagged', value: '5'},
]

const flagged_script = [
    {label: 'Flagged script 1', value: '1'},
    {label: 'Flagged script 2', value: '2'},
]

const briefs = [
    {label: 'Brief 1', value: '1'},
    {label: 'Brief 2', value: '2'},
    {label: 'Brief 3', value: '3'},
    {label: 'Brief-4', value: '4'},
];

const lobs = [
    {label: 'lob 1', value: '1'},
    {label: 'lob 2', value: '2'},
    {label: 'line of business N', value: '3'},
    {label: 'lob fout', value: '4'},
];

const items = [
    {label: 'New', value: '1'},
    {label: 'Ready for review', value: '2'},
    {label: 'On hold', value: '3'},
    {label: 'Reviewed', value: '4'},
];

const statusArr = [
    {label: 'New', value: '1'},
    {label: 'Ready for review', value: '2'},
    {label: 'On hold', value: '3'},
    {label: 'Reviewed', value: '4'},
];

const extensions = [
    {label: 'Extension 1', value: '1'},
    {label: 'Extension 2', value: '2'},
    {label: 'Ext 3', value: '3'},
    {label: 'Ext 4', value: '4'},
];

const changed_components = [
    {label: 'QVF', value: '1'},
    {label: 'QVD Builder', value: '2'},
    {label: 'Security', value: '3'},
    {label: 'DVS', value: '4'},
    {label: 'EndUser Feeds', value: '5'},
    {label: 'QVD', value: '6'},
    {label: 'Variables', value: '7'},
    {label: 'Other', value: '8'},
];

const approvals = [
    {label: 'Root Admin', value: '1'},
    {label: 'CIO', value: '2'},
    {label: 'OS', value: '3'},
    {label: 'Perfomance Testing', value: '4'},
    {label: 'Solution Architect', value: '5'},
]

const ctgs = [
    {label: 'Catalog 1', value: '1'},
    {label: 'Catalog 2', value: '2'},
    {label: 'Catalog 3', value: '3'},
    {label: 'Catalog 4', value: '4'},
];

const formReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}
const catalogReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const extensionReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const componentReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const reviewOverallReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}
const flagOverallReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const reviewDatamodelReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}
const flagDatamodelReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const flagDataSourceReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const reviewInterfaceReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const reviewThresholdReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const flagInterfaceReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const flagDesignReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}
const flagScriptReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const platformsReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}
const approvalReducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const ReviewForm = () => {
    let history = useHistory();
    // const [imageUpload, setImageUpload] = useState('')
    const [selectedFile, setFile] = useState('')
    const [overalls, setOveralls] = useState([])
    const [datamodels, setDataModels] = useState([])
    const [interfaces, setUI] = useState([])
    const [formData, setForm] = useReducer(formReducer, {
        qsBrief: ''
    })
    const [catalog, setCatalog] = useReducer(catalogReducer, {})
    const [ext, setExt] = useReducer(extensionReducer, {})
    const [platformInUse, setPlatforms] = useReducer(platformsReducer, {})
    const [component, setComponent] = useReducer(componentReducer, {})
    const [approval, setApproval] = useReducer(approvalReducer, {})
    const [rewOverall, setRewOverall] = useReducer(reviewOverallReducer, {})
    const [rewDataModel, setRewDataModel] = useReducer(reviewDatamodelReducer, {})
    const [rewInterface, setRewInterface] = useReducer(reviewInterfaceReducer, {})
    const [rewThreshold, setRewThreshold] = useReducer(reviewThresholdReducer, {})
    const [flagOverall, setFlagOverall] = useReducer(flagOverallReducer, {})
    const [flagDS, setFlagDS] = useReducer(flagDataSourceReducer, {})
    const [flagDM, setFlagDM] = useReducer(flagDatamodelReducer, {})
    const [flagUI, setFlagUI] = useReducer(flagInterfaceReducer, {})
    const [flagDesign, setFlagDesign] = useReducer(flagDesignReducer, {})
    const [flagScript, setFlagScript] = useReducer(flagScriptReducer, {})

    const classes = useStyles();
    const [reviewStatus, setRevStatus] = useState('New');
    useEffect(() => {
        fetchReviews();
        getOveralls();
        getDataModels();
        getUIStandards();
    }, [])

    const fetchReviews = async () => {
        try {
            const revData = await API.graphql(graphqlOperation(listReviews));
            const reviews = revData.data.listReviews.items;
            console.log('REVIEWS', reviews);
        } catch (err) {
            console.log('Error', err)
        }
    }
    const getOveralls = async () => {
        try {
            const revData = await API.graphql(graphqlOperation(listOveralls));
            const data = revData.data.listOveralls.items;
            setOveralls(data);
        } catch (err) {
            console.log('Error', err)
        }
    }

    const getDataModels = async () => {
        try {
            const modData = await API.graphql(graphqlOperation(listDataModels));
            const data = modData.data.listDataModels.items;
            setDataModels(data);
        } catch (err) {
            console.log('Error', err)
        }
    }

    const getUIStandards = async () => {
        try {
            const modData = await API.graphql(graphqlOperation(listUserInterfaces));
            const data = modData.data.listUserInterfaces.items;
            setUI(data);
        } catch (err) {
            console.log('Error', err)
        }
    }

    const handlePlatformsChange = e => {
        setPlatforms({
            name: e.target.name,
            value: e.target.checked
        })
    }
    const handleComponentChange = e => {
        setComponent({
            name: e.target.name,
            value: e.target.checked
        })
    }
    const handleApprovalChange = e => {
        setApproval({
            name: e.target.name,
            value: e.target.checked
        })
    }
    const handleCatalogChange = e => {
        setCatalog({
            name: e.target.name,
            value: e.target.checked
        })
    }

    const handleExtChange = e => {
        setExt({
            name: e.target.name,
            value: e.target.checked
        })
    }
    const handleRewOverall = e => {
        setRewOverall({
            name: e.target.name,
            value: e.target.checked
        })
    }
    const handleRewDataModel = e => {
        setRewDataModel({
            name: e.target.name,
            value: e.target.checked
        })
    }

    const handleRewInterface = e => {
        setRewInterface({
            name: e.target.name,
            value: e.target.checked
        })
    }

    const handleRewThreshold = e => {
        setRewThreshold({
            name: e.target.name,
            value: e.target.checked
        })
    }

    const handleFlagOverall = e => {
        setFlagOverall({
            name: e.target.name,
            value: e.target.checked
        })
    }
    const handleFlagDM = e => {
        setFlagDM({
            name: e.target.name,
            value: e.target.checked
        })
    }

    const handleFlagDS = e => {
        setFlagDS({
            name: e.target.name,
            value: e.target.checked
        })
    }

    const handleFlagUI = e => {
        setFlagUI({
            name: e.target.name,
            value: e.target.checked
        })
    }
    const handleFlagDesign = e => {
        setFlagDesign({
            name: e.target.name,
            value: e.target.checked
        })
    }
    const handleFlagScript = e => {
        setFlagScript({
            name: e.target.name,
            value: e.target.checked
        })
    }

    const handleChange = (e) => {
        setForm({
            name: e.target.name,
            value: e.target.value
        })
    };
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        try {
            await Storage.put(file.name, file, {
                contentType: 'image/png',
                progressCallback(progress) {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                },
            });
        } catch (error) {
            console.log('Error uploading file: ', error);
        }
    }

    const handleFileUpload = () => {
        const formData = new FormData();
        // formData.append(
        //     "myFile", selectedFile, selectedFile.name
        // );

        // Details of the uploaded file
        console.log(selectedFile);
        console.log(formData);

        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
    };
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const payload = {
                targetDate: formData.targetDate || null,
                preparedBy: formData.preparedBy || null,
                reviewedBy: formData.reviewedBy,
                reviewerComments: formData.comment,
                createdAt: formData.createdAt,
                changeDesc: formData.changeDesc,
                timeLimitsDesc: formData.timeLimitsDesc,
                publishingLimitsDesc: formData.publishLimits,
                scaleProjected: formData.scaleProjected,
                appName: formData.appName,
                appId: formData.appId,
                appSize: formData.appSize,
                status: formData.revStatus,
                revLob: formData.lob,
                revBrief: formData.qsBrief,
                revCatalogs: Object.keys(catalog).filter(el => !!el),
                revQvfiles: [],
                revExtensions: Object.keys(ext).filter(el => !!el),
                revComponents: Object.keys(component).filter(el => !!el),
                revPlatforms: Object.keys(platformInUse).filter(el => !!el),
                revApprovals: Object.keys(approval).filter(el => !!el),
                stdOverall: Object.keys(rewOverall).filter(el => !!el),
                stdDatamodel: Object.keys(rewDataModel).filter(el => !!el),
                stdInterface: Object.keys(rewInterface).filter(el => !!el),
                stdThreshold: Object.keys(rewThreshold).filter(el => !!el),
                flaggedOverall: Object.keys(flagOverall).filter(el => !!el),
                flaggedDatasource: Object.keys(flagDS).filter(el => !!el),
                flaggedDatamodel: Object.keys(flagDM).filter(el => !!el),
                flaggedInterface:  Object.keys(flagUI).filter(el => !!el),
                flaggedDesign:  Object.keys(flagDesign).filter(el => !!el),
                flaggedScript:  Object.keys(flagScript).filter(el => !!el),
            }
            await API.graphql(graphqlOperation(createReview, {input: payload}))
            console.log('Payload', payload)

        } catch (err) {
            console.log('ERR', err)
        }

    }
    

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            {/*<div className={classes.root}>*/}
            <div>
                <TextField
                    id="revStatus"
                    name="revStatus"
                    select
                    value={formData['revStatus'] || ''}
                    label="Review Status"
                    onChange={handleChange}
                    helperText="Please select status..."
                    className={classes.textField}
                    margin="normal"
                >
                    { statusArr.map((option) => (
                        <MenuItem key={option.value} value={option.label}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="appName"
                    name="appName"
                    label="App Name"
                    onChange={handleChange}
                    value={formData['appName'] || ''}
                    style={{margin: 8}}
                    placeholder="app name on hub"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="appId"
                    name="appId"
                    label="App Troux ID"
                    style={{margin: 8}}
                    placeholder="app troux id"
                    onChange={handleChange}
                    value={formData['appId'] || ''}
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="projectName"
                    name="projectName"
                    value={formData['projectName']}
                    label="Project or Release Name"
                    onChange={handleChange}
                    style={{margin: 8}}
                    placeholder="[should be filled auto with the app name?]"
                    helperText="some limit"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="qsBrief"
                    name="qsBrief"
                    value={formData['qsBrief'] || ''}
                    onChange={handleChange}
                    select
                    label="QS Brief"
                    helperText="Please select brief..."
                    className={classes.textField}
                    margin="normal"
                >
                    {briefs.map((option) => (
                        <MenuItem key={option.value} value={option.label}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="lob"
                    name="lob"
                    select
                    label="LOB"
                    value={formData['lob'] || ''}
                    onChange={handleChange}
                    helperText="Please select line of business..."
                    className={classes.textField}
                    margin="normal"
                >
                    {lobs.map((option) => (
                        <MenuItem key={option.value} value={option.label}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="changeDesc"
                    name="changeDesc"
                    label="Description of Changes"
                    style={{margin: 8}}
                    placeholder=""
                    helperText="Maximum 500 characters"
                    onChange={handleChange}
                    value={formData['changeDesc'] || ''}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <section className={classes.fieldSection}>
                   <label className={classes.fieldLabel}>Intake Process Approvals</label>
                    <div className={classes.fieldBody}>
                        {approvals.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleApprovalChange}
                                        name={el.label}
                                        checked={approval[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <TextField
                    id="preparedBy"
                    name="preparedBy"
                    label="Prepared By"
                    style={{margin: 8}}
                    placeholder="type..."
                    onChange={handleChange}
                    value={formData['preparedBy'] || ''}
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div className={classes.sectionWrap}>
                    <Typography variant="h5" component="h4" className={classes.sectionTitle}>
                        Application Attributes
                    </Typography>
                </div>
                <section className={classes.fieldSection}>
                        <label className={classes.fieldLabel}> Data Source(s) Platforms in Use:</label>
                        <div className={classes.fieldBody}>
                            {platforms_in_use.map((el, index) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            key={index}
                                            onChange={handlePlatformsChange}
                                            name={el.label}
                                            checked={platformInUse[el.label] || false}
                                            color="primary"
                                        />
                                    }
                                    label={el.label}
                                />
                            ))}
                    </div>
                </section>
                <TextField
                    onChange={handleChange}
                    name="timeLimitsDesc"
                    value={formData['timeLimitsDesc'] || ''}
                    id="timeLimitsDesc"
                    label="Time Limits"
                    style={{margin: 8}}
                    placeholder="time limits"
                    helperText="requirement for ..."
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={handleChange}
                    name="publishLimits"
                    value={formData['publishLimits'] || ''}
                    id="publishingLimits"
                    label="Publishing Limits"
                    style={{margin: 8}}
                    placeholder="publishing limits"
                    helperText="any specs for publishing"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={handleChange}
                    name="scaleProjected"
                    value={formData['scaleProjected'] || ''}
                    id="scaleProj"
                    label="Scaling Projections"
                    style={{margin: 8}}
                    placeholder="type"
                    helperText="row count"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={handleChange}
                    name="appSize"
                    value={formData['appSize'] || ''}
                    id="appSize"
                    label="Size Projections"
                    style={{margin: 8}}
                    placeholder="in mb"
                    helperText="projected size"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={handleChange}
                    name="targetDate"
                    value={formData['targetDate']}
                    id="targetDate"
                    label="Target Date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Catalogs</label>
                    <div className={classes.fieldBody}>
                        {ctgs.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleCatalogChange}
                                        name={el.label}
                                        checked={catalog[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Extenions</label>
                    <div className={classes.fieldBody}>
                        {extensions.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleExtChange}
                                        name={el.label}
                                        checked={ext[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Components of Change</label>
                    <div className={classes.fieldBody}>
                        {changed_components.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleComponentChange}
                                        name={el.label}
                                        checked={component[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <div className={classes.sectionWrap}>
                    <Typography variant="h5" component="h4" className={classes.sectionTitle}>
                        Production Review
                    </Typography>
                </div>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Overall Standards</label>
                    <div className={classes.fieldBody}>
                        {/*{review_overall.map((el, index) => (*/}
                        {overalls.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleRewOverall}
                                        name={el.label}
                                        checked={rewOverall[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>

                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Data Model and Scripting Standards</label>
                    <div className={classes.fieldBody}>
                        {datamodels.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleRewDataModel}
                                        name={el.label}
                                        checked={rewDataModel[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>User Interface Standards</label>
                    <div className={classes.fieldBody}>
                        {interfaces.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleRewInterface}
                                        name={el.label}
                                        checked={rewInterface[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Threshold Values</label>
                    <div className={classes.fieldBody}>
                        {review_threshold.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleRewThreshold}
                                        name={el.label}
                                        checked={rewThreshold[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <div className={classes.sectionWrap}>
                    <Typography variant="h5" component="h4" className={classes.sectionTitle}>
                        Review Checked/Flagged Items
                    </Typography>
                </div>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Overall</label>
                    <div className={classes.fieldBody}>
                        {flagged_overall.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleFlagOverall}
                                        name={el.label}
                                        checked={flagOverall[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Data Source</label>
                    <div className={classes.fieldBody}>
                        {flagged_ds.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleFlagDS}
                                        name={el.label}
                                        checked={flagDS[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Data Model</label>
                    <div className={classes.fieldBody}>
                        {flagged_dm.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleFlagDM}
                                        name={el.label}
                                        checked={flagDM[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Interface</label>
                    <div className={classes.fieldBody}>
                        {flagged_ui.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleFlagUI}
                                        name={el.label}
                                        checked={flagUI[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Design</label>
                    <div className={classes.fieldBody}>
                        {flagged_design.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleFlagDesign}
                                        name={el.label}
                                        checked={flagDesign[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
                <section className={classes.fieldSection}>
                    <label className={classes.fieldLabel}>Script</label>
                    <div className={classes.fieldBody}>
                        {flagged_script.map((el, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        key={index}
                                        onChange={handleFlagScript}
                                        name={el.label}
                                        checked={flagScript[el.label] || false}
                                        color="primary"
                                    />
                                }
                                label={el.label}
                            />
                        ))}
                    </div>
                </section>
<div>
    <input
        type="file"
        onChange={handleFileChange}
    />
</div>
                <div className={classes.flexWrap}>
                    <div>
                        <input
                            onChange={handleChange}
                            name="uploadTest"
                            accept="image/*"
                            className={classes.fileInput}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="outlined" color="primary" component="span">
                                Upload
                            </Button>
                        </label>
                        <input accept="image/*"
                               className={classes.fileInput}
                               onChange={handleFileChange}
                               id="icon-button-file" type="file"
                        />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera/>
                            </IconButton>
                        </label>
                    </div>
                    <TextField
                        onChange={handleChange}
                        name="createdAt"
                        value={formData['createdAt']}
                        id="createdAt"
                        label="Created At"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    {/*<Button*/}
                    {/*    variant="contained"*/}
                    {/*    color="default"*/}
                    {/*    className={classes.button}*/}
                    {/*    startIcon={<CloudUploadIcon />}*/}
                    {/*>*/}
                    {/*    Upload*/}
                    {/*</Button>*/}
                </div>

                {/*<AmplifyS3ImagePicker preview="hidden" headerTitle="Add Image" onLoad={() => console.log('koo')}/>*/}
                {/*<AmplifyS3TextPicker />*/}
                <TextField
                    onChange={handleChange}
                    name="reviewedBy"
                    value={formData['reviewedBy']}
                    id="reviewedBy"
                    label="Reviewed By"
                    style={{margin: 8}}
                    placeholder="reviewer's username"
                    helperText="or email"
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={handleChange}
                    name="comment"
                    value={formData['comment'] || ''}
                    id="comment"
                    label="Reviewer's Comment"
                    style={{margin: 8}}
                    placeholder="type.."
                    helperText="limit to 500 characters"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div className={classes.formCta}>
                    <Button
                        variant="outlined"
                        color="primary"
                        type="submit" onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </form>
    );
}

export default ReviewForm;
