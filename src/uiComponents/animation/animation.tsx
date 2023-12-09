import * as React from 'react';
import classes from './animation.module.scss';

export type AnimationProps = {
    text: string;
    type?: string;
    className?: string;
    split?: string;
    tag?: string;
}

export const animate = (x: any) => {
    if (x.className.indexOf('animate__animated') !== -1) {
        return;
    }
    x.classList.add("animate__animated");
    x.classList.add(`animate__rubberBand`);
    setTimeout(() => {
        x.classList.remove("animate__animated");
        x.classList.remove(`animate__rubberBand`);
    }, 800);
}

const AnimationText = (props: AnimationProps) => {

    const onMouseEnter = (event: any) => {
        animate(event.target);
    }


    return <>
        {props.text.split(props.split || "").map((x, i) => {
            const renderProps = { key: i, onMouseEnter, className: `${classes.animateText} ${props.className}` };
            if (props.tag) {
                return React.createElement(props.tag, renderProps, x);
            }
            return <div {...renderProps}>{x}</div>
        })
        }
    </>
}

export default AnimationText;