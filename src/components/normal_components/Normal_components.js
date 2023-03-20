import React from 'react'
import styles from "./Normal_components.module.scss"
const Normal_components = () => {
  return (
    <div>Normal_components</div>
  )
}
export const Title =({english,chinese})=>{
    return(
        <div className={styles.title}>
            <span className={styles.en}>{english}</span>
            <span className={styles.ch}>{chinese}</span>
            
        </div>
    )
}

export const MyButton =({text})=>{
  const ok=()=>{
  }
  return (
    <div className={styles.Button}>
      <button onClick={()=>{ok()}}>
        {text}
      </button>
    </div>
  )
}

export default Normal_components
