import Button from "../smallComponents/Button";

export default function FooterOne() {
  return (
    <div className="py-24 flex flex-col justify-center items-center bg-[#F5F7FA] gap-5 px-6 w-full">
      <h1 className="text-[4rem] font-bold text-center text-[#263238] leading-[4rem]">
        Soutenez le changement,
        <br />
        offrez de l'espoir
      </h1>
      <Button content="Faites un Don" color="bg-[#4caf4f]" />
    </div>
  );
}
