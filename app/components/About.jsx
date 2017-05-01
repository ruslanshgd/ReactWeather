var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1>О проекте</h1>
      <p>Это погодное веб-приложение, которое сделано на React'е. Данное приложение является частью курса по React, который я прохожу</p>
      <p>Вот что я использовал для создания приложения:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> – это JS фреймворк, который был использован</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a> – Я использовал данные с Open Weather Map для поиска погоды по названию города</li>
      </ul>
    </div>
  )
};

module.exports = About;
