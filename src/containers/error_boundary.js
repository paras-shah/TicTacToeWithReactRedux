import React,{Component} from 'react';

export default class ErrorBoundary extends React.Component{
  constructor(props){
      super(props);
      this.state = { error: null, errorInfo: null };
  } 

  componentDidCatch(error, errorInfo){
      this.setState({error,errorInfo});
  }

  render(){
      if (this.state.error !== null) {
          return (
              <div>
                  <h3>Something went wrong.</h3>
                  <details style={{ whiteSpace: 'pre-wrap' }}>
                      <p>
                          {this.state.error && this.state.error.toString()}
                      </p>
                      <p>
                          {this.state.errorInfo.componentStack}
                      </p> 
                  </details> 
               </div>   
          );
      }
      else{
          return this.props.children;
      }   
  }
}