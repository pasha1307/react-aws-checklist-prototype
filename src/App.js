import './App.css';
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {
    BrowserRouter as Router, Link,
    Switch, Route
} from "react-router-dom";
// import Link from '@material-ui/core/Link';
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import ReviewPage from "./Pages/ReviewPage";
import SectionForm from "./Components/SectionForm/SectionForm";
import ReviewsListPage from "./Pages/ReviewsListPage";
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    menuList: {
        textAlign: 'right',
        width: '80%'
    },
    listItem: {
        textDecoration: 'none',
        margin: '0 10px'
    },
    homeItem: {
        textDecoration: 'none',
        color: 'inherit'
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },

    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));
function App() {
    const classes = useStyles();
  return (
      // <AmplifyAuthenticator>
    <Router>
        <AppBar position="absolute" color="default" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    <Link to="/" className={classes.homeItem}>Checklist App</Link>
                </Typography>
                <Typography className={classes.menuList}>
                    <Link to="/review" className={classes.listItem}>Review</Link>
                    <Link to="/list" className={classes.listItem}>Reviews</Link>
                    <Link to="/admin" className={classes.listItem}>Admin</Link>
                </Typography>
                    <div>
                        <AmplifySignOut />
                    </div>
            </Toolbar>
        </AppBar>
        <Switch>
            <Route path="/review">
                <Review/>
            </Route>
            <Route path="/list">
                <List/>
            </Route>
            <Route path="/admin">
                <Admin/>
            </Route>
            <Route path="/">
                <Review/>
            </Route>
        </Switch>
    </Router>
      // </AmplifyAuthenticator>
  );
}
function Home() {
    return <h2>Home Page</h2>
}
function Review() {
    return <ReviewPage/>
}
function List() {
    return <ReviewsListPage/>
}
function Admin() {
    return <SectionForm />
}
export default App;
