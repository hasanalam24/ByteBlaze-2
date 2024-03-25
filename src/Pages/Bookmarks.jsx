import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utilites";
import BlogCard from "../Components/BlogCard";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const stored = getBlogs()
        setBlogs(stored)

    }, [])

    const handleDelete = id => {
        deleteBlog(id)
        const stored = getBlogs()
        setBlogs(stored)
    }

    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {
                blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)
            }

        </div>
    );
};

export default Bookmarks;