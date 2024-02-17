import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";


//this function used to show the id of user by post the details
const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor