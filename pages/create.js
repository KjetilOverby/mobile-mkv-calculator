const { default: CreatePost } = require("../components/create/CreatePost")
import baseUrl from '../utils/baseUrl.js';
import { makeStyles, Divider } from '@material-ui/core';
import RawList from '../components/Lists/RawList.jsx';

//https://images.unsplash.com/photo-1518200966876-6abddcb56c35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80
const useStyles = makeStyles((theme) => ({
    container: { 
        background: 'url("https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        height: '100vh',
        zIndex: -100
    }
}))
const create = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.container}>
            <CreatePost url={`${baseUrl}/api/createdPost/posts`}/>
        </div>
        <Divider className={classes.divider} /> 
      <RawList/>
        </>
    )
}
export default create