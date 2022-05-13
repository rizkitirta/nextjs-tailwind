import { useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Button from "../src/components/button";
import Header from "../src/components/Header";
import CardPorto from "../src/components/cardPorto";
import InputText from "../src/components/inputText";
import TextArea from "../src/components/textArea";
import Footer from "../src/components/footer";
import IconBorder from "../src/components/iconBorder";

export default function Home() {
  const iconMenu = () => {
    let humberger = document.querySelector('#menu-humberger');
    let navMenu = document.querySelector('#nav-menu');
    humberger.addEventListener('click', () => {
      humberger.classList.toggle('humberger-active');
      navMenu.classList.toggle('hidden')
    })
  }

  const listenScrollEvent = (e) => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop

    if (window.scrollY > 0) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])


  return (
    <div className="" >
      <header className="bg-transparent top-0 left-0 w-full flex item-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-5">
              <a href="#home" className="font-bold text-lg text-primary block py-6">RizkiTirta</a>
            </div>
            <div className="flex item-center px-4">
              <button className="block absolute right-4 top-5 lg:hidden" type="button" id="menu-humberger" onClick={iconMenu}>
                <span className="w-[30px] h-[2px] my-2 block bg-dark transition duration-300 ease-in-out origin-top-left "></span>
                <span className="w-[30px] h-[2px] my-2 block bg-dark transition duration-300 ease-in-out"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-dark transition duration-300 ease-in-out origin-bottom-left "></span>
              </button>

              <nav id="nav-menu" className="hidden lg:block absolute lg:static bg-white lg:bg-transparent lg:max-w-full shadow-lg lg:shadow-none rounded-lg rounded-none max-w-[250px] w-full right-6 top-full">
                <ul className="block lg:flex">
                  <li className="group"><a href="#home" className="text-base text-dark py-3 mx-6 group-hover:text-primary flex">Beranda</a></li>
                  <li className="group"><a href="#about" className="text-base text-dark py-3 mx-6 group-hover:text-primary flex">About</a></li>
                  <li className="group"><a href="#portofolio" className="text-base text-dark py-3 mx-6 group-hover:text-primary flex">Portofolio</a></li>
                  <li className="group"><a href="#contact" className="text-base text-dark py-3 mx-6 group-hover:text-primary flex">Client</a></li>
                  <li className="group"><a href="#" className="text-base text-dark py-3 mx-6 group-hover:text-primary flex">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="">
        <div className="container lg:px-32">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-secondary md:text-xl lg:text-3xl">Hallo People👋, i'm <span className="block  font-bold text-4xl md:text-5xl text-dark">Rizki Tirta</span></h1>
              <h2 className="font-medium text-slate-700 mb-5 md:text-xl">I'm a Backend Developer</h2>
              <p className="font-medium text-dark-light mb-10 leading-related">Saya Adalah Seorang Fullstack Web Developer Yang Selalu Memberikan Upaya Terbaik Untuk Setiap Proyek Yang Saya Lakukan,Dan Saya Akan MemberiKan Solusi Terbaik Terhadap Aplikasi Kreatif Yang Telah Saya Buat!</p>
              <Button nama="Connect With Me" />
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-0 lg:right-0">
                <img className="max-w-full mx-auto  brightness-150" src="images/myprofile.png" />
                <span className="absolute bottom-32 -z-[2] left-1/2 -translate-x-52">
                  <svg width={300} height={300} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f59e0b" d="M70.2,-32.8C82.6,-18.9,78.6,12.1,64.2,32C49.8,52,24.9,60.9,6.2,57.3C-12.4,53.7,-24.8,37.6,-36.6,19.1C-48.3,0.7,-59.5,-20.1,-53.3,-30.3C-47.1,-40.5,-23.6,-40.2,2.6,-41.7C28.9,-43.2,57.7,-46.6,70.2,-32.8Z" transform="translate(100 100) scale(1.2)" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pt-36 pb-32 lg:px-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2 xl:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-2 lg:text-2xl">About Me</h4>
              <div className="w-[150px] h-1 bg-dark-light mb-10"></div>
              <h2 className="font-bold text-dark text-2xl max-w-md mb-3 lg:text-3xl">Suka Belajar Hal Baru Dan Menyukai Tantangan</h2>
              <p className="font-medium text-base text-dark-light max-w-xl lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum unde voluptatibus provident esse dignissimos velit cum quis accusamus sequi. Delectus modi numquam!</p>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 xl:w-1/2">
              <h3 className="font-bold text-dark text-xl mb-2 lg:text-3xl lg:pt-20">Mari Berteman</h3>
              <p className="font-medium text-base text-dark-light mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum unde voluptatibus provident esse dignissimos velit cum quis accusamus sequi. Delectus modi numquam!</p>
              <div className="flex item-center">
                <IconBorder icon={<svg role="img" width={25} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>} />
                <IconBorder icon={<svg role="img" width={25} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>} />
                <IconBorder icon={<svg role="img" width={25} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>} />
                <IconBorder icon={<svg role="img" width={25} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>} />
                <IconBorder icon={<svg role="img" width={25} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portofolio" className="bg-slate-100 pt-3 pb-16">
        <br></br>
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h4 className="font-bold uppercase text-primary text-center text-lg mb-2 lg:text-2xl">Portofolio</h4>
              <div className="w-[150px] lg:w-[210px] h-1 bg-dark-light mb-10 ml-24 -translate-x-2 lg:ml-48 lg:-translate-x-3"></div>
              <h2 className="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className="w-full px-4 flex gap-5 flex-wrap justify-center xl:w-10/12 xl:mx-auto">

            <div class="card w-96 bg-base-100 shadow-xl">
              <figure><img src="/images/img1.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Project1!
                  <div className="badge badge-primary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">React</div>
                  <div className="badge badge-outline">Laravel</div>
                  <div className="badge badge-outline">Tailwind</div>
                </div>
              </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure><img src="/images/img1.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Project1!
                  <div className="badge badge-primary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">React</div>
                  <div className="badge badge-outline">Laravel</div>
                  <div className="badge badge-outline">Tailwind</div>
                </div>
              </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure><img src="/images/img1.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Project1!
                  <div className="badge badge-primary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">React</div>
                  <div className="badge badge-outline">Laravel</div>
                  <div className="badge badge-outline">Tailwind</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pt-3 pb-32 mt-20">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h4 className="font-bold uppercase text-primary text-center text-lg mb-2 lg:text-2xl">Contact</h4>
              <div className="w-[150px] lg:w-[210px] h-1 bg-dark-light mb-10 ml-24 -translate-x-2 lg:ml-48 lg:-translate-x-3"></div>
              <h2 className="font-bold text-dark text-3xl mb-4">Connect with me</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>

          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 mb-6">
                  <InputText title="Nama" />
                </div>
                <div className="w-full lg:w-1/2 px-4 mb-6">
                  <InputText title="Email" type="email" />
                </div>
              </div>
              <div className="w-full px-4 mb-6">
                <TextArea title="Message" />
              </div>
              <div className="w-full px-4">
                <div className="float-right">
                  <Button nama="Send" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap md:ml-28">
            <div className="w-full mb-12 px-4 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-white text-3xl mb-5">Wpu</h2>
              <h3 className="font-bold text-white text-2xl">Hubungi kami</h3>
              <p>rizkipou01@gmail.com</p>
              <p>jl.pahlawan no 72</p>
              <p>Lampung</p>
            </div>
            <div className="w-full mb-12 px-4 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-white text-xl mb-5">Kategori Tulisan</h2>
              <ul>
                <li><a className="inline-block text-base hover:text-primary mb-3">Programming</a></li>
                <li><a className="inline-block text-base hover:text-primary mb-3">Tekhnology</a></li>
                <li><a className="inline-block text-base hover:text-primary mb-3">Gaya Hidup</a></li>
              </ul>
            </div>
            <div className="w-full mb-12 px-4 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-white text-xl mb-5">Tautan</h2>
              <ul>
                <li><a className="inline-block text-base hover:text-primary mb-3">Beranda</a></li>
                <li><a className="inline-block text-base hover:text-primary mb-3">About Me</a></li>
                <li><a className="inline-block text-base hover:text-primary mb-3">Portofolio</a></li>
                <li><a className="inline-block text-base hover:text-primary mb-3">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-400">
            <div className="flex item-center justify-center mb-5">
              <a href="#" className="w-12 h-12 mr-3 rounded-full flex justify-center item-center text-slate-400 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width={25} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
              </a>
              <a href="#" className="w-12 h-12 mr-3 rounded-full flex justify-center item-center text-slate-400 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width={25} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
              <a href="#" className="w-12 h-12 mr-3 rounded-full flex justify-center item-center text-slate-400 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width={25} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
              </a>
              <a href="#" className="w-12 h-12 mr-3 rounded-full flex justify-center item-center text-slate-400 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width={25} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
              </a>
              <a href="#" className="w-12 h-12 mr-3 rounded-full flex justify-center item-center text-slate-400 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" width={25} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
            </div>
          </div>
          <p className="font-medium text-sm text-slate-400 text-center">Copyright	&copy; 2021-2022</p>
        </div>
      </footer>
    </div>
  )
}
