import PropTypes from 'prop-types';
import React from 'react';
import GsAiModal from './gs-ai-modal.jsx';
import ButtonComponent from '../components/button/button.jsx';
import { connect } from 'react-redux';
import {
    openMyai
} from '../reducers/modals';

import lan from '../../mycode/language/Local'
import myConfig from '../../mycode/config/MyConfig'

class GsTsButton extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            settingState:false
        }
    }
    componentWillMount() {
    }
    render () {
        const {
            settingVisible,
            onSetClick,
            ...props
        } = this.props;

        return (
            <ButtonComponent
                onClick={this.handleConnectStateChangTest.bind(this)}
                {...props}
            >
                Test
                {settingVisible ? (
                    <GsAiModal onChangeState ={this.handleConnectStateChang.bind(this)} />
                ) : null}
            </ButtonComponent>
        );
    }

    /*
    * 改变连接的状态
    * */
    handleConnectStateChang(value ){
        if(value !== this.state.settingState){
            this.setState({
                settingState:value
            });
        }
    }

    handleConnectStateChangTest(){
        console.log('test------ 2018-02-10-a4');
        let json = myConfig.vm.toJSON() || {};
        if (typeof json === 'string') json = JSON.parse(json);
        //console.log(json);
        let blocks = json.targets[1].blocks ;
        console.log(blocks);
    }
}

GsTsButton.propTypes = {
    settingVisible: PropTypes.bool,
    onSetClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    settingVisible: state.modals.myai
});

const mapDispatchToProps = dispatch => ({
    onSetClick: () => {
        dispatch(openMyai());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GsTsButton);
