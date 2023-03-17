import React, { useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import useBrowser from '../hooks/useBrowser';

export const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  const isBrowser = useBrowser();
  let throttleTimeout = null;

  const getScrollPosition = ({ element, useWindow }) => {
    if (!isBrowser) return { x: 0, y: 0 };

    const target = element ? element.current : document.body,
      position = target.getBoundingClientRect();

    return useWindow
      ? { x: window.scrollX, y: window.scrollY }
      : { x: position.left, y: position.top };
  };

  const position = useRef(getScrollPosition({ useWindow }));

  const callBack = () => {
    const currentPosition = getScrollPosition({ element, useWindow });

    effect({
      previousPosition: position.current,
      currentPosition: currentPosition,
    });
    position.current = currentPosition;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    if (!isBrowser) return;

    const handleScroll = () => {
      if (wait && !throttleTimeout)
        throttleTimeout = setTimeout(callBack, wait);
      else callBack();
    };

    window.addEventListener(`scroll`, handleScroll);

    return () => window.removeEventListener(`scroll`, handleScroll);
  }, deps);
};

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useScrollPosition(function setScrollPosition({ currentPosition }) {
    setScroll(currentPosition.y);
  });

  return (
    <header
      id="nav"
      className={` ${menuOpen ? 'open' : ''}  ${
        scroll < -100 ? 'scrolled' : ''
      }`}
    >
      {' '}
      <nav>
        <img src="../images/bgbgroup-logo-ko.png" />
        <div id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us/">About Us</Link>
        </li>
        <li>
          <Link to="/capabilities/">Capabilities</Link>
        </li>
        <li>
          <Link to="/opportunities/">Opportunities</Link>
        </li>
        <li>
          <Link to="/connect/">Connect</Link>
        </li>
      </ul>
    </header>
  );
};

Menu.propTypes = {
  siteTitle: PropTypes.string,
};

Menu.defaultProps = {
  siteTitle: ``,
};

export default Menu;
