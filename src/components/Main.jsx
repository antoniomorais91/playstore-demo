import Aside from "./Aside";
import Offers from "./Offers";

export default function Main() {
  return (
    <>
      <section className="main">
        <Aside />
        <Offers />
      </section>
    </>
  );
}
