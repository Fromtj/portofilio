import Baner from "@/components/baner/baner"
import Tech from "@/components/tech/tech"
import Card from "@/components/card/card"
import About from "@/components/about/about"
import comfy from '@/assets/images/comfy.png'
import propath from '@/assets/images/propath.png'
import db from '@/assets/images/db.png'

export default function Home() {
  return(<>
  <Baner/>
  <About/>
  <Tech/>
  <section className="max-w-7xl m-auto my-[100px] px-[15px]">
    <h1 className="text-[#42446E] text-[48px] font-[600] text-center">Projects</h1>
    <p className="text-center text-[25px] text-[#666666]">Things I’ve built so far</p>
    <div className="grid grid-cols-3 gap-[40px] m-auto xs:grid-cols-1 xs:gap-x-[20px] xs:m-auto xs:mt-[20px]">
     <Card image={comfy} title={'Comfy'} techStack={'Nextjs, css, html'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
     <Card image={propath} title={'ProPath'} techStack={'React, css, html'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
     <Card image={db} title={'DB-'} techStack={'Nextjs, css, html'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>
    </div>
  </section>
  </>)
}