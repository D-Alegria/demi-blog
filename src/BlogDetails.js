import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {

    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch("http://localhost:8080/blogs/" + id);
    const history = useHistory();

    function handleDelete() {
        fetch('http://localhost:8080/blogs/' + id, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }).then(() => {
            console.log("blog removed")
            history.push('/');
        })
    }

    return (
        <div className={"blog-details"}>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>}
        </div>
    );
}

export default BlogDetails;