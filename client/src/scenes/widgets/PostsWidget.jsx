import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";


const PostsWidget = ({userId, isProfile=false})=>{
    const dispatch = useDispatch()
    const posts = useSelector((state)=>state.posts);
    const token = useSelector((state)=>state.token);

    //get all posts from all user and friends and send to the feeds
    const getPosts = async ()=>{
        const responce = await fetch("http://localhost:3001/posts",{
            method:"GET",
            headers: {Authorization: `Bearer ${token}`},
        })
        const data = await responce.json();
        dispatch(setPosts({posts: data}));
        
    }

    //get the all posts of the selected user
    const getUserPosts = async ()=>{
        const responce = await fetch(`http://localhost:3001/posts/${userId}/posts`,{
            method:"GET",
            headers: {Authorization: `Bearer ${token}`},
        })
        const data = await responce.json();
        dispatch(setPosts({posts: data}));

    }

    useEffect(()=>{
        if(isProfile){
            getUserPosts();
        }else{
            getPosts();
        }
    },[]);

    return (
        <>
            {posts.map(
                ({
                    _id,
                    userId,
                    firstName,
                    lastName,
                    description,
                    location,
                    picturePath,
                    userPicturePath,
                    likes,
                    comments,
                }) =>(
                    <PostWidget
                    key={_id}
                    postId={_id}
                    postUserId={userId}
                    name={`${firstName} ${lastName}`}
                    description={description}
                    location={location}
                    picturePath={picturePath}
                    userPicturePath={userPicturePath}
                    likes={likes}
                    comments={comments}
                    />
                )
            )}
        </>
    )
}

export default PostsWidget