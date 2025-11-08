export default function QuoteCard() {
  return (
    <section id="vision" className="max-w-4xl mx-auto text-center px-4 py-12">
      <figure className="bg-white/70 backdrop-blur rounded-3xl p-8 sm:p-10 shadow-xl border border-white">
        <blockquote className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-relaxed">
          "The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways. Yet he keeps the world fed."
        </blockquote>
        <figcaption className="mt-4 text-gray-600">— Tribute to the hands that nourish the nation</figcaption>
      </figure>
    </section>
  )
}
