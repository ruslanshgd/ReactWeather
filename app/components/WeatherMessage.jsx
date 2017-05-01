var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h4 className="text-center">Сейчас: {temp} в городе: {location}.</h4>
    )
};

module.exports = WeatherMessage;
