import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice"; 

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const [searchValue, setSearchValue] = useState(nameFilter);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <p>Search by name</p>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
    </div>
  );
}
