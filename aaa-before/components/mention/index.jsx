import * as React from 'react';
import RcMention, { Nav, toString, toEditorState, getMentions } from 'rc-editor-mention';
import classnames from 'classnames';
export default class Mention extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: props.suggestions,
            focus: false,
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            suggestions: nextProps.suggestions,
        });
    }
    onSearchChange(value) {
        if (this.props.onSearchChange) {
            return this.props.onSearchChange(value);
        }
        return this.defaultSearchChange(value);
    }
    onChange(editorState) {
        if (this.props.onChange) {
            this.props.onChange(editorState);
        }
    }
    defaultSearchChange(value) {
        const searchValue = value.toLowerCase();
        const filteredSuggestions = this.props.suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(searchValue) !== -1);
        this.setState({
            suggestions: filteredSuggestions,
        });
    }
    render() {
        const { className, prefixCls, style, multiLines, defaultValue } = this.props;
        let { notFoundContent } = this.props;
        const { suggestions, focus } = this.state;
        const cls = classnames({
            [className]: !!className,
            ['active']: focus,
        });
        if (this.props.loading) {
            notFoundContent = <i className="anticon anticon-loading"></i>;
        }
        return <RcMention {...this.props} className={cls} prefixCls={prefixCls} style={style} defaultValue={defaultValue} multiLines={multiLines} onSearchChange={this.onSearchChange.bind(this)} onChange={this.onChange.bind(this)} onFocus={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false })} suggestions={suggestions} notFoundContent={notFoundContent}/>;
    }
}
Mention.Nav = Nav;
Mention.toString = toString;
Mention.toEditorState = toEditorState;
Mention.getMentions = getMentions;
Mention.defaultProps = {
    prefixCls: 'rubix-mention',
    suggestions: [],
    notFoundContent: '无匹配结果，轻敲空格完成输入',
    loading: false,
    multiLines: false,
};
