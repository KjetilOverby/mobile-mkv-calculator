const { default: CreatePost } = require("../components/create/CreatePost")
import baseUrl from '../utils/baseUrl.js';


const create = () => {
    return (
        <div>
            <CreatePost url={`${baseUrl}/api/createdPost/posts`}/>
        </div>
    )
}
export default create