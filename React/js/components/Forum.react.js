var Forum = React.createClass({
    
    
    getInitialState: function() {
      
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
        }        
    },
    
    componentDidMount: function(){
      ForumStore.addChangeListener(this._onChange);  
    },
    
    componentWillUnmount: function() {
        ForumStore.removeListener(this._onChange);
    },
    
    render: function() {
        
        return (
            <div>
                <ForumHeader />
            
                <div className="container">
                    <ForumQuestion />
                    <hr/>
                    <ForumAnswers allAnswers={ this.state.allAnswers } />
                    <hr/>
                    <h4>Add an answer</h4>
                    <ForumAddAnswerBox onAddAnswer = { this._onAddAnswer } />
                </div>
            
            </div>
        );
        
        /*return React.createElement('div', 
                                   null,
                                  React.createElement(ForumHeader, 
                                                      { allAnswers: this.state.allAnswers}
                                                     )
                                  );*/
    },
    
    _onAddAnswer: function(answerText) {
        ForumActions.addNewAnswer(answerText);
    },
    
    /* Update it all! */
    _onChange: function() {
        this.setState({ allAnswers: ForumStore.getAnswers() });
    }
});