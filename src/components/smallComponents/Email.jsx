import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

export default function Email() {
  return (
    <div className="w-96">
      <label htmlFor="email" className="text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Icon icon={faEnvelope} color="grey" />
        </div>
        <input
          type="email"
          id="email"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="E-mail"
          required
        />
        <button
          type="button"
          className="text-white absolute end-2.5 bottom-2.5 bg-[#4caf4f] hover:bg-[#409443] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          <Icon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}
