import React from "react";

class UserData extends React.Component{
    constructor() {
        super();
    
        this.state = {
          currentUser: null
        };
      }
    render(){
        return(
            <div>
                <p>User profile</p>
            </div>
        );
    }
}

export default UserData;