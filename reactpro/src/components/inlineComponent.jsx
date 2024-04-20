import styles from './inlineComponent.module.css'
export default function Inline()
{
    const header= {color: 'blue', fontSize: '170px'}
    return <div>
        <h1 className={styles.header}>Inline Styling</h1>
    </div>
}