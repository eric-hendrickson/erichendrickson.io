export default function Footer() {
    return (
        <footer className="bg-zinc-900 flex w-full h-24">
            <div className="w-full max-w-screen-2xl flex flex-col items-start justify-between mx-auto p-4">
                <p className="w-full text-sm font-medium whitespace-nowrap dark:text-white">&copy; Eric Hendrickson 2023</p>
                <p className="w-full text-sm font-medium whitespace-nowrap dark:text-white pb-4">
                    This page was created using the Next.js framework.
                    Want to learn how to build one just like this?
                    Click <a className="text-blue-400 font-bold underline" target="_blank" href="https://nextjs.org/">here</a>.
                </p>
            </div>
        </footer>
    )
}