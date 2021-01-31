import styles from './AllQuotes.module.scss';

function AllQuotes(props) {
return <div className={styles.list}>
    <h2>{props.quotes[0].quoteAuthor}</h2>
{props.quotes.map((value, key) => {
    return (
        <div key={key}>
            {value.quoteText}
        </div>
    )
})}
</div>
}
export default AllQuotes;