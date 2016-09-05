import assign from 'object-assign';
if (typeof window !== 'undefined') {
    const matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener() {
            },
            removeListener() {
            },
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}
import SlickCarousel from 'react-slick';
import * as React from 'react';
export default class Carousel extends React.Component {
    render() {
        let props = assign({}, this.props);
        if (props.effect === 'fade') {
            props.fade = true;
            props.draggable = false;
        }
        let className = 'rubix-carousel';
        if (props.vertical) {
            className = `${className} rubix-carousel-vertical`;
        }
        return (<div className={className}>
        <SlickCarousel {...props}/>
      </div>);
    }
}
Carousel.defaultProps = {
    dots: true,
    arrows: false,
};
