import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route  } from "react-router-dom";
import { hashHistory } from 'react-router';
import { withRouter } from 'react-router';
import { removePost } from '../redux/actions';

class Main extends Component {
  constructor() {
    super();
    
  }

 
 
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"Photowall"} />
             <Photowall
               { ...this.props }
             //   onRemovePhoto={this.removePhoto}
                //   onNavigate={this.navigate}
              /> 
            </div>
          )}
        />
        {  <Route
          path="/AddPhoto"
          render={(history) => (
            <AddPhoto
              onAddPhoto={(addedPhoto) => {
                this.addPhoto(addedPhoto);
                // eslint-disable-next-line no-restricted-globals
               this.props.history.push('/')

               
              }}
            /> 
          )}
        /> }
      </div>
    );
  }
}

export default withRouter(Main);
