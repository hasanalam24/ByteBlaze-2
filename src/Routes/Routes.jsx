import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import BlogDetails from "../Pages/BlogDetails";
import Bookmarks from "../Pages/Bookmarks";
import Content from "../Components/Content";
import Author from "../Components/Author";

export const router = createBrowserRouter([
    {
        //eta hocce search thikana url name
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
            },
            {
                path: '/blog/:khujo',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.khujo}`),
                children: [
                    {
                        index: true,
                        element: <Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.khujo}`),
                    },
                    {
                        path: 'author',
                        element: <Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.khujo}`),
                    }
                ]
            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>
            }
        ]
    },

]);