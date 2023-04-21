export default function Footer() {
  return (
    <footer className="flex h-24 w-full bg-zinc-900">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-start justify-between p-4">
        <p className="w-full whitespace-nowrap text-sm font-medium dark:text-white">&copy; Eric Hendrickson 2023</p>
        <p className="w-full whitespace-nowrap pb-4 text-sm font-medium dark:text-white">
          This page was created using the Next.js framework. Want to learn how to build one just like this? Click{' '}
          <a className="font-bold text-blue-400 underline" target="_blank" href="https://nextjs.org/" rel="noreferrer">
            here
          </a>
        </p>
      </div>
    </footer>
  );
}
