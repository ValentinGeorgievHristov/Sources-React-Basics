import './Header.css'

function Header (){

    return(
       <header className="headerBackground">
           <img className="imgStyle " 
              src ="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
              alt="Problem?"
           />
           <p className="paragraphStyle">Meme Generator</p>
       </header> 
    )
}

export default Header;
