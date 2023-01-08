import React from 'react';
import styles from './popup.module.scss';

export default function Popup({ handleClose }) {
  return (
    <div className={styles.popupBox}>
      <div className={styles.box}>
        <div className={styles.content}>
          <b className={styles.thanks}>Thank You!</b>
          <p>
            Message has been sent{' '}
            <span className={styles.success}>Successfully</span>!
          </p>
          <p>I will get back to you as soon. 🤗</p>
          <button className={styles.btn} onClick={handleClose}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
