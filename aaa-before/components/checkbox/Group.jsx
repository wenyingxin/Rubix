import * as React from 'react';
import Checkbox from './index';
import PureRenderMixin from 'react-addons-pure-render-mixin';
export default class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.toggleOption = (option) => {
            const optionIndex = this.state.value.indexOf(option.value);
            const value = [...this.state.value];
            if (optionIndex === -1) {
                value.push(option.value);
            }
            else {
                value.splice(optionIndex, 1);
            }
            if (!('value' in this.props)) {
                this.setState({ value });
            }
            this.props.onChange(value);
        };
        let value;
        if ('value' in props) {
            value = props.value || [];
        }
        else if ('defaultValue' in props) {
            value = props.defaultValue || [];
        }
        this.state = { value };
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value || [],
            });
        }
    }
    shouldComponentUpdate(...args) {
        return PureRenderMixin.shouldComponentUpdate.apply(this, args);
    }
    getOptions() {
        const { options } = this.props;
        // https://github.com/Microsoft/TypeScript/issues/7960
        return options.map(option => {
            if (typeof option === 'string') {
                return {
                    label: option,
                    value: option,
                };
            }
            return option;
        });
    }
    render() {
        const options = this.getOptions();
        return (<div className="rubix-checkbox-group">
        {options.map(option => <Checkbox disabled={'disabled' in option ? option.disabled : this.props.disabled} checked={this.state.value.indexOf(option.value) !== -1} onChange={() => this.toggleOption(option)} className="rubix-checkbox-group-item" key={option.value}>
              {option.label}
            </Checkbox>)}
      </div>);
    }
}
CheckboxGroup.defaultProps = {
    options: [],
    defaultValue: [],
    onChange() { },
};
CheckboxGroup.propTypes = {
    defaultValue: React.PropTypes.array,
    value: React.PropTypes.array,
    options: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func,
};