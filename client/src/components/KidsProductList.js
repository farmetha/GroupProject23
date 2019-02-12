import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

class KidsProductList extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        axios.get('/api/products/' + this.props.category).then(res => {
            this.setState({products: res.data});
        })
    }

    render() {
        return (
            
            <div>
                {this.state.products.slice(0, 6).map((item, key) => (
                    <a target="_blank" key={key} href={item.url}>
                        <img src={item.image} key={key} />
                        <div>{item.item}</div>
                        <div>{item.category}</div>
                        <div>{item.price}</div>
                    </a>              
                ))}
            </div>
            
        );
    }
}


export default KidsProductList;