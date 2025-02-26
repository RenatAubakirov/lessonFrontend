// src/components/ThemeSwitcher.js
import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from '../actions/themeActions';

const ThemeSwitcher = ({ isDarkMode, toggleTheme }) => {
  const themeStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={themeStyle}>
      <h1>Тема сайта</h1>
      <button onClick={toggleTheme}>
        Переключить на {isDarkMode ? 'светлую' : 'темную'} тему
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: state.isDarkMode,
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);