
export default function Home() {
  return (
    <section id="home" className="pt-36 bg-slate-200">
      <div className="container lg:p-32">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-secondary md:text-xl lg:text-3xl">Hallo People👋, i'm <span className="block  font-bold text-4xl md:text-5xl text-dark">Rizki Tirta</span></h1>
            <h2 className="font-medium text-slate-700 mb-5 md:text-xl">I'm a Backend Developer</h2>
            <p className="font-medium text-slate-500 mb-10 leading-related">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum unde voluptatibus provident esse dignissimos velit cum quis accusamus sequi. Delectus modi numquam!</p>
            <a className="text-base font-semibold text-white bg-primary p-3 rounded-full hover:bg-info transition-all duration-300">Contact Me</a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img className="max-w-full mx-auto" src="images/profile.png" />
              <span className="absolute bottom-14 -z-10 left-1/2 -translate-x-60">
                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#f59e0b" d="M70.2,-32.8C82.6,-18.9,78.6,12.1,64.2,32C49.8,52,24.9,60.9,6.2,57.3C-12.4,53.7,-24.8,37.6,-36.6,19.1C-48.3,0.7,-59.5,-20.1,-53.3,-30.3C-47.1,-40.5,-23.6,-40.2,2.6,-41.7C28.9,-43.2,57.7,-46.6,70.2,-32.8Z" transform="translate(100 100) scale(1.2)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
