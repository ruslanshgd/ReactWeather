var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Примеры</h1>
      <p>Вот пару примеров городов, погоду которых можно узнать:</p>
      <ol>
        <li>
          <Link to='/?location=Санкт-Петербург'>Санкт-Петербург, Россия</Link>
        </li>
        <li>
          <Link to='/?location=Москва'>Москва, Россия</Link>
        </li>
        <li>
          <Link to='/?location=Лондон'>Лондон, Великобритания</Link>
        </li>
        <li>
          <Link to='/?location=Нью-Йорк'>Нью-Йорк, США</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
