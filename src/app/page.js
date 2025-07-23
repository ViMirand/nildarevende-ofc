import Card from "@/components/card";
import Faixa from "@/components/faixa";
import Posts from "@/components/posts";
import Data from "@/data/dados";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Faixa type1={"Avon"} type2={"Natura"}/>
      <header className="flex flex-1/3 justify-between items-center px-5">
        <Image
          className="dark"
          src="/logo.svg"
          alt="Nilda Revende logomark"
          width={150}
          height={150}
        />
        <div>rotas</div>
        <div>Search</div>
      </header>
      <div className="flex justify-between h-170">
        <div className="flex flex-wrap gap-3 w-full pl-5 pr-5">
          {Data && Data.map((item) => (
            <Card key={item.key} name={item.name} price={item.price} type={item.type} img={item.img}/>
          ))}
        </div>
        <Posts/>
      </div>
      <footer className=" flex justify-center mt-1">
        Made by: Victória Miranda
      </footer>
    </div>
  );
}
