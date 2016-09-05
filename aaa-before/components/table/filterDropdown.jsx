import * as React from 'react';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import Dropdown from '../dropdown';
import Icon from '../icon';
import Checkbox from '../checkbox';
import Radio from '../radio';
const FilterDropdownMenuWrapper = ({ onClick, children }) => (<div className="rubix-table-filter-dropdown" onClick={onClick}>{children}</div>);
export default class FilterMenu extends React.Component {
    constructor(props) {
        super(props);
        this.setSelectedKeys = ({ selectedKeys }) => {
            this.setState({ selectedKeys });
        };
        this.handleClearFilters = () => {
            this.setState({
                selectedKeys: [],
            }, this.handleConfirm);
        };
        this.handleConfirm = () => {
            this.setState({
                visible: false,
            });
            this.confirmFilter();
        };
        this.onVisibleChange = (visible) => {
            this.setState({
                visible,
            });
            if (!visible) {
                this.confirmFilter();
            }
        };
        this.handleMenuItemClick = (info) => {
            if (info.keyPath.length <= 1) {
                return;
            }
            const keyPathOfSelectedItem = this.state.keyPathOfSelectedItem;
            if (this.state.selectedKeys.indexOf(info.key) >= 0) {
                // deselect SubMenu child
                delete keyPathOfSelectedItem[info.key];
            }
            else {
                // select SubMenu child
                keyPathOfSelectedItem[info.key] = info.keyPath;
            }
            this.setState({ keyPathOfSelectedItem });
        };
        this.state = {
            selectedKeys: props.selectedKeys,
            keyPathOfSelectedItem: {},
            visible: false,
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedKeys: nextProps.selectedKeys,
        });
    }
    confirmFilter() {
        if (this.state.selectedKeys !== this.props.selectedKeys) {
            this.props.confirmFilter(this.props.column, this.state.selectedKeys);
        }
    }
    renderMenuItem(item) {
        const { column } = this.props;
        const multiple = ('filterMultiple' in column) ? column.filterMultiple : true;
        return (<MenuItem key={item.value}>
        {multiple
            ? <Checkbox checked={this.state.selectedKeys.indexOf(item.value.toString()) >= 0}/>
            : <Radio checked={this.state.selectedKeys.indexOf(item.value.toString()) >= 0}/>}
        <span>{item.text}</span>
      </MenuItem>);
    }
    renderMenus(items) {
        return items.map(item => {
            if (item.children && item.children.length > 0) {
                const { keyPathOfSelectedItem } = this.state;
                const containSelected = Object.keys(keyPathOfSelectedItem).some(key => keyPathOfSelectedItem[key].indexOf(item.value) >= 0);
                const subMenuCls = containSelected ? 'rubix-dropdown-submenu-contain-selected' : '';
                return (<SubMenu title={item.text} className={subMenuCls} key={item.value.toString()}>
            {item.children.map(child => this.renderMenuItem(child))}
          </SubMenu>);
            }
            return this.renderMenuItem(item);
        });
    }
    render() {
        const { column, locale } = this.props;
        // default multiple selection in filter dropdown
        const multiple = ('filterMultiple' in column) ? column.filterMultiple : true;
        const menus = column.filterDropdown ? column.filterDropdown : (<FilterDropdownMenuWrapper>
        <Menu multiple={multiple} onClick={this.handleMenuItemClick} prefixCls="rubix-dropdown-menu" onSelect={this.setSelectedKeys} onDeselect={this.setSelectedKeys} selectedKeys={this.state.selectedKeys}>
          {this.renderMenus(column.filters)}
        </Menu>
        <div className="rubix-table-filter-dropdown-btns">
          <a className="rubix-table-filter-dropdown-link confirm" onClick={this.handleConfirm}>
            {locale.filterConfirm}
          </a>
          <a className="rubix-table-filter-dropdown-link clear" onClick={this.handleClearFilters}>
            {locale.filterReset}
          </a>
        </div>
      </FilterDropdownMenuWrapper>);
        const dropdownSelectedClass = (this.props.selectedKeys.length > 0)
            ? 'rubix-table-filter-selected' : '';
        return (<Dropdown trigger={['click']} overlay={menus} visible={this.state.visible} onVisibleChange={this.onVisibleChange}>
        <Icon title={locale.filterTitle} type="filter" className={dropdownSelectedClass}/>
      </Dropdown>);
    }
}
FilterMenu.defaultProps = {
    handleFilter() { },
    column: null,
};
