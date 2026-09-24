const steps = [
  { number: '01', title: 'Создайте проект', text: 'Добавьте команду, цели и первые задачи за пару минут.' },
  { number: '02', title: 'Работайте вместе', text: 'Обсуждайте идеи, назначайте ответственных и следите за сроками.' },
  { number: '03', title: 'Достигайте целей', text: 'Понятные отчёты показывают прогресс и помогают расти быстрее.' },
]

function Steps() {
  return (
    <section id="how-it-works" className="bg-white px-6 py-24 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">Как это работает</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">От идеи до результата — три шага</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-slate-200 p-7">
              <span className="text-4xl font-bold text-indigo-200">{step.number}</span>
              <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-500">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps

