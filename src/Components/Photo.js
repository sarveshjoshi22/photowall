import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Photo(props){
    const post = props.post;
    return <figure className="figure">
        <img src={post.link} alt={post.desc}/>
<figcaption><p>{post.desc}</p></figcaption>
<button onClick = { () => {
    props.removePost(props.index)
} }>Remove</button>
    </figure>
    
}
Photo.propTypes = {
    post: PropTypes.object.isRequired
}
/*
class Photo extends Component {

    render(){
        const post = this.props.post;
        return <figure className="figure">
            <img src={post.link} alt={post.desc}/>
    <figcaption><p>{post.desc}</p></figcaption>
    <button>Remove</button>
        </figure>
        

    }

} */

export default Photo