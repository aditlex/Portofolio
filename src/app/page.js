"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticlesBackground from "@/components/ParticlesBackground";
export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gray-950 text-white p-6 flex justify-start items-center flex-col mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        <div id="particles-js" style={{ height: "310vh" }} className="absolute top-[750px] left-0 w-full -z-0" />

      <AnimatedBackground />
      
      <ParticlesBackground/>
      <section className="z-10 mt-10 flex flex-col md:flex-row items-center md:justify-between w-full max-w-6xl mx-auto px-4 gap-4 md:gap-8">
        <motion.div 
          className="text-center md:text-left md:flex-1 lg:w-3/5 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold">Adit 🚀</h2>
          <p className="text-gray-400">FrontEnd Developer</p>
          <p className="mt-2 text-gray-300 md:text-lg max-w-3xl mx-auto md:mx-0">
            I'm a software developer passionate about technology, specializing in
            building responsive, user-friendly applications and exploring new tools
            to enhance performance and functionality.
          </p>
        </motion.div>

        <motion.img
          src="/line.png"
          className="w-20 h-20 md:w-28 md:h-28 relative mx-auto md:mx-0 transition-transform duration-300 rotate-90 md:rotate-[15deg]"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: 0.5}}
        />

        {/* Foto Profil */}
        <motion.div
          className="relative mt-6 md:mt-0 md:ml-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-gray-600 object-cover mx-auto md:mx-0"
          />
          <span
            className="absolute top-0 left-12 md:left-20 bg-green-600 text-white px-2 py-1 text-xs md:text-sm rounded-lg"
            style={{ transform: "rotate(10deg)" }}
          >
            456
          </span>
        </motion.div>
      </section>

      {/* Gambar Sinar di Atas Garis Gradasi */}
      <div className="flex justify-center mt-0  mb-0 relative -bottom-6">
  <motion.img
    src="/sinar.png" 
    alt="Sinar" 
    className="w-[90%] max-w-xs md:max-w-md lg:max-w-[700px] h-auto"
    initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: 0.5}}
       
  />
</div>

      {/* Garis Gradasi di Bawah Konten Pertama */}
      <motion.div
        className="my-6 w-full px-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
         
        <div className="h-[1px] bg-gradient-to-r from-black via-zinc-400 to-black w-full"></div>
      

      </motion.div>
     
      <section className="mt-10 w-full max-w-5xl px-4">
  {/* Proyek Unggulan */}
  <h2 className="text-3xl font-bold text-center text-gray-300 z-10">Featured Projects</h2>
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
    {Array(3).fill(0).map((_, index) => (
      <motion.div
        key={index}
        className={`bg-gray-800 p-4 z-10 rounded-lg shadow-md hover:shadow-lg transition-all ${
          index === 2 ? "md:col-span-2 lg:col-span-1" : ""
        }`}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={`/project${index + 1}.png`}
          alt="Project"
          className="w-full h-40 object-cover rounded-md z-10"
        />
        <h3 className="text-lg font-semibold mt-3 z-10">Project {index + 1}</h3>
        <p className="text-gray-400 text-sm mt-1 z-10">
          my project 
        </p>
        <a href="/projects" className="text-blue-400 mt-2 inline-block z-10">
          View Project →
        </a>
      </motion.div>
    ))}
  </div>

  {/* Skills & Tech Stack */}
  <h2 className="text-3xl font-bold text-center text-gray-300 mt-24 z-10">Skills & Tech Stack</h2>
  <motion.div 
    className="mt-6 flex flex-wrap justify-center gap-4 z-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {[
      "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "Node.js"
    ].map((skill, index) => (
      <motion.span 
        key={index} 
        className="bg-gray-800 px-4 py-2 rounded-lg text-gray-300 text-sm shadow-md z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {skill}
      </motion.span>
    ))}
  </motion.div>


  <h2 className="text-3xl font-bold text-center text-gray-300 mt-48 z-10">Blog & Articles</h2>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
  {[
    {
      title: "Latest Project",
      description: "Showcase the latest project, such as using Next.js and Tailwind CSS to build a portfolio page.",
      imgSrc: "/blog1.jpg",
      link: "https://github.com/topics/nextjs-portfolio",
    },
    {
      title: "Type data",
      description: "Data Types refer to the kind of value a variable can hold. Each data type specifies what kind of operations can be performed on it, and how much space it will take in memory.",
      imgSrc: "/blog3.jpg",
      link: "https://www.dicoding.com/blog/macam-macam-tipe-data/",
    },
    {
      title: "Learning Journey",
      description: "Share the learning journey in mastering new technologies, Full-Stack Dev, Game Dev, Software Dev.",
      imgSrc: "/blog2.jpg",
      link: "https://roadmap.sh/",
    },
    {
      title: "Main Advantages Next.js",
      description: "Review the tools frequently used, such as Next.js or Tailwind CSS, explaining why they were chosen and their benefits.",
      imgSrc: "/blog5.jpg",
      link: "https://nextjs.org/",
    },
    {
      title: "Programing Constructs",
      description: "Share a success story or case study of a project, such as the website developed for SMK Negeri 1 Denpasar.",
      imgSrc: "/blog4.jpg",
      link: "https://www.savemyexams.com/gcse/computer-science/ocr/22/revision-notes/8-programming-fundamentals/programming-fundamentals-and-data-types/programming-constructs/",
    },
  ].map((blog, index) => (
    <motion.div
      key={index}
      className={`bg-gray-800 p-4 rounded-lg z-10 shadow-md hover:shadow-lg transition-all ${
        index % 4 === 3 ? "md:col-span-2 md:row-span-1" : ""
      }`}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <img
        src={blog.imgSrc}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-md z-10 mb-4"
      />
      <h3 className="text-lg font-semibold mt-3 z-10">{blog.title}</h3>
      <p className="text-gray-400 text-sm mt-1 z-10">{blog.description}</p>
      <a href={blog.link} className="text-blue-400 mt-2 inline-block z-10">
        Read More →
      </a>
    </motion.div>
  ))}
