import React from 'react'
import styles from './styles.module.css'


export const Button = ({type,...props}) => {
  return (<button className={styles[type]} {...props}>{props.text}</button>)
}