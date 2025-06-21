function MenuItem({ item, onAddToCart }) {
  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl my-4">
      <img className="w-1/3 h-auto object-cover" src={item.image} alt={item.name} />
      <div className="w-2/3 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
          <p className="mt-1 text-gray-600 text-sm">{item.description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-blue-600">${item.price.toFixed(2)}</p>
          <button 
            onClick={() => onAddToCart(item)}
            className="bg-green-500 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;

