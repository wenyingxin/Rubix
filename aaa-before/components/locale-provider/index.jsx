import * as React from 'react';
import { changeConfirmLocale } from '../modal/locale';
export default class LocaleProvider extends React.Component {
    getChildContext() {
        return {
            antLocale: this.props.locale,
        };
    }
    componentDidMount() {
        this.componentDidUpdate();
    }
    componentDidUpdate() {
        const { locale } = this.props;
        changeConfirmLocale(locale && locale.Modal);
    }
    componentWillUnMount() {
        changeConfirmLocale();
    }
    render() {
        return React.Children.only(this.props.children);
    }
}
LocaleProvider.propTypes = {
    locale: React.PropTypes.object,
};
LocaleProvider.childContextTypes = {
    antLocale: React.PropTypes.object,
};
