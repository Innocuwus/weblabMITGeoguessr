const React = require('react');
const ReactDOMServer = require('react-dom/server');

const renderComponent = (Component) => {
  return ReactDOMServer.renderToString(React.createElement(Component));
};

module.exports = renderComponent;