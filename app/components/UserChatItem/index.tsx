import { Badge } from 'antd';
import Image from 'next/image';
import React from 'react';
import styles from './user-item.module.scss';
import avatar from '../../../public/avatar.png';

function UserChatItem() {
  return (
    <div className={styles.userItem}>
      <div className={styles.item}>
        <Image src={avatar} alt="avatar" />
        <div className={styles.userText}>
          <span>Root</span>
          <p>
            Привет, друг! Мне бы хотелось познакомиться с твоими знакомыми, которые занимаются....
          </p>
        </div>
      </div>
      <span className={styles.sendedAt}>16:50</span>
      <div style={{ position: 'absolute', right: '14px', top: '35px' }}>
        <Badge style={{ border: 'none' }} color="#00B2FF" count={5} />
      </div>
      <div className={styles.downLine}></div>
    </div>
  );
}

export default UserChatItem;
