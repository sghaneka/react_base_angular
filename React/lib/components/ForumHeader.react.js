var ForumHeader = React.createClass({
  displayName: "ForumHeader",


  render: function () {

    /* Automatic semi colon insertion avoidance */
    return React.createElement(
      "nav",
      { className: "navbar navbar-default" },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "a",
            { className: "navbar-brand", href: "#" },
            "React Forum"
          )
        )
      )
    );
  }
});