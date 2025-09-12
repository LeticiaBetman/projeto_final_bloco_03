import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Farmácia</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/categorias">Categorias</Link>
      </div>
    </nav>
  );
}
export default Navbar;
