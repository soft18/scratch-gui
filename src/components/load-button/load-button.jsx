import PropTypes from 'prop-types';
import React from 'react';

import ButtonComponent from '../button/button.jsx';
import {ComingSoonTooltip} from '../coming-soon/coming-soon.jsx';

import styles from './load-button.css';
import lan from '../../../mycode/language/Local';

const LoadButtonComponent = ({
    inputRef,
    onChange,
    onClick,
    title,
    ...props
}) => (
    <span {...props}>
        <ButtonComponent onClick={onClick}><i className="fa fa-folder-open-o" aria-hidden="true"></i> {lan.data.gui_menu_load}</ButtonComponent>
        <input
            className={styles.fileInput}
            ref={inputRef}
            type="file"
            onChange={onChange}
        />
    </span>
);

LoadButtonComponent.propTypes = {
    className: PropTypes.string,
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};
LoadButtonComponent.defaultProps = {
    title: 'Load'
};
export default LoadButtonComponent;
