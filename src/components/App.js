import React from "react";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          select a language:
          <i className='flag us' onClick={ () => this.onLanguageChange('english')}/>
          <i className='flag mx' onClick={ () => this.onLanguageChange('spanish')}/>
        </div>
        {this.state.language}
      </div>
    )
  }
}

export default App;
