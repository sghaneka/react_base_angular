var Forum = React.createClass({
    displayName: "Forum",


    getInitialState: function () {

        return {
            allAnswers: {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and Flux are a tool and methodologies for building the front end of web applications.",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for 'respond'",
                    correct: false
                }
            }
        };
    },

    componentDidMount: function () {
        ForumStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ForumStore.removeListener(this._onChange);
    },

    render: function () {

        return React.createElement(
            "div",
            null,
            React.createElement(ForumHeader, null),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(ForumQuestion, null),
                React.createElement("hr", null),
                React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
                React.createElement("hr", null),
                React.createElement(
                    "h4",
                    null,
                    "Add an answer"
                ),
                React.createElement(ForumAddAnswerBox, { onAddAnswer: this._onAddAnswer })
            )
        );

        /*return React.createElement('div', 
                                   null,
                                  React.createElement(ForumHeader, 
                                                      { allAnswers: this.state.allAnswers}
                                                     )
                                  );*/
    },

    _onAddAnswer: function (answerText) {
        ForumActions.addNewAnswer(answerText);
    },

    /* Update it all! */
    _onChange: function () {
        this.setState({ allAnswers: ForumStore.getAnswers() });
    }
});