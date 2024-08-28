import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <main className="px-16 py-16">
        <section className="">
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-blue-600">Hamza Tahir</span>.
          </h1>
          <h2 className="text-2xl font-semibold mt-2">
            <span className="text-blue-600">Software Engineer</span> based in Lahore, Pakistan
          </h2>
          <p className="text-gray-600 mt-2">
            Frontend Developer at <strong>Ginkgo</strong>
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-full">
            My Resume
          </button>
        </section>

        <section className="mt-16 space-y-12">
          <div className="flex items-center space-x-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="uppercase text-sm text-gray-600">UX Case Study</p>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <img src="/netflix-app.png" alt="Netflix App" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-lg font-semibold text-gray-600">→</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <img src="/spotify-app.png" alt="Spotify App" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-lg font-semibold text-gray-600">→</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
