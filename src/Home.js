import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[]);

    return (
        <div className={"home"}>
            <BlogList blogs={blogs} title={"All Blogs!"} />
        </div>
    );
};

export default Home;
