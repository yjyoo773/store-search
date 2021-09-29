import React, { useState, useContext } from "react";
import Result from "./result.js";
import { SettingContext } from "../context/state.js";

function AutoComplete(props) {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const context = useContext(SettingContext);

  let suggestions;
  if (props.suggest) {
    suggestions = props.suggest.map((x) => x.name);
  }
  const onChange = (e) => {
    const input = e.currentTarget.value;
    const newSuggest = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );

    setActive(0);
    setFiltered(newSuggest);
    setIsShow(true);
    context.changeInput(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (context.input)
    context.changeSubmit(props.suggest.find((x) => x.name === context.input) || {});

  };

  const onClick = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    context.changeInput(e.currentTarget.innerText);

  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActive(0);
      setIsShow(false);
    context.changeInput(filtered[active]);

    } else if (e.keyCode === 38) {
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };

  const renderAutocomplete = () => {
    if (isShow && context.input) {
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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={context.input}
          placeholder="Store Name"
        />
        <button>Submit</button>
      </form>
      {renderAutocomplete()}
      {Object.keys(context.submitVal).length > 0 ? (
        <Result result={context.submitVal} store={props.suggest} />
      ) : (
        ""
      )}
    </>
  );
}

export default AutoComplete;
