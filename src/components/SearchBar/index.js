import React, { useState, useEffect, useRef } from "react";

import searchIcon from "../../images/search-icon.svg";
//styles
import { Wrapper, Content } from "./SearchBar.styles";
import PropTypes from "prop-types";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="searchicon" />
        <input
          type="text"
          placeholder="Search Movie"
          value={state}
          onChange={(e) => {
            setState(e.currentTarget.value);
          }}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
