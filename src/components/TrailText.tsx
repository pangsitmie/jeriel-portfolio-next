import React, { ReactNode, useState } from 'react'
import { useTrail, a } from '@react-spring/web';
import styles from './styles.module.css';

type Props = {
    open: boolean;
    children: ReactNode;
    className?: string;
}

const TrailText = ({ open, children, className }: Props) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 3000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className={styles.trailsText} style={style}>
                    <a.div style={{ height }} className={className}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

export default TrailText