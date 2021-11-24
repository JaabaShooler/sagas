import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { LOAD_POSTS } from "../../redux/reducers/Posts/actions";
import { selectPosts } from "../../redux/reducers/Posts/selectors";

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    
    React.useEffect(() => {
        dispatch({ type: LOAD_POSTS })
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {
                posts.loading ? <div>Loading...</div> : 
                posts.data?.map( p => (
                    <div key={p.id}>
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                    </div>
                ) 
            )
        }
        </div>
    )
}