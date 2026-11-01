export default function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-6 px-6">
      <h1 className="text-5xl font-extrabold sm:text-7xl">
        Hey There,
        <br />
        I&apos;m <span className="text-deep-teal">Anne!</span>
      </h1>
      <p className="max-w-xl text-lg">
        Test page: if you can see the teal name, the rounded colored circles
        below, and friendly headline font, Tailwind and fonts are working.
      </p>
      <div className="flex gap-3">
        <span className="h-12 w-12 rounded-full bg-deep-teal" />
        <span className="h-12 w-12 rounded-full bg-mustard" />
        <span className="h-12 w-12 rounded-full bg-coral" />
        <span className="h-12 w-12 rounded-full bg-charcoal" />
      </div>
    </main>
  )
}