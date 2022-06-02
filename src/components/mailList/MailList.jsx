import React from 'react';
import styles from './MailList.module.scss';

const MailList = () => {
    return (
        <div className={styles.mail}>
            <h1 className={styles.mailTitle}>Save time, save money!</h1>
            <span className={styles.mailDesc}>Sign up and we'll send the best deals to you</span>
            <div className={styles.mailInputContainer}>
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>

            </div>
            <div>
                <input type="checkbox" />
                Send me a link to get the FREE BookTM.com app!

            </div>
        </div>
    )
}

export default MailList;