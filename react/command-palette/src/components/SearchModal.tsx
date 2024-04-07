import React, { useState } from "react";
import { navlinks } from "../constants/navLinks";
import SearchSVG from "../icons/Search";
import { useHistory } from "react-router-dom";

const SearchModal = ({
  setShowSearchModal,
}: {
  setShowSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const [filteredNavLinks, setFilteredNavLinks] = useState(navlinks);

  const navigatePage = (link: string) => {
    setShowSearchModal(false);
    history.push(link);
  };

  return (
    <div
      className='full-screen-modal background'
      onClick={() => setShowSearchModal(false)}
    >
      <div
        className='modal-container main'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='searchContainer'>
          <SearchSVG className='searchIcon' />
          <input
            type='text'
            value={searchText}
            placeholder='Search for your destination page'
            onChange={(e) => {
              setSearchText(e.target.value);
              setFilteredNavLinks(
                navlinks.filter((link) =>
                  link.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
              );
            }}
            autoFocus
          />
        </div>
        <div>
          {filteredNavLinks.map((link) => {
            return (
              <button
                className='button'
                onClick={() => navigatePage(link.link)}
              >
                <link.icon className='icon' />
                {link.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
