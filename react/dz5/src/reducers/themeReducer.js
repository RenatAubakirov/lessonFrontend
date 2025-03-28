// src/reducers/themeReducer.js
import { TOGGLE_THEME } from '../actions/themeActions';

const initialState = {
  isDarkMode: false, // Начальная тема: светлая
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;