import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

export default function Button({ arrow, content, color }) {
  return (
    <button className={`${color} px-7 py-3  text-white font-bold rounded hover:bg-[#409443] text-[1.1rem] flex items-center gap-2`}>
      {content} {arrow ? <Icon icon={faArrowRight} /> : null}
    </button>
  );
}
