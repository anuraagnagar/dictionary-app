import SearchButton from "../buttons/SearchButton";

const SearchForm = ({ query }) => {
    return (
        <form
            className="my-8 lg:my-10"
            onSubmit={query.submitForm}>
            <label
                htmlFor="searchInput"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
            </label>
            <div className="relative">
                <input
                    id="searchInput"
                    type="search"
                    value={query.word}
                    className="block w-full p-3 px-4 md:p-4 md:px-5 text-lg text-gray-900 outline-none focus:outline-offset-0 focus:outline focus:outline-pink-700 focus:outline-3 rounded-lg bg-gray-100 sm:text-md dark:bg-gray-900 dark:placeholder-gray-400 dark:text-white ease-in-out duration-200"
                    placeholder="Search Words..."
                    onInput={(e) => query.setWord(e.target.value)}
                    required
                />
                <SearchButton />
            </div>
        </form>
    );
};

export default SearchForm;
