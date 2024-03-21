import { Food } from "./static/food";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-cols justify-between p-24">
      {Food.map((x, y) => {
        return (
          <>
            <p key={y}>{x.category}</p>
            <li>{x.name}</li>
          </>
        );
      })}
    </main>
  );
}
