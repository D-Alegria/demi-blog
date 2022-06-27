import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/blogs")
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't connect to server");
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null)
            })
            .catch(reason => {
                console.error(reason);
                setError(reason.message);
                setIsPending(false);
            });
    }, []);

    return (
        <div className={"home"}>
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs!"}/>}
        </div>
    );
};

export default Home;
