import universityBG from "../assets/Pixel.png";
import dormitoryBG from "../assets/Pixel2.png";
const PaymentPage = () => {
  return (
    <>
      <section className="pt-15 p-4 grid gap-2 grid-cols-2 z-1">
        <article className="flex flex-col gap-2 justify-center items-center relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px] z-0"
            style={{ backgroundImage: `url(${dormitoryBG})` }}
          ></div>
          <p className="relative bg-[#b1e92f97] text-center text-white p-4 rounded w-[80%] ">
            Akademik
          </p>
          <button className="relative bg-[#b1e92ff1] text-center text-white p-4 rounded w-[80%] ">
            Opłać
          </button>
        </article>
        <article className="flex flex-col gap-2 justify-center items-center relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px] z-0"
            style={{ backgroundImage: `url(${universityBG})` }}
          ></div>
          <p className="relative bg-[#0aebee97] text-center text-white p-4 rounded w-[80%] ">
            Uniwersytet
          </p>
          <button className="relative bg-[#0aeaeee3] text-center text-white p-4 rounded w-[80%] ">
            Opłać
          </button>
        </article>
      </section>
    </>
  );
};

export default PaymentPage;
