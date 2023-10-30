import Image from 'next/image';
import { IProjectArticle } from '@/models/IProjectArticle';

export default function ProjectArticle({ title, technologies, imageLink, imageAltText }: IProjectArticle) {
    const technologiesText: string = technologies.join(', ');

    return (
        <article className="project-article-width flex flex-row rounded bg-gradient-to-br from-slate-300 from-60% to-cyan-200 p-4 shadow">
            <Image
                className="rounded"
                src={imageLink}
                alt={imageAltText ? imageAltText : ''}
                loading="eager"
                width={172}
                height={172}
            />
            <div className="ml-2 w-max text-black sm:ml-6">
                <h2 className="text-lg sm:text-xl">{title}</h2>
                <h3 className="sm:text-lg">
                    <span className="italic">Technologies: </span>
                    {technologiesText}
                </h3>
            </div>
        </article>
    );
}
