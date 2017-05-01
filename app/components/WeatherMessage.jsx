var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>Сейчас: {temp} в городе: {location}.</h3>
    )
};

module.exports = WeatherMessage;
