import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';

import Box from '../box/box.jsx';
import IconButton from '../icon-button/icon-button.jsx';
import CostumeCanvas from '../costume-canvas/costume-canvas.jsx';
import styles from './stage-selector.css';
import backdropIcon from './icon--backdrop.svg';
import lan from '../../../mycode/language/Local'

const addBackdropMessage = (
    <FormattedMessage
        defaultMessage="Add Backdrop"
        description="Button to add a backdrop in the target pane"
        id="gui.stageSelector.targetPaneAddBackdrop"
    />
);

const StageSelector = props => {
    const {
        backdropCount,
        selected,
        url,
        onClick,
        onNewBackdropClick,
        ...componentProps
    } = props;
    let backdropText = lan.data.gui_console_backdrop;
    return (
        <Box
            className={classNames(styles.stageSelector, {
                [styles.isSelected]: selected
            })}
            onClick={onClick}
            {...componentProps}
        >
            <div className={styles.header}>
                <div className={styles.headerTitle}>{lan.data.gui_console_stage}</div>
            </div>
            {url ? (
                <CostumeCanvas
                    className={styles.costumeCanvas}
                    height={42}
                    url={url}
                    width={56}
                />
            ) : null}
            <div className={styles.label}>
              {backdropText}
            </div>
            <div className={styles.count}>{backdropCount}</div>
            <IconButton
                className={styles.addButton}
                img={backdropIcon}
                title={lan.data.gui_ex_add_backdrop}
                onClick={onNewBackdropClick}
            />
        </Box>
    );
};

StageSelector.propTypes = {
    backdropCount: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    onNewBackdropClick: PropTypes.func,
    selected: PropTypes.bool.isRequired,
    url: PropTypes.string
};
export default StageSelector;
