export default function Counter(props) {
    const { counter, setCounter } = props;

    return (
        <form className="w-full mt-4">
            <label
                htmlFor="counter-input"
                className="block mb-1 text-sm"
            >
                SELECT:
            </label>
            <div className="relative flex items-center">
                <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
                    className="flex-shrink-0 bg-gray-100 dark:bg-black-700 dark:hover:bg-black-600 dark:border-black-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    onClick={() => setCounter(counter - 1)}
                >
                    <svg
                        className="w-2.5 h-2.5 text-black-900 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                        />
                    </svg>
                </button>
                <input
                    type="text"
                    id="counter-input"
                    data-input-counter=""
                    className="flex-shrink-0 text-gray-900 dark:text-black border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                    defaultValue={counter}
                    onChange={(e) => setCounter(e.target.value)}
                    value={counter}
                />
                <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    className="flex-shrink-0 bg-gray-100 dark:bg-white-700 dark:hover:bg-white-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    onClick={() => setCounter(counter + 1)}
                >
                    <svg
                        className="w-2.5 h-2.5 text-gray-900 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
}
