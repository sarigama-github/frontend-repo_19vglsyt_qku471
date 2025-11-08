import { Leaf } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-700">
            <Leaf className="w-6 h-6" />
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            KisaanMitra
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#vision" className="hover:text-gray-900">Vision</a>
          <a href="#features" className="hover:text-gray-900">Highlights</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
