import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: '100'
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div id="about-me" className="z-10 w-full p-8 items-center justify-between font-mono text-sm lg:flex flex-col bg-green-300">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-black text-center text-2xl">About Me</h1>
        </div>
        <div className="max-w-screen-2xl flex flex-wrap items-start justify-start mx-auto p-4">
          <p className="text-black text-xl">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
      </div>
    </main>
  )
}
