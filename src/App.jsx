import Hero from './components/Hero'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Faq from './components/Faq'

function App() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="text-xl font-bold text-white">Taskly<span className="text-indigo-400">.</span></a>
          <a href="#pricing" className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-white hover:border-indigo-400">Начать бесплатно</a>
        </nav>
      </header>
      <main>
        <Hero />
        <Steps />
        <Pricing />
        <Faq />
      </main>
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-500">© 2026 Taskly. Все права защищены.</footer>
    </>
  )
}

export default App

