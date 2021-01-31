import styles from './RandomQuote.module.scss';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
const CssButton = withStyles({
    root: {
      "&:hover":{
      background: '#828282',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      color: 'white',
      width: '100%',
      "&:after": {
        content: '">"',
        position: 'absolute',
        color:'white',
        top: '40%',
        right:'5%',
    
      }
    }
    },
    label:{
      textTransform:'capitalize',
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
    }
  })(Button);

function RandomQuote(props) {

const handleLoadAll = () =>{
    props.loadAllQuotes(props.quote.quoteAuthor);
}    
return <div className={styles.randomContainer}>
<div className={styles.quotediv}>
    {props.quote.quoteText}
</div>
<div>
    <CssButton onClick={()=>handleLoadAll()}>
        <h2>{props.quote.quoteAuthor}</h2>
        <span>{props.quote.quoteGenre}</span>
    </CssButton>
</div>
</div>
}
export default RandomQuote;