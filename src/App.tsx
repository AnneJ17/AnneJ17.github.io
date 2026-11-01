import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

// Temporary placeholder sections. We'll replace these one by one.
const placeholders = [
  { id: 'work', title: 'Work', background: 'bg-cream' },
  { id: 'creative', title: 'Creative Corner', background: 'bg-white' },
  { id: 'contact', title: 'Say Hello!', background: 'bg-cream' },
]

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />

        {placeholders.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`${section.background} scroll-mt-24 py-24`}
          >
            <div className="mx-auto min-h-[50vh] max-w-6xl px-6">
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