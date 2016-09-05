import * as React from 'react';
import Notification from 'rc-notification';
import Icon from '../icon';
import assign from 'object-assign';
let defaultTop = 24;
let notificationInstance;
let defaultDuration = 45;
function getNotificationInstance() {
    if (notificationInstance) {
        return notificationInstance;
    }
    notificationInstance = Notification.newInstance({
        prefixCls: 'rubix-notification',
        style: {
            top: defaultTop,
            right: 0,
        },
    });
    return notificationInstance;
}
function notice(args) {
    const prefixCls = args.prefixCls || 'rubix-notification-notice';
    let duration;
    if (args.duration === undefined) {
        duration = defaultDuration;
    }
    else {
        duration = args.duration;
    }
    let iconType = '';
    switch (args.type) {
        case 'success':
            iconType = 'check-circle-o';
            break;
        case 'info':
            iconType = 'info-circle-o';
            break;
        case 'error':
            iconType = 'cross-circle-o';
            break;
        case 'warning':
            iconType = 'exclamation-circle-o';
            break;
        default:
            iconType = 'info-circle';
    }
    let iconNode;
    if (args.icon) {
        iconNode = (<span className={`${prefixCls}-icon`}>
        {args.icon}
      </span>);
    }
    else if (args.type) {
        iconNode = <Icon className={`${prefixCls}-icon ${prefixCls}-icon-${args.type}`} type={iconType}/>;
    }
    getNotificationInstance().notice({
        content: (<div className={`${prefixCls}-content ${iconNode ? `${prefixCls}-with-icon` : ''}`}>
        {iconNode}
        <div className={`${prefixCls}-message`}>{args.message}</div>
        <div className={`${prefixCls}-description`}>{args.description}</div>
        {args.btn ? <span className={`${prefixCls}-btn`}>{args.btn}</span> : null}
      </div>),
        duration,
        closable: true,
        onClose: args.onClose,
        key: args.key,
        style: {},
    });
}
const api = {
    open(args) {
        notice(args);
    },
    close(key) {
        if (notificationInstance) {
            notificationInstance.removeNotice(key);
        }
    },
    config(options) {
        if ('top' in options) {
            defaultTop = options.top;
        }
        if ('duration' in options) {
            defaultDuration = options.duration;
        }
    },
    destroy() {
        if (notificationInstance) {
            notificationInstance.destroy();
            notificationInstance = null;
        }
    },
};
['success', 'info', 'warning', 'error'].forEach((type) => {
    api[type] = (args) => api.open(assign({}, args, { type }));
});
api.warn = api.warning;
export default api;
