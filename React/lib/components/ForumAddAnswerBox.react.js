var ENTER_KEY_CODE = 13;

var ForumAddAnswerBox = React.createClass({
    displayName: "ForumAddAnswerBox",


    getInitialState: function () {
        return {
            value: ''
        };
    },

    _addAnswer: function () {
        this.props.onAddAnswer(this.state.value);
    },

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement("textarea", { id: "addAnswer", onChange: this._onChange, className: "col-md-6 col-xs-8" }),
            "\xA0",
            React.createElement("input", { type: "button", className: "btn btn-primary",
                onClick: this._addAnswer, value: "Add" })
        );
    },

    _onChange: function (event) {
        this.setState({
            value: event.target.value
        });
    }

});