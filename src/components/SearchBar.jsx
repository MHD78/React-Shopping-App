const SearchBar = ({ value, setValue }) => {
  return (
    <div className="p-2">
      <span className="text-lg lg:text-xl font-bold">Search</span>
      <input
        className="dark:bg-zinc-500 w-full mt-2 px-2 border-2 border-primary focus:border-hoverPrimary outline-none rounded-lg"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
