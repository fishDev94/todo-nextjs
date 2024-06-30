import styles from './task.module.scss'

export default function Task({task}) {
    const { id, text } = task;

    return (
        <div id={id} className={styles.task}>
            <p>{text}</p>
            <div>x</div>
        </div>
    )
}