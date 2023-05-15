import HomepageSection from '@/components/homepage/HomepageSection';

export default function AboutMe() {
    return (
        <HomepageSection id="about-me" heading="About Me" sectionBackgroundColor="bg-green-300">
            <div className="mx-auto flex max-w-screen-2xl flex-col flex-wrap items-start justify-start lg:mx-52">
                <p className="py-4 text-xl">
                    My name is Eric Hendrickson. I am an independent full stack software engineer based out of Las
                    Vegas, Nevada. My general go-to technologies are Spring Boot Java on the back end and either React
                    or Angular on the front end, but I also have a fair amount of experience with Ruby on Rails and
                    NodeJS. I am well versed with Amazon Web Services (AWS) as well.
                </p>
                <p className="py-4 text-xl">
                    I have worked on both front end and back end for a variety of projects. The clients I have done work
                    include CVS and the Motion Picture Association, along with others. Lately, my new favorite framework
                    to play with is Next.js (in fact, I made this page using it).
                </p>
                <p className="py-4 text-xl">
                    Feel free to connect with me or follow me on the following socials, or view or download my resume.
                    If you want to contact me, please feel free to use the form at the bottom of this page.
                </p>
                <div className="flex w-full flex-row items-center justify-center py-4">SOCIALS HERE</div>
                <a className="py-4 text-xl">VIEW/DOWNLOAD MY LATEST RESUME</a>
            </div>
        </HomepageSection>
    );
}
