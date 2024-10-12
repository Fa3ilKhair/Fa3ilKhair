import Button from "../smallComponents/Button";

export default function FooterOne() {
  return (
    <div className="h-96 flex flex-col justify-center items-center bg-[#F5F7FA] gap-5">
      <h1 className="text-6xl font-bold text-center text-[#263238]">
        Soutenez le changement,
        <br />
        offrez de l'espoir
      </h1>
      <Button content="Faites un Don" color="bg-[#4caf4f]" arrow={true} />
    </div>
  );
}
