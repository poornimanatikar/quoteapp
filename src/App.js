import styles from './App.module.scss';
import RandomQuote from './RandomQuote/RandomQuote';
import AllQuotes from './AllQuotes/AllQuotes';
import { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { withStyles } from "@material-ui/core/styles";
const CssIconButton = withStyles({
  root: {
      borderRadius:'0'
  }
})(IconButton)
function App() {
  const [showSingle,setShowSingle] = useState(true);
  const [quote,setQuote] = useState({});
  const [quotes,setQuotes] = useState([]);
  
  useEffect(() => {
   loadQuote();
  },[]);

  const loadQuote =() => {
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`, {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => {
        setQuote(response.data[0]);
        
        setShowSingle(true);
        
      })
      .catch(err => {
        console.log(err);
      });

  }
  const handleRefresh =() =>{
    loadQuote();
  }

  const loadAllQuotes = (quoteAuthor) =>{
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${quoteAuthor}`, {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => {
        setQuotes(response.data);
        setShowSingle(false);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div>
      <div className={styles.header}>
         <CssIconButton onClick={() => handleRefresh()}>
            random<AutorenewIcon />
         </CssIconButton>
      </div>
     {showSingle ? <RandomQuote quote={quote} loadAllQuotes={loadAllQuotes}/> : <AllQuotes quotes={quotes}/> }
     <div className={styles.footer}>Poornima Natikar @devchallenges.io</div>
    </div>
  );
}
export default App;
