import Button from "../smallComponents/Button";

export default function Hero() {
  return (
    <section className="relative bg-[url(/Fa3ilKhair/assets/media/groupImage.jpeg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5F7FA] to-transparent"></div>
      <div className="relative mx-24 phone:mx-0 max-w-screen-xl phone:px-14 py-32 lg:flex lg:h-screen lg:items-center lg:px-0">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-[4rem] text-[#4D4D4D] text-start leading-[4rem] phone:leading-[2rem]">
            Fa3il Khair Initiative
            <strong className="block font-extrabold text-[#4CAF4F]"> Rabat </strong>
          </h1>
          <p className="mt-4 phone:mt-2 max-w-lg text-start sm:text-xl/relaxed">Initiative, Engagement, Compétence, Solidarité</p>
          <div className="mt-8 phone:mt-4 flex flex-wrap gap-4 text-center">
            <Button content={"Faites Un Don"} color={"bg-[#4CAF4F]"} />
          </div>
        </div>
      </div>
    </section>
  );
}
