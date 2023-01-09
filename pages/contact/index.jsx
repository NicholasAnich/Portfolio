import { useState, useRef } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import Popup from '../../components/popup/Popup.component';
import styles from '../../styles/contact.module.scss';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { theme } = useTheme();
  const contact = clsx(styles.container, styles[theme]);

  const form = useRef();
  const [EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID] = [
    'service_n9dms63',
    'template_hnfdlno',
    'FkedGJVRctISDpeR9',
  ];

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current,
        EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          togglePopup();
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={contact}>
      <Head>
        <title>Contact</title>
      </Head>
      <p className={styles.contactMe}>
        Let me know how I can help or just say Hi!
      </p>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <label className={styles.label} htmlFor='name'>
          Name:
        </label>
        <input
          className={styles.input}
          type='text'
          id='name'
          name='from_name'
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label className={styles.label} htmlFor='email'>
          Email:
        </label>
        <input
          className={styles.input}
          type='email'
          id='email'
          name='from_email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label className={styles.label} htmlFor='message'>
          Message:
        </label>
        <textarea
          className={styles.textarea}
          id='message'
          name='message'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <input className={styles.submit} type='submit' value='Send' />
      </form>
      {showPopup && <Popup handleClose={togglePopup} />}
    </div>
  );
}
