// this file is not used if use https://github.com/ant-design/babel-plugin-antd

import warn from 'rc-util/lib/warn';
import * as rubix from './components';

warn('You are using prebuilt rubix, ' +
     'please use https://github.com/ant-design/babel-plugin-antd to reduce app bundle size.');

export default rubix;
