import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import omit from 'object.omit';
import warning from 'warning';
import assign from 'object-assign';
import FormItem from './FormItem';
import createDOMForm from 'rc-form/lib/createDOMForm';
import { FIELD_META_PROP } from './constants';
class FormComponent extends React.Component {
}
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        warning(!props.form, 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.');
    }
    shouldComponentUpdate(...args) {
        return PureRenderMixin.shouldComponentUpdate.apply(this, args);
    }
    render() {
        const { prefixCls, className, inline, horizontal, vertical } = this.props;
        const formClassName = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-horizontal`]: horizontal,
            [`${prefixCls}-vertical`]: vertical,
            [`${prefixCls}-inline`]: inline,
            [className]: !!className,
        });
        const formProps = omit(this.props, [
            'prefixCls',
            'className',
            'inline',
            'horizontal',
            'vertical',
            'form',
        ]);
        return <form {...formProps} className={formClassName}/>;
    }
}
Form.defaultProps = {
    prefixCls: 'rubix-form',
    onSubmit(e) {
        e.preventDefault();
    },
};
Form.propTypes = {
    prefixCls: React.PropTypes.string,
    vertical: React.PropTypes.bool,
    horizontal: React.PropTypes.bool,
    inline: React.PropTypes.bool,
    children: React.PropTypes.any,
    onSubmit: React.PropTypes.func,
};
Form.Item = FormItem;
Form.create = (options) => {
    const formWrapper = createDOMForm(assign({}, options, {
        fieldNameProp: 'id',
        fieldMetaProp: FIELD_META_PROP,
    }));
    /* eslint-disable react/prefer-es6-class */
    return (Component) => formWrapper(React.createClass({
        propTypes: {
            form: PropTypes.object.isRequired,
        },
        childContextTypes: {
            form: PropTypes.object.isRequired,
        },
        getChildContext() {
            return {
                form: this.props.form,
            };
        },
        render() {
            const getFieldProps = this.props.form.getFieldProps;
            function deprecatedGetFieldProps(name, option) {
                warning(false, '`getFieldProps` is deprecated and will be removed in future, please use `getFieldDecorator` instead');
                return getFieldProps(name, option);
            }
            this.props.form.getFieldProps = deprecatedGetFieldProps;
            return <Component {...this.props}/>;
        },
    }));
};
