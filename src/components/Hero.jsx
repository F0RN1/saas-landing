function Hero() {
  return (
    <section className="overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="rounded-full border border-indigo-400/40 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-200">
            Всё для командной работы
          </span>
          <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl">
            Работайте умнее.
            <span className="block text-indigo-400">Делайте больше.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Taskly помогает командам планировать проекты, видеть прогресс и
            достигать целей в одном красивом пространстве.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#pricing" className="rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold transition-colors hover:bg-indigo-400">
              Попробовать бесплатно
            </a>
            <a href="#how-it-works" className="rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-slate-200 transition-colors hover:border-slate-500">
              Как это работает
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-2xl shadow-indigo-900/30">
          <div className="rounded-xl bg-slate-800 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="h-3 w-28 rounded-full bg-slate-600" />
              <div className="h-7 w-7 rounded-full bg-indigo-400" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { name: 'В работе', bar: 'w-24 bg-indigo-400' },
                { name: 'На проверке', bar: 'w-24 bg-indigo-400' },
                { name: 'Готово', bar: 'w-16 bg-emerald-400' },
              ].map((column) => (
                <div key={column.name} className="rounded-lg bg-slate-900 p-3">
                  <p className="mb-3 text-xs font-medium text-slate-400">{column.name}</p>
                  {[0, 1].map((card) => (
                    <div key={card} className="mb-2 rounded-md border border-slate-700 bg-slate-800 p-3">
                      <div className={`h-2 rounded-full ${column.bar}`} />
                      <div className="mt-2 h-2 w-20 rounded-full bg-slate-600" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
