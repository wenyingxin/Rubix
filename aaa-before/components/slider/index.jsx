import * as React from 'react';
import { PropTypes } from 'react';
import RcSlider from 'rc-slider';
import splitObject from '../_util/splitObject';
export default class Slider extends React.Component {
    render() {
        const [{ isIncluded, marks, index, defaultIndex }, others] = splitObject(this.props, ['isIncluded', 'marks', 'index', 'defaultIndex']);
        if (isIncluded !== undefined) {
            // 兼容 `isIncluded`
            others.included = isIncluded;
        }
        if (Array.isArray(marks)) {
            // 兼容当 marks 为数组的情况
            others.min = 0;
            others.max = marks.length - 1;
            others.step = 1;
            if (index !== undefined) {
                others.value = index;
            }
            if (defaultIndex !== undefined) {
                others.defaultValue = defaultIndex;
            }
            others.marks = {};
            marks.forEach((val, idx) => {
                others.marks[idx] = val;
            });
        }
        else {
            others.marks = marks;
        }
        return <RcSlider {...others}/>;
    }
}
Slider.defaultProps = {
    prefixCls: 'rubix-slider',
    tipTransitionName: 'zoom-down',
};
Slider.propTypes = {
    prefixCls: PropTypes.string,
    tipTransitionName: PropTypes.string,
    included: PropTypes.bool,
    marks: PropTypes.object,
};
