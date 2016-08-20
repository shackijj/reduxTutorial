import FilterLink from './FilterLink';
import React from "react";

const Footer = ({
    store
}) => (
    <p>
        Show:
        {' '}
        <FilterLink store={store} filter='SHOW_ALL'>
            All
        </FilterLink>
        {' '}
        <FilterLink store={store} filter='SHOW_ACTIVE'>
            Active
        </FilterLink>
        {' '}
        <FilterLink store={store} filter='SHOW_COMPLETED'>
            Completed
        </FilterLink>
    </p>
);

export default Footer;