interface IProjectArticle {
    title: string;
    technologies: string[];
    imageLink: string;
}

export default function ProjectArticle({ title, technologies, imageLink }: IProjectArticle) {
    const technologiesText: string = technologies.join(", ")

    return (
        <article className="flex flex-row project-article-width p-4 bg-slate-200 rounded shadow">
            <img className="border border-gray-700 rounded" src={imageLink}></img>
            <div className="ml-6 w-max text-black">
                <h2 className="text-xl">{ title }</h2>
                <h3 className="text-l"><span className="italic">Technologies: </span>{technologiesText}</h3>
            </div>
        </article>
    )
}