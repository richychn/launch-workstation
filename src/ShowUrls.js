import React from 'react';

class ShowUrls extends React.Component {
    render() {
        return (
            <div className="show-url">
                <span>{this.props.url}</span>
                <div className="buttons">
                    <p onClick={() => {this.props.remove(this.props.ws.id, this.props.url)}}>
                        <i className="trash icon" />
                    </p>
                </div>
            </div>
        )
    }
}

export default ShowUrls;