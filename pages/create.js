const { default: CreatePost } = require("../components/create/CreatePost")
import baseUrl from '../utils/baseUrl.js';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
 
}))
const create = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <CreatePost url={`${baseUrl}/api/createdPost/posts`}/>
        </div>
    )
}
export default create