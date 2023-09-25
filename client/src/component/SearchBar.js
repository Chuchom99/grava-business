import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () =>  {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit= (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
  }

 return(
  <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
    
    <div className="flex flex-row justify-start items-center" >
      <FiSearch  />
      <input name="search-filed" autoComplete="off" id="search-field" 
      placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  </form>
)};

export default Searchbar;