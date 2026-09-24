import { useState } from 'react'

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-200 py-5">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between gap-6 text-left font-semibold">
        {question}
        <span className="text-2xl font-normal text-indigo-600">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="mt-4 max-w-2xl leading-7 text-slate-500">{answer}</p>}
    </div>
  )
}

function Faq() {
  const questions = [
    ['Можно ли попробовать Taskly бесплатно?', 'Да, тариф «Старт» бесплатен без ограничения по сроку и не требует банковской карты.'],
    ['Подойдёт ли сервис для удалённой команды?', 'Да, все задачи и обсуждения доступны из браузера, поэтому команда может работать из любой точки.'],
    ['Можно ли сменить тариф позже?', 'Конечно. Вы можете перейти на другой тариф в любой момент, а изменения применятся сразу.'],
  ]

  return (
    <section className="bg-white px-6 py-24 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">FAQ</p>
          <h2 className="mt-3 text-4xl font-bold">Частые вопросы</h2>
        </div>
        <div className="mt-10">
          {questions.map(([question, answer]) => <FaqItem key={question} question={question} answer={answer} />)}
        </div>
      </div>
    </section>
  )
}

export default Faq

