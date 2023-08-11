import "./style.css";

export function ToDoList() {
  return (
    <div className="w-3/4 max-w-[400px] mx-auto">
      <div className="bg-white py-6 px-4 rounded shadow mt-32">
        <div className="w-full">
          <input
            className="block w-full border bg-gray-50 border-gray-200 rounded py-2 px-4 leading-tight focus:bg-white focus:border-gray-500 focus:outline-none"
            type="text"
            placeholder="Adicionar Item"
          />
        </div>
      </div>
      <button className="mt-2 py-2 flex items-center justify-center bg-red-500 rounded w-full">
        Adicionar
      </button>
      <ul className="border-gray-200 rounded overflow-hidden shadow">
        <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between">
          <span>Item 1</span>
          <button className="text-red-700 font-bold delete">x</button>
        </li>
      </ul>
    </div>
  );
}
