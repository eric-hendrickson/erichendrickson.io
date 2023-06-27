import AboutMe from '@/components/homepage/AboutMe';
import Contact from '@/components/homepage/Contact';
import MyWork from '@/components/homepage/MyWork';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start">
            <AboutMe />
            <MyWork />
            {/* <Contact /> */}
        </main>
    );
}
