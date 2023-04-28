import Image from 'next/image';

interface IProjectArticle {
    title: string;
    technologies: string[];
    imageLink: string;
    imageAltText?: string;
}

export default function ProjectArticle({ title, technologies, imageLink, imageAltText }: IProjectArticle) {
    const technologiesText: string = technologies.join(', ');

    return (
        <article className="project-article-width flex flex-row rounded bg-slate-200 p-4 shadow">
            <Image
                className="rounded border border-gray-700"
                src={imageLink}
                alt={imageAltText ? imageAltText : ''}
                loading="eager"
                width={172}
                height={172}
            />
            <div className="ml-6 w-max text-black">
                <h2 className="text-xl">{title}</h2>
                <h3 className="text-lg">
                    <span className="italic">Technologies: </span>
                    {technologiesText}
                </h3>
            </div>
        </article>
    );
}
