import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';

export default function MobileNav(props) {
  const { pages, showMenu, onToogleMenu } = props;
  const classes = useStyles(props);
  const [hoveredMenu, setHoveredMenu] = useState(pages.length > 0 && pages[0].title);

  return (
    <div className={clsx({ [classes.navActive]: showMenu, [classes.nav]: true })}>
      <CloseIcon fontSize="large" className={classes.closeMenu} onClick={onToogleMenu} />
      <div className={classes.navContent}>
        <div className={classes.currentPageShadow}>{hoveredMenu}</div>
        <ul className={classes.innerNav}>
          {pages.map(({ title, href }) => (
            <li
              key={title}
              className={classes.innerNavListItem}
              onMouseEnter={() => setHoveredMenu(title)}
              onMouseLeave={() => setHoveredMenu(title)}
            >
              <Link className={classes.innerNavLink} to={href} onClick={onToogleMenu}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MobileNav.propTypes = {
  pages: PropTypes.array,
  showMenu: PropTypes.bool,
  onToogleMenu: PropTypes.func
};
