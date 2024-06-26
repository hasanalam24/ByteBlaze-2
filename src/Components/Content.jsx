import { Link, useLoaderData } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {

    const contentInfo = useLoaderData()

    const { title, cover_image, description, published_at, tags, body_html, url } = contentInfo
    return (

        <div

            className="mx-auto group border border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-900">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />


            {/* tags item */}
            {
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">

                    {
                        tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-default-600 dark:text-gray-50">{tag}</a>)
                    }
                </div>

            }

            <div>
                <a
                    href={url}
                    target="_blank"
                    className="text-3xl font-bold mb-5 hover:underline">{title}</a>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>

    );
};

export default Content;