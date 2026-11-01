import Navbar from './components/Navbar'

// Temporary placeholder sections. We'll replace these one by one.
const placeholders = [
  { id: 'about', title: 'About', background: 'bg-white' },
  { id: 'work', title: 'Work', background: 'bg-cream' },
  { id: 'creative', title: 'Creative Corner', background: 'bg-white' },
  { id: 'contact', title: 'Say Hello!', background: 'bg-cream' },
]

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section
          id="home"
          className="mx-auto flex min-h-screen max-w-6xl scroll-mt-24 flex-col justify-center gap-6 px-6 pt-28"
        >
          <h1 className="text-5xl font-extrabold sm:text-7xl">
            Hey There,
            <br />
            I&apos;m <span className="text-deep-teal">Anne!</span>
          </h1>
          <p className="max-w-xl text-lg">
            Hero section coming next. For now, try the navigation bar above.
          </p>
        </section>

        {placeholders.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`${section.background} scroll-mt-24 px-6 py-24`}
          >
            <div className="mx-auto min-h-[50vh] max-w-6xl">
              <h2 className="text-4xl font-extrabold sm:text-5xl">
                {section.title}
              </h2>
              <p className="mt-4 text-lg">Placeholder, coming soon.</p>
            </div>
          </section>
        ))}
      </main>
    </>
  )
}