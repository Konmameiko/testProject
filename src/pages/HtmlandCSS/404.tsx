import React, {FC} from 'react';
import styles from './index.less'

// export interface  {
    
// }

interface IProps{
    onSomething?: ()=>void;
}

const NotFound:FC<IProps> = ({onSomething})=>{

    return (
        <>
            <div className={styles.error}>
                <h1 className={styles.title}>404</h1>
                <div className={styles.msg}>OH!<span className={styles.triangle}></span></div>
                <h2 className={styles.text}>Sorry! Page not found</h2>
            </div>
        </>
    )
}
//memo的使用在不希望一直跟随父组件更新的子组件上
export default React.memo(NotFound);