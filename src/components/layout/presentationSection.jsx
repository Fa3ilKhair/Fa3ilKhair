import Button from "../smallComponents/Button";
export default function PresentationSection(){
    return(
        <section className=" px-20 py-20 bg-white flex justify">
            <img className="h-96 pr-24" src="/Fa3ilKhair/assets/presentationImg.png" alt="assosiation.png" />
            <div className="flex flex-col justify-evenly ">
                <h1 className="font-bold text-4xl">Qui sommes-nous?</h1>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla quos voluptatum odit commodi vel iure vero, itaque fugiat,
                    iste consequuntur? Iusto accusamus suscipit eligendi voluptatibus laboriosam quaerat corrupti aliquam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla quos voluptatum odit commodi vel iure vero, itaque fugiat,
                    iste consequuntur? Iusto accusamus suscipit eligendi voluptatibus laboriosam quaerat corrupti aliquam</p>
                <Button content="En savoir plus" color="bg-[#4CAF4F]"/>
            </div>
        </section>
    );
}