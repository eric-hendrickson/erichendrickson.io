import HomepageSection from '@/components/homepage/HomepageSection';

export default function AboutMe() {
    return (
        <HomepageSection id="about-me" heading="About Me" sectionBackgroundColor="bg-green-300">
            <div className="mx-auto flex max-w-screen-2xl flex-col flex-wrap items-start justify-start lg:mx-52">
                <p className="py-4 text-xl">
                    My name is Eric Hendrickson. I am an independent full stack software engineer based out of Las
                    Vegas, Nevada. My general go-to technologies are Spring Boot Java on the back end and either React
                    or Angular on the front end, but lately I have been doing more development with Python.
                    I am well versed with Linux and Amazon Web Services (AWS) as well.
                </p>
                <p className="py-4 text-xl">
                    I have worked on both front end and back end for a variety of projects. The clients I have done work
                    for include CVS and the Motion Picture Association, along with others. Lately, my new favorite Javascript
                    framework to play with is Next.js (in fact, I made this page using it). Also, as a way to keep sharp
                    with AWS (particularly CDK), and in order to deploy this website, I created{' '}
                    <a
                        className="font-bold text-blue-700 underline"
                        target="_blank"
                        href="https://github.com/eric-hendrickson/static-page-cdk"
                        rel="noreferrer"
                    >
                        this repository
                    </a>
                    , which allows a user to deploy their static site automatically, provided their code has a valid
                    buildspec.yaml.
                </p>
                <p className="py-4 text-xl">
                    {/* Feel free to connect with me or follow me on the following socials, or view or download my resume.
                    If you want to contact me, please feel free to use the form at the bottom of this page. */}
                    Feel free to connect with me by using the contact form at the bottom of the page. You can also <a
                        className="font-bold text-blue-700 underline"
                        href="https://github.com/eric-hendrickson"
                        rel="noreferrer"
                    >
                    take a look at my GitHub</a> or download my resume <a
                        className="font-bold text-blue-700 underline"
                        target="_blank"
                        href="/resume.pdf"
                        rel="noreferrer"
                    >here</a>.
                </p>
                {/* <div className="flex w-full flex-row items-center justify-center py-4">
                    <div className="github-icon h-6 w-6"></div>
                </div> */}
                {/* <a className="py-4 text-xl">VIEW/DOWNLOAD MY LATEST RESUME</a> */}
            </div>
        </HomepageSection>
    );
}
