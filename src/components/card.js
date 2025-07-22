import Image from "next/image"

export default function Card({ name, price, type, img }){
    if(price%1==0){
      price = price+ ",00";
    }else(price%1!=0)
      price = price.toString().replace('.', ',');
    return(
        <div className="rounded-2xl border-2 flex flex-col gap-2 p-5 items-center justify-center w-56 bg-white">
            <Image
              className="dark"
              src={img}
              alt="Vercel logomark"
              width={150}
              height={150}
            />
            <div className="bg-amber-600 w-10 h-0.5"></div>
            <div className="w-12/12">
              <h1>{name}</h1>
              <p>{type}</p>
            </div>
            <div className="flex items-center justify-between w-12/12">
              <h3 className="text-amber-600">R$ {price}</h3>
              <a className="rounded-full border-2">
                <Image
                  className=""
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
              </a>
              <a>
                <Image
                  className="dark"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
    )
}