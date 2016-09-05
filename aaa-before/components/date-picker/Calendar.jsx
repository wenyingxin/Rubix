import * as React from 'react';
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN';
import RcCalendar from 'rc-calendar';
export default class Calendar extends React.Component {
    render() {
        return <RcCalendar {...this.props}/>;
    }
}
Calendar.defaultProps = {
    locale: CalendarLocale,
    prefixCls: 'rubix-calendar',
};
