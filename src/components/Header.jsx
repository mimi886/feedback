import PropTypes from 'prop-types';

function Header({text}) {
  return (
    <header>
        <div className='container'>
       <h2>{text}</h2>
        </div>
    </header>
  );
}


 /*  I will make changes here   */
    Header.defaultProps = {
        text: 'Feedback UI'
    }

    Header.propTypes = {
        text: PropTypes.string,
    }
export default Header;