</div>

</section>

<h2 className="text-3xl font-bold text-center text-gray-300 mt-40 z-10">Contact Me</h2>
<div className="mt-6 flex flex-col lg:flex-row gap-8 bg-gray-900 p-8 rounded-lg shadow-lg z-10">
  {/* Bagian Info Kontak */}
  <div className="lg:w-1/2 z-10">
    <h3 className="text-xl font-semibold text-white z-10">Let's Connect</h3>
    <p className="text-gray-400 mt-2 z-10">
      Feel free to reach out for collaborations or just a friendly chat.
    </p>
    <div className="mt-4 space-y-3 z-10">
      <div className="flex items-center space-x-3 z-10">
        <span className="text-blue-400 text-xl z-10">📍</span>
        <p className="text-gray-300 z-10">Bali, Indonesia</p>
      </div>
      <div className="flex items-center space-x-3 z-10">
      <img src="/icons8-email-open-30.png" alt="GitHub Icon" className="w-6 h-6 object-cover " />
      <p className="text-gray-300 z-10 whitespace-pre">
  Email  : <a href="mailto:adityawirya87@gmail.com" className="text-blue-400">adityawirya87@gmail.com</a>
</p>

      </div>
      <div className="flex items-center space-x-3 z-10">
        <img src="/icons8-github.svg" alt="GitHub Icon" className="w-6 h-6 object-cover whitespace-pre bg-white rounded-full " />
        <p className="text-gray-300 whitespace-pre"><a href="https://github.com/aditlex">Github : aditlex</a>  </p>
      </div>
      <div className="flex items-center space-x-3 z-10">
        <img src="/icons8-instagram-logo.svg" alt="GitHub Icon" className="w-6 h-6  object-cover " />
        <p className="text-gray-300 whitespace-pre"><a href="https://www.instagram.com/adhitzz_wr/">IG     : adhitzz_wr</a></p>
      </div>
      <div className="flex items-center space-x-3 z-10">
        <img src="/icons8-tiktok-logo.svg" alt="GitHub Icon" className="w-6 h-6 object-cover " />
        <p className="text-gray-300 whitespace-pre"><a href="https://www.tiktok.com/@kadekaditya478">TikTok : DitZz Turu.</a> </p>
      </div>
    </div>       
  </div>

  {/* Form Kontak */}
  <div className="lg:w-1/2 z-10">
  <form className="space-y-4">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
    <textarea
      placeholder="Your Message"
      rows="4"
      className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
    <button
      type="button"
      onClick={() => window.location.href = 'mailto:adityawirya87@gmail.com?subject=New Message&body=Name: [Your Name]%0AEmail: [Your Email]%0AMessage: [Your Message]'}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all"
    >
      Send Message
    </button>
  </form>


  </div>
</div>


    </motion.div> 
    
  );
}
