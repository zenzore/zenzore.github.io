import { IconType } from 'react-icons';
import React from 'react';
import style from './socials.module.css';



export default function Icon(icon: any) {
    return (
        <div className={style.icon}>
            <div className={style.icon}>{icon}</div>
        </div>
    )
}