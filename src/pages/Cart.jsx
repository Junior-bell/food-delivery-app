    // src/pages/Cart.jsx
    import { useCart } from "../context/cartContext";
    import { Link } from "react-router-dom";
    import "./Cart.css";

    function Cart() {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryFee = cart.length > 0 ? 3.99 : 0;
    const total = subtotal + deliveryFee;
    const estimatedTime = cart.length > 0 ? "30-40 min" : "-";

    const handleCheckout = () => {
        alert("Proceeding to checkout (mock)");
        // Integrate payment gateway here (e.g., Stripe)
    };

    if (cart.length === 0) {
        return (
        <div className="max-w-2xl mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center">
            <img src="https://assets-v2.lottiefiles.com/a/2b2e2b2e-2b2e-2b2e-2b2e-2b2e2b2e2b2e/empty-cart.json" alt="Empty Cart" className="w-48 h-48 mb-6" />
            <h2 className="text-3xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
            <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Continue Shopping
            </Link>
        </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-xl">
        {/* Progress Bar */}
        <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-500 h-3 rounded-full transition-all duration-500" style={{ width: "60%" }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
            <span>Cart</span>
            <span>Checkout</span>
            <span>Done</span>
            </div>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Your Shopping Cart</h2>
        <div className="divide-y divide-gray-200">
            {cart.map((item) => (
            <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between py-6 transition-all"
            >
                <div className="flex items-center flex-grow mb-4 md:mb-0">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg mr-4 border border-gray-200"
                />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center text-white font-bold bg-red-500 rounded-full transition-colors duration-200 hover:bg-red-600"
                >
                    -
                </button>
                <span className="font-bold text-lg text-gray-700">{item.quantity}</span>
                <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-white font-bold bg-green-500 rounded-full transition-colors duration-200 hover:bg-green-600"
                >
                    +
                </button>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-gray-500 hover:text-red-600 text-sm font-medium transition-colors duration-200"
                >
                    Remove
                </button>
                </div>
            </div>
            ))}
        </div>
        {/* Summary Card */}
        <div className="mt-10 flex flex-col md:flex-row justify-end gap-8">
            <div className="w-full md:w-1/2 bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-700">Order Summary</h3>
            <div className="flex justify-between mb-2 text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-600">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-700 font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-500">
                <span>Estimated Delivery</span>
                <span>{estimatedTime}</span>
            </div>
            <button
                onClick={handleCheckout}
                className="checkout-button w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
                Proceed to Checkout
            </button>
            </div>
        </div>
        </div>
    );
    }
    export default Cart;