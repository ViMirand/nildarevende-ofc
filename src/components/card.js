import Image from "next/image"

export default function Card({ name, price, type, img }){
    if(price%1==0){
      price = price+ ",00";
    }else(price%1!=0)
      price = price.toString().replace('.', ',');
    return(
        <div className="rounded-2xl border-2 border-gray-300 flex flex-col gap-2 px-4 py-5 items-center justify-center w-50 bg-white shadow-md">
            <Image
              className="dark bg-gray-300"
              src={img}
              alt="Vercel logomark"
              width={180}
              height={180}
            />
            <div className="bg-amber-600 w-10 h-0.5"></div>
            <div className="w-12/12 h-18 flex justify-between flex-col">
              <h3 className="font-bold">{name}</h3>
              <p className="font-extralight">{type}</p>
            </div>
            <div className="flex items-center justify-between w-12/12">
              <h3 className="text-amber-600 font-bold">R$ {price}</h3>
              <a>
                <Image
                  className="dark"
                  src="/icon-whatsapp.svg"
                  alt="Vercel logomark"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
    )
}