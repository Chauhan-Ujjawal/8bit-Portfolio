"use client";

import Image from "next/image";
import "nes.css/css/nes.min.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-4 py-16 md:p-24">
      {/* Heading */}
      <div className="flex justify-center mb-12 w-full">
        <div className="relative flex items-end w-full max-w-[75rem]">
          <i className="nes-bcrikko text-4xl bounce-brick" />
          <div className="absolute -top-6 left-[1.3rem] nes-balloon from-left is-dark text-black w-full max-w-[75rem] overflow-hidden">
            <p className="text-center typing-text text-xs sm:text-base">
              👾 Hey There! I'm Ujjawal, Simple. Sharp. Slightly Obsessed With Details
            </p>
          </div>
        </div>
      </div>

      {/* Intro Box */}
      <div className="nes-container with-title bg-blue-200 w-full max-w-[45rem] mx-auto mt-24 mb-20">
        <p className="title text-xs sm:text-base">Intro Box. Main Character Energy Inside!</p>
        <div className="p-6 space-y-6">
          <p className="text-sm sm:text-base text-center">
            A creative technologist passionate about crafting smart, user-friendly experiences. I work across machine learning, UI/UX design, data science, frontend development, and MERN stack. Whether it's building sleek interfaces or training models, I love blending data, design, and development to bring bold ideas to life.
          </p>
        </div>
      </div>

      {/* Skills Box */}
      <div className="w-full flex justify-center mt-20">
        <div className="nes-container is-rounded bg-white w-full max-w-[40rem]">
          <div className="p-6 space-y-6">
            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                src="/axe-and-shield.webp"
                alt="Axe-and-Shield"
                className="bounce-brick"
              />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-sm sm:text-base">These Are My Skills</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center mt-6">
              <a href="#" className="nes-badge"><span className="is-dark">UI/UX</span></a>
              <a href="#" className="nes-badge"><span className="is-primary">Frontend Dev.</span></a>
              <a href="#" className="nes-badge"><span className="is-success">Data Science</span></a>
              <a href="#" className="nes-badge"><span className="is-warning">ML</span></a>
              <a href="#" className="nes-badge"><span className="is-error">Web Dev</span></a>
              <a href="#" className="nes-badge"><span className="is-dark">Programming</span></a>
              <a href="#" className="nes-badge"><span className="is-success">MERN</span></a>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 4 Boxes */}
      <div className="w-full flex justify-center mt-20 bounce-brick">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[90rem] justify-items-center">
          {/* Box 1: Design */}
          <div className="nes-container is-rounded bg-[#797ea0] w-full max-w-[40rem]">
            <div className="p-6 space-y-6">
              <h1 className="bold-white-outline text-center">Design</h1>
              <button className="nes-btn is-primary">Figma</button>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <span className="nes-badge"><span className="is-dark">UI/UX</span></span>
                <span className="nes-badge"><span className="is-primary">Wireframing</span></span>
                <span className="nes-badge"><span className="is-warning">Prototyping</span></span>
                <span className="nes-badge"><span className="is-success">IxDesign</span></span>
              </div>
              <button className="nes-btn is-primary">Canva</button>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <span className="nes-badge"><span className="is-success">Vis.Creator</span></span>
                <span className="nes-badge"><span className="is-error">GraphicDes.</span></span>
              </div>
            </div>
          </div>

          {/* Box 2: Frontend Development */}
          <div className="nes-container is-rounded bg-[#797ea0] w-full max-w-[40rem]">
            <div className="p-6 space-y-6">
              <h1 className="bold-white-outline text-center">Frontend Development</h1>
              <button className="nes-btn is-primary">Languages</button>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <span className="nes-badge"><span className="is-dark">HTML</span></span>
                <span className="nes-badge"><span className="is-primary">CSS</span></span>
                <span className="nes-badge"><span className="is-warning">JavaScript</span></span>
              </div>
              <button className="nes-btn is-primary">Frameworks</button>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <span className="nes-badge"><span className="is-success">Tailwind</span></span>
                <span className="nes-badge"><span className="is-error">React</span></span>
                <span className="nes-badge"><span className="is-dark">NES.css</span></span>
                <span className="nes-badge"><span className="is-primary">Next.js</span></span>
                <span className="nes-badge"><span className="is-warning">Bootstrap</span></span>
              </div>
            </div>
          </div>

          {/* Box 3: ML and Data Science */}
          <div className="nes-container is-rounded bg-[#797ea0] w-full max-w-[40rem]">
            <div className="p-6 space-y-6">
              <h1 className="bold-white-outline text-center">Machine Learning and Data Science</h1>
              <button className="nes-btn is-primary">Languages</button>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <span className="nes-badge"><span className="is-dark">Python</span></span>
                <span className="nes-badge"><span className="is-primary">SQL</span></span>
              </div>
              <button className="nes-btn is-primary">Libraries</button>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <span className="nes-badge"><span className="is-success">TensorFlow</span></span>
                <span className="nes-badge"><span className="is-error">Pandas</span></span>
                <span className="nes-badge"><span className="is-dark">NumPy</span></span>
                <span className="nes-badge"><span className="is-primary">Seaborn</span></span>
                <span className="nes-badge"><span className="is-warning">Matplotlib</span></span>
              </div>
            </div>
          </div>

          {/* Box 4: General Development */}
          <div className="nes-container is-rounded bg-[#797ea0] w-full max-w-[40rem]">
            <div className="p-6 space-y-6">
              <h1 className="bold-white-outline text-center">General Development</h1>
              <button className="nes-btn is-primary">Languages</button>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <span className="nes-badge"><span className="is-dark">Java</span></span>
                <span className="nes-badge"><span className="is-warning">C</span></span>
              </div>
              <button className="nes-btn is-primary">Concepts</button>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <span className="nes-badge"><span className="is-success">OOPs</span></span>
                <span className="nes-badge"><span className="is-error">DBMS</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Tools */}
      <div className="w-full flex justify-center mt-20">
        <div className="nes-container is-rounded bg-[#b3b3ff] w-full max-w-[40rem]">
          <div className="p-6 space-y-6">
            <div className="w-full flex justify-center">
              <h1 className="bold-white-outline text-center">Developer Tools</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center mt-6">
              <a href="#" className="nes-badge"><span className="is-dark">VS.Code</span></a>
              <a href="#" className="nes-badge"><span className="is-primary">PyCharm</span></a>
              <a href="#" className="nes-badge"><span className="is-success">Git Bash</span></a>
              <a href="#" className="nes-badge"><span className="is-warning">GoogleColab</span></a>
              <a href="#" className="nes-badge"><span className="is-error">JupyterNtbk</span></a>
              <a href="#" className="nes-badge"><span className="is-dark">Programming</span></a>
              <a href="#" className="nes-badge"><span className="is-success">MERN</span></a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Section */}
      <div className="w-full flex justify-center mt-20">
        <div className="nes-container is-dark with-title relative bg-black text-white w-full max-w-[40rem] min-h-[30rem]">
          <p className="title text-center text-xs sm:text-base">Connect With Me</p>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12 justify-items-center p-6">
              <a href="https://github.com/Chauhan-Ujjawal" target="_blank"><Image src="/github.gif" alt="GitHub" width={100} height={100} className="hover:scale-110 transition-transform" /></a>
              <a href="https://www.linkedin.com/in/ujjawal-chauhan01" target="_blank"><i className="nes-icon linkedin is-large"></i></a>
              <a href="https://www.geeksforgeeks.org/user/ujjava0kfg/" target="_blank"><Image src="/gfg.png" alt="GFG" width={75} height={75} className="hover:scale-110 transition-transform" /></a>
              <a href="https://leetcode.com/u/chauhan_ujjawal_" target="_blank"><Image src="/leetcode.png" alt="LeetCode" width={110} height={110} className="hover:scale-110 transition-transform" /></a>
              <a href="https://www.behance.net/ujjawalchauhan06" target="_blank"><Image src="/behance.png" alt="Behance" width={90} height={90} className="hover:scale-110 transition-transform" /></a>
              <a href="https://www.kaggle.com/ujjawalchauhann" target="_blank"><Image src="/kaggle.png" alt="Kaggle" width={90} height={90} className="hover:scale-110 transition-transform" /></a>
            </div>
          </div>
          <img
            src="/kittycat.gif"
            height={150}
            width={150}
            alt="Running Cat"
            className="cat-runner"
          />
        </div>
      </div>
    </main>
  );
}
