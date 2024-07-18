import "./not-found-style.css";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center text-center min-h-screen flex-col">
      <h2 className="text-9xl font-bold hack-font">404</h2>
      <h4 className="text-7xl mt-4 font-medium uppercase hack-font">
        Page not found
      </h4>
    </div>
  );
}
