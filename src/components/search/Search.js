import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.handler(event.target.value);
    }

    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        );
    }
}

Search.propTypes = {
    handler: PropTypes.func
};

export default Search;