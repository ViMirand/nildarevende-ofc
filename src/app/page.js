import Card from "@/components/card";
import Faixa from "@/components/faixa";
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
      <Card name={"Vic"} price={'20,00'} type={"Avon"}/>
      <footer className="items-center">
        Made by: Victória Miranda
      </footer>
    </div>
  );
}
