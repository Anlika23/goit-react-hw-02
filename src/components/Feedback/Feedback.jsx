

export default function Feedback({good, neutral, bad, feedbackStart, totalFeedback, positiveFeedback}) {
    if (!feedbackStart) {
        return <p>No feedback yet</p>;
    }
    
    return (
        <div>
            <p>Good: { good }</p>
            <p>Neutral: { neutral }</p>
            <p>Bad: { bad }</p>
            <p>Total: { totalFeedback}</p>
            <p>Positive: { positiveFeedback}%</p>
        </div>
    )
}