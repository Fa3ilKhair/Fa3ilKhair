export default function Button({arrow,content,color}){
    return(
        <button className={`${color} h-[40px] rounded-sm w-[150px]  text-white font-thin`}  >{content}</button>
    );
}