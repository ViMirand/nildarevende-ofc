export default function Faixa({type1, type2}){

    const T1 = type1;
    const T2 = type2;
    const result = Array.from({length:16}, ()=> `  •  ${T1}  •  ${T2}`).join('');

    return(
        <div className="font-bold text-xs bg-blue-950 text-amber-50 flex flex-wrap gap-4 justify-center w-full">
            <span className="whitespace-nowrap">{result}</span>
        </div>
    )
}