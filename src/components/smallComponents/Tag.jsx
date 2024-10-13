import { Link } from "react-router-dom";

export default function Tag({ content, route, color }) {
  return (
    <Link className={`${color} font-semibold hover:underline underline-offset-3 text-[1.1rem]`} to={route}>
      {content}
    </Link>
  );
}
