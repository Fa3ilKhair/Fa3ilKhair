export default function Button({arrow,content,color}){
    return(
        <button className={`${color} p-1 rounded-sm w-[150px] text-white font-thin`}  >{content}</button>
    );
}