import React, { useState } from "react";

function AutoComplete(props) {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  let suggestions;
  if (props.suggest) {
    suggestions = props.suggest.map((x) => x.name);
  }
  const onChange = (e) => {
    // const { suggest } = props;
    // const suggest = arr;
    const input = e.currentTarget.value;
    const newSuggest = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );

    setActive(0);
    setFiltered(newSuggest);
    setIsShow(true);
    setInput(e.currentTarget.value);
  };

  const onClick = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className="autocomplete">
            {filtered.map((suggestion, idx) => {
              let className;
              if (idx === active) {
                className = "active";
              }
              return (
                <li className={className} key={idx} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-auto">
            <em>Not Found</em>
          </div>
        );
      }
    }
    return <></>;
  };

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      {renderAutocomplete()}
    </>
  );
}

export default AutoComplete;