import Image from "next/image"
import ava from '@/assets/images/ava.jpg'

export default function Baner() {
    return(<>
    <section className="max-w-7xl m-auto flex items-center my-[100px] justify-between xs:block xs:px-[15px] xs:py-[20px]">
        <div>
            <h1 className="text-[#42446E] text-[58px] font-[600] xs:text-center">Hi👋, <br /> I`m <span className="text-[#13B0F5]">Kibriyo</span> <br /> I build things for web</h1>
        </div>
        <div>
          <Image src={ava} className="w-[350px] h-[350px] rounded-full xs:m-auto" />
        </div>
    </section>
    </>)
}