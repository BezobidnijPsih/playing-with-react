import React from 'react';
import PropTypes from 'prop-types';

class Detail extends React.Component {
    buttonClicked() {
        // console.log('Button was clicked!');
    }

    render() {
        return (
            <div>
                <p>Hello, {this.props.message}!</p>
                <button onClick={this.buttonClicked}>Click me</button>
            </div>);
    }
}

Detail.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Detail;
