import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>О нас</h1>
      <nav>
        <Link to="/">Вернуться на главную страницу</Link>
      </nav>
    </div>
  );
};

export default AboutPage;