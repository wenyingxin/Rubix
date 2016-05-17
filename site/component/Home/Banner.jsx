import React from 'react';
import { Link } from 'react-router';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import TweenOne from 'rc-tween-one';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default class Banner extends React.Component {
  typeFunc(a) {
    if (a.key === 'line') {
      return 'right';
    } else if (a.key === 'button') {
      return 'bottom';
    }
    return 'left';
  }

  render() {
    return (
      <section id="banner">
        <ScrollElement scrollName="banner" className="page">
          <QueueAnim className="banner-text-wrapper" type={this.typeFunc} delay={300}>
            <h2 key="h2">Ruby <p>X</p></h2>
            <p key="content">互联网金融前端开发框架语言</p>
            <span className="line" key="line" />
            <div key="button" className="start-button clearfix">
              <Link to="/docs/spec/introduce">
                <Icon type="smile-circle" /> 开始探索
              </Link>
            </div>
            
          </QueueAnim>
          <TweenOne className="down" animation={{ y: 10, duration: 800, yoyo: true, repeat: -1 }}>
            <Icon type="down" />
          </TweenOne>
        </ScrollElement>
      </section>
    );
  }
}
