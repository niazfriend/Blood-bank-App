import React from "react";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            tel: "",
            address: ""
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return(
           <div className="panel panel-default">
            <h1 className="panel-heading">Sign Up</h1>
                <div className="panel-body">
                <form>
                    <label className="control-label">
                    Name :
                    </label>
                    <div className="row">
                        <div className="col-md-6">
                    <input type="text"
                           value={this.state.first_name}
                           onChange={this.onChange}
                           className="form-control"
                           name="first_name"
                           placeholder="First"/>
                            </div>
                        <div className="col-md-6">
                        <input type="text"
                               value={this.state.last_name}
                               onChange={this.onChange}
                               className="form-control"
                               name="last_name"
                               placeholder="last"/>
                        </div>
                    </div>
                    
                    <label className="control-label">Contact info :</label>
                    <div className="row">
                    <div className="col-md-12">
                        <input type="email"
                               value={this.state.email}
                               onChange={this.onChange}
                               className="form-control"
                               name="email"
                               placeholder="Email Address"/>  
                        </div>
                        <div className="col-md-12">
                        <input type ="tel"
                               value={this.state.tel} 
                               onChange={this.onChange}
                               className="form-control"
                               name="tel"
                               placeholder="Mobile Number"/>
                        </div>
                    </div>    
                        <label className="control-label">Address :</label>
                    <div className="row">
                    <div className="col-md-12">
                        <input type="text"
                               value={this.state.address}
                               onChange={this.onChange}
                               className="form-control"
                               name="address"
                               placeholder="Your Address"/>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <button type="submit"
                                className="btn btn-primary">
                            Submit</button>
                        </div>
                    </div>
                    </form>
                </div>
                
            </div>
            
        );
    }
}
export default SignUp;