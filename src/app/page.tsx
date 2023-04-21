import ProjectArticle from '@/components/ProjectArticle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <section id="about-me" className="z-10 flex w-full flex-col items-center bg-green-300 p-8 text-sm">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
          <h1 className="text-center text-2xl font-extrabold">About Me</h1>
        </div>
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-start justify-start">
          <p className="py-4 text-xl">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <p className="py-4 text-xl">Feel free to reach out at</p>
        </div>
      </section>
      <section
        id="my-work"
        className="z-10 flex w-full flex-col items-center justify-between bg-amber-700 p-8 text-sm text-white"
      >
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
          <h1 className="text-center text-2xl font-extrabold">My Work</h1>
        </div>
        <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-4 p-4">
          <ProjectArticle
            title="ActiveHealth Management / CVS"
            technologies={['Typescript', 'React', 'Redux', 'SCSS']}
            imageLink="/activehealth.avif"
          />
          <ProjectArticle
            title="ActiveHealth Management / CVS"
            technologies={['Typescript', 'React', 'Redux', 'SCSS']}
            imageLink="/activehealth.avif"
          />
        </div>
      </section>
    </main>
  );
}
