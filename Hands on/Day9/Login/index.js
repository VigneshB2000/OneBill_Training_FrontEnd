class Welcome extends React.Component{

    state = {
        type : false
    }
    render(){

        if(this.state.type){
        return(
        <div>
        <h1>Admin Page</h1>
        <h2>Login</h2>
        <h2>Home</h2>
        < Admin 
        action={this.getChildData.bind(this)} />
        </div>
        );
        }
        
        
        else{
        return(
        <div>
        <h1>User Page</h1>
        <h2>Login</h2>
        < User 
        userName = "Vicky000"
        action={this.getChildData.bind(this)} />
        </div>
        );
        }
    }

    getChildData(data){
        this.setState({type:data});
    }
}

class Admin extends React.Component{
    state = {
        adminName:"Vignesh"
    }
    render(){
        let bool  =false;
        return(
            <div>
                <h3>Hello Admin, {this.state.adminName}</h3>
                <button onClick = {()=>this.props.action(bool)}>User</button>
            </div>
        );
    }
}

class User extends React.Component{
    state = {
        userName:"Vicky"
    }
    render(){
        let bool  =true;
        return(
            <div>
                <h3>Hello User , {this.state.userName}</h3>
                <button onClick = {()=>this.props.action(bool)}>Admin</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Welcome />, document.getElementById("root"));