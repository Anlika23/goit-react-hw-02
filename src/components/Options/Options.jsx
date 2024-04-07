import css from './Options.module.css';

export default function Option({ updateFeedback, feedbackCounts, totalFeedback, resetFeedback }){
    return (
        <div className={css.optionContainer}>
            {feedbackCounts.map(item => (
                <button className={css.optionButton} key={item} onClick={() => updateFeedback(item)}>{item}</button>
            
            ))}
            
            {totalFeedback > 0 && (
                <button className={css.resetButton} onClick={resetFeedback}>Reset</button>
            )}
        </div>
    );
}