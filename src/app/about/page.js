export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
        <div className="max-w-3xl text-cente mt-20">
          <h2 className="text-4xl font-bold text-blue-400">I Kadek Adithya Wirya Putra 🚀</h2>
          <p className="text-gray-400 text-lg mt-2">Student | SMK Negeri 1 Denpasar - RPL</p>
  
          <p className="mt-4 text-gray-300 md:text-lg">
            Hi! I’m Adithya, a student in Software Engineering (RPL) at SMK Negeri 1 Denpasar. 
            Born on June 16, 2008, in Denpasar, Bali, I have a strong passion for technology, 
            especially in web development and software engineering.
          </p>
  
          {/* Section Jenjang Pendidikan */}
          <div className="mt-6 text-left">
            <h3 className="text-2xl font-semibold text-blue-400">Education</h3>
            <ul className="mt-2 text-gray-300 md:text-lg space-y-2">
              <li>📍 SD Negeri 11 Pemecutan</li>
              <li>📍 SMP Negeri 4 Denpasar</li>
              <li>📍 SMK Negeri 1 Denpasar - Rekayasa Perangkat Lunak</li>
            </ul>
          </div>
  
  {/* Section My Device */}
  <div className="mt-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-400">My Device</h3>
          <ul className="mt-2 text-gray-300 md:text-lg space-y-2">
            <li>💻 Laptop: LOQ 15 IAX9</li>
            <li>🔧 Processor: 12th Gen Intel Core i5-12450HX (2.40 GHz)</li>
            <li>🎮 GPU: NVIDIA GeForce RTX 2050</li>
            <li>🖥 RAM: 12.0 GB (11.8 GB usable)</li>
            <li>🖥 OS: 64-bit, x64-based processor</li>
            <li>🖱 Mouse: Oni R1 Vortex Series</li>
            <li>🎧 TWS: Tozo AeroSound3</li>
            <li>📱 Phone: Realme GT 2 Pro</li>
          </ul>
        </div>


          {/* Section CV */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-blue-400">My CV</h3>
            <p className="text-gray-300 mt-2">
              Want to know more about my skills and experience? Download my CV below.
            </p>
  
            <div className="mt-4 flex justify-center space-x-4">
              <a 
                href="/CV_IKadekAdithyaWirya.pdf" 
                download="/CV_IKadekAdithyaWirya.pdf"
                className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition mb-10"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  