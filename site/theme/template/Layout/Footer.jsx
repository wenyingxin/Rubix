import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Select, Modal } from 'antd';
import { version as antdVersion } from 'antd/package.json';
import { docVersions } from '../../';

const Option = Select.Option;

function isLocalStorageNameSupported() {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

docVersions[antdVersion] = antdVersion;

class Footer extends React.Component {
  componentDidMount() {
    // for some iOS
    // http://stackoverflow.com/a/14555361
    if (!isLocalStorageNameSupported()) {
      return;
    }
    // 大版本发布后全局弹窗提示
    //   1. 点击『知道了』之后不再提示
    //   2. 超过截止日期后不再提示
    if (localStorage.getItem('Rubixd@2.0.0-notification-sent') !== 'true' &&
        Date.now() < new Date('2016/12/01').getTime()) {
      this.infoNewVersion();
    }
  }

  infoNewVersion() {
    const messages = this.props.intl.messages;
    Modal.info({
      title: messages['app.publish.title'],
      content: (
        <div>
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNTAwcHgiIHZpZXdCb3g9IjAgMCA1MDAgNTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MDAgNTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGRpc3BsYXk9Im5vbmUiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjM3OC40LDMyNC42NTkgMjQ4LjQsMzk5LjcxNSANCgkxMTguNCwzMjQuNjU5IDExOC40LDE3NC41NDggMjQ4LjQsOTkuNDkyIDM3OC40LDE3NC41NDggIi8+DQo8cG9seWdvbiBmaWxsPSJub25lIiBwb2ludHM9IjMzNS40MDEsMjk5LjYwNCAyNDguNDAxLDM0OS42MDQgMTYxLjQwMSwyOTkuNjA0IDE2MS40MDEsMTk5LjYwNCAyNDguNDAxLDE0OS42MDQgMzM1LjQwMSwxOTkuNjA0ICIvPg0KPHBvbHlnb24gZmlsbD0iIzU3MkM4OSIgcG9pbnRzPSIxNjIsMjQ5LjY2MyAxMTguNSwyMjQuODM3IDExOC41LDE3NC44MzcgMTYyLDE5OS42NjMgIi8+DQo8cG9seWdvbiBmaWxsPSIjMUMzRDhGIiBwb2ludHM9IjE2MiwyOTkuNjYzIDExOC41LDI3NC44MzcgMTE4LjUsMjI0LjgzNyAxNjIsMjQ5LjY2MyAiLz4NCjxwb2x5Z29uIGZpbGw9IiNFQjdGMjYiIHBvaW50cz0iMzc4LjI1LDIyNC44MzcgMzM1LDI0OS42NjMgMzM1LDE5OS42NjMgMzc4LjI1LDE3NC44MzcgIi8+DQo8cG9seWdvbiBmaWxsPSIjRjBBMjI0IiBwb2ludHM9IjM3OC4yNSwyNzQuMzM3IDMzNSwyOTkuMTYzIDMzNSwyNDkuMTYzIDM3OC4yNSwyMjQuMzM3ICIvPg0KPHBvbHlnb24gZmlsbD0iI0U1NUI1NSIgcG9pbnRzPSIzNzguMjA3LDE3NC45NjIgMzM1LjEzNSwxOTkuODI3IDI5Mi41MDgsMTc0LjU4NiAzMzUuNTgyLDE0OS43MjEgIi8+DQo8cG9seWdvbiBmaWxsPSIjRTE0MDNFIiBwb2ludHM9IjMzNS41NjcsMTQ5LjkzNyAyOTIuMzE4LDE3NC42MTkgMjQ4LjUxNiwxNDkuMzMgMjkxLjc2NiwxMjQuNjQ3ICIvPg0KPHBvbHlnb24gZmlsbD0iIzA2NjFBNyIgcG9pbnRzPSIxNjIsMzQ5LjE2MyAxMTguNSwzMjQuMzM3IDExOC41LDI3NC4zMzcgMTYyLDI5OS4xNjMgIi8+DQo8cG9seWdvbiBmaWxsPSIjMTRBMkE1IiBwb2ludHM9IjIwNS41LDM3NC4xNjMgMTYyLDM0OS4zMzcgMTYyLDI5OS4zMzcgMjA1LjUsMzI0LjE2MyAiLz4NCjxwb2x5Z29uIGZpbGw9IiMxNUExQzAiIHBvaW50cz0iMjQ4LjUsMzk4LjkxMyAyMDUuNSwzNzQuMDg3IDIwNS41LDMyNC4wODcgMjQ4LjUsMzQ4LjkxMyAiLz4NCjxwb2x5Z29uIGZpbGw9IiMxNTlFNUIiIHBvaW50cz0iMjQ4Ljc1LDM5OC45MTMgMjkyLjc1LDM3NC4wODcgMjkyLjc1LDMyNC4wODcgMjQ4Ljc1LDM0OC45MTMgIi8+DQo8cG9seWdvbiBmaWxsPSIjNkVCNjQ3IiBwb2ludHM9IjI5Mi4yNSwzNzQuMTYzIDMzNS42NjcsMzQ5LjMzNyAzMzUuNjY3LDI5OS4zMzcgMjkyLjI1LDMyNC4xNjMgIi8+DQo8cG9seWdvbiBmaWxsPSIjRjVFQTJCIiBwb2ludHM9IjMzNS4wODQsMzQ5Ljc4OCAzNzguMTY3LDMyNC43OTYgMzc4LjE2NywyNzQuNDYyIDMzNS4wODQsMjk5LjQ1NCAiLz4NCjxwb2x5Z29uIGZpbGw9IiNFMTI0MjYiIHBvaW50cz0iMjkxLjgxNywxMjQuNTA0IDI0OC44MTcsMTQ5LjMzIDIwNS41MTYsMTI0LjMzIDI0OC41MTcsOTkuNTAzICIvPg0KPHBvbHlnb24gZmlsbD0iI0JBMUQ3MSIgcG9pbnRzPSIyNDguOTU0LDE0OS41MDQgMjA1LjU2OCwxNzQuNzYzIDE2Mi4xMjksMTQ5Ljc2MyAyMDUuNTE2LDEyNC41MDQgIi8+DQo8cG9seWdvbiBmaWxsPSIjOTkyMzg0IiBwb2ludHM9IjIwNS44ODMsMTc0LjYyOSAxNjIuMjY3LDE5OS43OTggMTE4LjUwOCwxNzQuNzM5IDE2Mi4xMjYsMTQ5LjU2OSAiLz4NCjwvc3ZnPg0K" alt="Rubix Design" />
          <p>
            {messages['app.publish.greeting']}
            <a target="_blank" rel="noopener noreferrer" href="#">Rubixd@2.0.0</a>
            {messages['app.publish.intro']}
          </p>
        </div>
      ),
      okText: 'OK',
      onOk: () => localStorage.setItem('Rubixd@2.0.0-notification-sent', 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  }

  handleVersionChange = (url) => {
    window.location.href = url;
  }

  render() {
    const options = Object.keys(docVersions).map(version => (
      <Option value={docVersions[version]} key={version}>{version}</Option>
    ));
    return (
      <footer id="footer">
        <ul>
          {/*


          <li>
            <h2>GitHub</h2>
            <div>
              <a target="_blank " href="https://github.com/rubix-design/rubix-design">
                <FormattedMessage id="app.footer.repo" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">dva</a> - <FormattedMessage id="app.footer.dva" />
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva-cli">dva-cli</a> -
              <FormattedMessage id="app.footer.scaffold" />
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://rubix-tool.github.io">rubix-tool</a> - <FormattedMessage id="app.footer.dev-tools" />
            </div>
          </li>
          <li>
            <h2><FormattedMessage id="app.footer.links" /></h2>
            <div><a href="http://mobile.ant.design">Ant Design Mobile</a> -
              <FormattedMessage id="app.footer.mobile" />
            </div>
            <div><a href="https://g2.alipay.com/">G2</a> -
              <FormattedMessage id="app.footer.data-vis" />
            </div>
            <div><a href="https://antv.alipay.com/">AntV</a> -
              <FormattedMessage id="app.footer.data-vis-spec" />
            </div>
            <div><a href="http://motion.ant.design">Ant Motion</a> -
              <FormattedMessage id="app.footer.motion" />
            </div>
            <div><a href="http://library.ant.design/">AntD Library</a> -
              <FormattedMessage id="app.footer.antd-library" />
            </div>
            <div><a href="http://ux.ant.design">Ant UX</a> -
              <FormattedMessage id="app.footer.material" />
            </div>
          </li>
          <li>
            <h2><FormattedMessage id="app.footer.community" /></h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="/changelog">
                <FormattedMessage id="app.footer.change-log" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/rubix-design/rubix-design/issues">
                <FormattedMessage id="app.footer.feedback" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/rubix-design/rubix-design">
                <FormattedMessage id="app.footer.discuss" />
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/rubix-design/rubix-design/issues/new">
                <FormattedMessage id="app.footer.bug-report" />
              </a>
            </div>
          </li>
          */}
          <li>
            <div>©2016 <FormattedMessage id="app.footer.author" /></div>
            
              <div style={{ marginTop: 10 }}>
              <FormattedMessage id="app.footer.version" />
              <Select
                size="small"
                dropdownMatchSelectWidth={false}
                defaultValue={antdVersion}
                onChange={this.handleVersionChange}
              >
                {options}
              </Select>
            </div>
            
            
          </li>
        </ul>
      </footer>
    );
  }
}

export default injectIntl(Footer);
