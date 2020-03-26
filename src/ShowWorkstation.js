import React from 'react';
import ShowUrls from './ShowUrls';

class ShowWorkstation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }
    }

    handleClick = () => {
        this.setState({show: !this.state.show})
    }

    renderUrls(removeUrl) {
        if (this.state.show) {
            return (
                <div className="urls">
                    {this.props.ws.urls.map((url, index) => (
                        <ShowUrls key={index} ws={this.props.ws} url={url} remove={removeUrl} />
                    ))}
                </div>
            )
        }
    }

    render() {
        const [addUrl, openWorkstation, deleteWorkstation, removeUrl] = this.props.use;
        return (
            <div className="box">
                <div className="workstation">
                    <div className="workstation-name" onClick={this.handleClick}>
                        <p>{this.props.ws.label}</p>
                    </div>
                    <div className="buttons">
                        <p onClick={() => openWorkstation(this.props.ws.id)}><i className="rocket icon" /></p>
                        <p onClick={() => {this.setState({show: true}); addUrl(this.props.ws.id)}}><i className="plus icon" /></p>
                        <p onClick={() => {deleteWorkstation(this.props.ws.id)}}><i className="trash icon" /></p>
                    </div>
                </div>
                {this.renderUrls(removeUrl)}
            </div>
        )
    }
}

export default ShowWorkstation;