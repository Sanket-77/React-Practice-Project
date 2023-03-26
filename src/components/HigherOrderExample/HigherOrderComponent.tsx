//  Higher order component => This is component which use to Share common ligic through out the application
import React, { Component } from 'react'
import { getRequest } from '../../api/apiCallCommon';

const HigherOrderWrapper = (WrappedComponent: any)=> {
  return class HigherOrderComponent extends Component <{},any> {
    constructor(props: any) {
      super(props)

      this.state = {
        userData: []
      }
    }

    componentWillMount(): void {
      
    }
  
    componentDidMount(): void {
      const axiospromise = getRequest('https://reqres.in/api/users', '');
          console.log('axiospromise', axiospromise);
          axiospromise.then((data: any) => this.setState({userData:data['data'].data}))
    }
  
    render() {
      return (
        <>
        {console.log(this.state)}
        <div>
          <h1>Data fetching common logic </h1>
          {/* {this.state.userData && this.state.userData.map((item:any) => {
            return<>
            <div>{item.email}</div>
            <div>{item.avatar}</div></>
          })} */}
          <WrappedComponent data = {this.state.userData} />
        </div>
        </>
      )
    }
  }
}

export default HigherOrderWrapper
