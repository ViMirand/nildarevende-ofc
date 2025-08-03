import Card from "@/components/card";
import Faixa from "@/components/faixa";
import Market from "@/components/market";
import Posts from "@/components/posts";
import Routes from "@/components/navBar";
import Data from "@/data/dados";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Market title={"Mais procurados"}></Market>
      <div className="flex justify-between ">
        <div className="flex flex-wrap gap-3 w-full pl-5 pr-5">
          {Data && Data.slice(0,8).map((item) => (
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
