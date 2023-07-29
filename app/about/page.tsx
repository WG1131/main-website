import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="container place-content-center mt-20">
        <p className="text-3xl text-center"> About WG 1131 </p>
        <p className="text-xl text-center">
          {" "}
          WG 1131 is a group of 5 students studying in Zurich and living in
          Seebach.{" "}
        </p>
      </div>
    </>
  );
}
