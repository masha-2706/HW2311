import React from 'react'
import styles from './FlexContainer.module.css'

function FlexContainer(props) {
  return (
    <div className={styles.flexContainer}>
      {props.children}
    </div>
  )
}

export default FlexContainer







