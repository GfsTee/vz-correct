import React, { Component } from 'react';
import './faqitem.css'

class FAQItem extends Component {
    state = {
        isExpanded: false,
        isSecondExpanded: false
    }
    handleExpand = () => {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
    handleSecondExpand = () => {
        this.setState({ isSecondExpanded: !this.state.isSecondExpanded });
        // this.setState({ isExpanded: !this.state.isExpanded }); für Elaine ;-)
    }
    render() {
        return (
            <div className="faq-item">
                <div className="faq-item-question">
                    <h4>{this.props.data.question}</h4>
                    <button onClick={this.handleExpand}> {this.state.isExpanded ? "-" : "+"}</button>
                </div>
                <div style={this.state.isExpanded ? { display: "block" } : { display: "none" }}>
                    <div className="faq-item-question">
                        <p>{this.props.data.answer}</p>
                        <button onClick={this.handleSecondExpand}>{this.state.isSecondExpanded ? "-" : "+"}</button>
                    </div>
                    <div style={this.state.isSecondExpanded ? { display: "block" } : { display: "none" }}>
                        {this.props.data.answerLong}
                    </div>


                </div>
            </div>
        );
    }
}

export default FAQItem;