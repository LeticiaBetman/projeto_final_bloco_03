function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Farmácia</h1>
      <div className="space-x-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/categorias" className="hover:underline">
          Categorias
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
