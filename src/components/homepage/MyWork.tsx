import ProjectArticle from '@/components/ProjectArticle';
import HomepageSection from '@/components/homepage/HomepageSection';

export default function MyWork() {
    return (
        <HomepageSection id="my-work" heading="My Work" sectionBackgroundColor="bg-amber-700" textColor="text-white">
            <div className="flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-4 pt-4 text-black">
                <ProjectArticle
                    title="Geocode Address Collector"
                    technologies={['Python']}
                    imageLink={'/python-logo-only.svg'}
                    imageAltText="Geocode Address Collector"
                />
                <ProjectArticle
                    title="Static Page CDK Stack Builder"
                    technologies={['AWS CDK, Typescript']}
                    imageLink={'/aws.svg'}
                    imageAltText='Static Page CDK Stack Builder' />
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
        </HomepageSection>
    );
}
