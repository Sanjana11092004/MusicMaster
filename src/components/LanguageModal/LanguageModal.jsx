// src/components/LanguageModal/LanguageModal.jsx
import React from 'react';
import styles from './LanguageModal.module.css';

const LanguageModal = ({ isOpen, selectedLanguage, onSelectLanguage, onClose }) => {
  if (!isOpen) return null;

  const languages = [
    "English", "Tamil", "Telugu", "Deutsch", "Français", "Español", 
    "Português", "Italiano", "Nederlands", "Polski", 
    "Bahasa Indonesia", "हिन्दी", "中文", "日本語"
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.header}>Choose a language</h3>
        <div className={styles.langList}>
          {languages.map((lang) => (
            <button
              key={lang}
              className={`${styles.langBtn} ${lang === selectedLanguage ? styles.active : ''}`}
              onClick={() => onSelectLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default LanguageModal;
