import React from "react";
import PropTypes from 'prop-types';
// import css from './Section.module.css';
// import { ReactPropTypes } from "react";

const Section = ({title, children = ''}) => {
    return (
        <section>
            <h2 className="Title">{title}</h2>
            {children}
        </section>
    )
}

export default Section;


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

