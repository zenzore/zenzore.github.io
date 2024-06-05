import { IconType } from 'react-icons';
import React from 'react';
import style from './tool.module.css';

interface props {
    icon: any,
    title: String,
    value: String
}

export default function Tool({icon, title, value}: props) {
    return (
        <div className={style.tool}>
            <div className={style.icon}>{icon}</div>
            <p className={style.title}>{title}</p>
            <p className={style.value}>{value}</p>
        </div>
    )
}