import AboutMe from '@/components/HomepageSections/AboutMe';
import MyWork from '@/components/HomepageSections/MyWork';
import ProjectArticle from '@/components/ProjectArticle';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start">
            <AboutMe />
            {/* <section
                id="my-work"
                className="z-10 flex w-full flex-col items-center justify-between bg-amber-700 p-8 text-sm text-white"
            >
                <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
                    <h1 className="text-center text-2xl font-extrabold">My Work</h1>
                </div>
                <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-4 p-4 text-black">
                    <ProjectArticle
                        title="Crumboard"
                        technologies={['Typescript', 'Angular', 'SCSS', 'MySQL']}
                        imageLink="/crumboard.avif"
                        imageAltText="Crumboard"
                    />
                    <ProjectArticle
                        title="ActiveHealth Management / CVS"
                        technologies={['Typescript', 'React', 'Redux', 'SCSS']}
                        imageLink="/activehealth.avif"
                        imageAltText="ActiveHealth Management"
                    />
                    <ProjectArticle
                        title="Local Food Buzz"
                        technologies={['Java 11', 'Spring Boot', 'PostgreSQL', 'Typescript', 'React', 'Redux', 'SCSS']}
                        imageLink="/localfoodbuzz.svg"
                        imageAltText="Local Food Buzz"
                    />
                    <ProjectArticle
                        title="MPA Piracy Tracker"
                        technologies={['Java 8', 'Spring Boot', 'PostgreSQL', 'Typescript', 'React', 'Redux', 'SCSS']}
                        imageLink="/mpa.png"
                        imageAltText="Motion Picture Association"
                    />
                    <ProjectArticle
                        title="Inspire Insight"
                        technologies={['Java 8', 'Spring Boot', 'PostgreSQL', 'Typescript', 'Angular', 'SCSS']}
                        imageLink="/inspireinsight.svg"
                        imageAltText="Inspire Insight"
                    />
                    <ProjectArticle
                        title="Q-Centrix JSON Populators"
                        technologies={['PostgreSQL', 'JSON/JSONP', 'Ruby on Rails', 'Javascript']}
                        imageLink="/qcentrix.svg"
                        imageAltText="Q-Centrix"
                    />
                    <ProjectArticle
                        title="MK Decision"
                        technologies={['Node.js', 'AWS Lambda', 'AWS DynamoDB', 'AWS API Gateway']}
                        imageLink="/mkdecision.png"
                        imageAltText="MK Decision"
                    />
                </div>
            </section> */}
            <MyWork />
        </main>
    );
}
