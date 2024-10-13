import Icon from "./Icon";

export default function SocialMediaIcon({ icon }) {
  return (
    <a href="#" className="bg-[#3c464c] w-12 h-12 rounded-full flex justify-center items-center hover:bg-[#3c464c50]">
      <Icon icon={icon} className="text-3xl" />
    </a>
  );
}
