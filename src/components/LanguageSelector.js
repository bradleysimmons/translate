import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {

  static contextType = LanguageContext;

  render() {
    console.log(this.context)
    return(
      <div>
        select a language:
        <i className='flag us' onClick={ () => this.context.onLanguageChange('english')}/>
        <i className='flag mx' onClick={ () => this.context.onLanguageChange('spanish')}/>
      </div>
    )
  }
}

export default LanguageSelector;