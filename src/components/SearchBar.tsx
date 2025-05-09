"use client";
import { FiSearch } from "react-icons/fi";

type SearchBarProps = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ placeholder, onChange }: SearchBarProps) => {
  return (
    <div className="relative mb-6 ">
      <FiSearch className="absolute left-3 top-3 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        className="border w-full pl-10 p-3 rounded-md"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
