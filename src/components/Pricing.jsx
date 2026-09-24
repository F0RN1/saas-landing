const plans = [
  { name: 'Старт', price: '0 ₽', description: 'Для небольших личных проектов', features: ['До 3 проектов', 'Базовые доски', '1 участник'] },
  { name: 'Команда', price: '790 ₽', description: 'Для растущих команд', features: ['Безлимитные проекты', 'Все виды представлений', 'До 10 участников'], featured: true },
  { name: 'Бизнес', price: '1 990 ₽', description: 'Для больших процессов', features: ['Расширенная аналитика', 'Приоритетная поддержка', 'Безлимит участников'] },
]

function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 px-6 py-24 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">Тарифы</p>
          <h2 className="mt-3 text-4xl font-bold">Выберите свой темп</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`rounded-2xl border p-7 ${plan.featured ? 'border-indigo-500 bg-indigo-600 text-white shadow-xl shadow-indigo-200' : 'border-slate-200 bg-white'}`}>
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className={`mt-2 text-sm ${plan.featured ? 'text-indigo-100' : 'text-slate-500'}`}>{plan.description}</p>
              <p className="mt-7 text-4xl font-bold">{plan.price}<span className="text-base font-normal">/мес</span></p>
              <ul className={`mt-7 space-y-3 text-sm ${plan.featured ? 'text-indigo-50' : 'text-slate-600'}`}>
                {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
              </ul>
              <button type="button" className={`mt-8 w-full rounded-xl px-4 py-3 font-semibold ${plan.featured ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-slate-900 text-white hover:bg-slate-700'}`}>
                Выбрать тариф
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

