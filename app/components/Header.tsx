export default function Header() {
  return (
    <div className="mt-3 mx-5 flex justify-left	gap-x-8">
      <a href="./">
        <button>Home</button>
      </a>
      <a href="./about">
        <button>About</button>
      </a>
      <a href="./whoishome">
        <button>Who's Home?</button>
      </a>
    </div>
  );
}
