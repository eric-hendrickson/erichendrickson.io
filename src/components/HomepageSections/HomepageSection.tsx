interface IHomepageSection {
    id: string;
    heading: string;
    sectionBackgroundColor?: string;
    textColor?: string;
    children?: React.ReactNode;
}

export default function HomepageSection({
    id,
    heading,
    sectionBackgroundColor,
    textColor,
    children,
}: IHomepageSection) {
    return (
        <section
            id={id}
            className={`${sectionBackgroundColor ? sectionBackgroundColor : 'bg-white'} ${
                textColor ? textColor : 'text-black'
            } z-10 flex w-full flex-col items-center p-8 text-sm`}
        >
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
                <h1 className="text-center text-2xl font-extrabold">{heading}</h1>
            </div>
            {children}
        </section>
    );
}
