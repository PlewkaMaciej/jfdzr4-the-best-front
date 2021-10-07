import '../index.css'

const Spinner = () => {
    return (
        <div className='spinner-wrapper'>
            <div className='spinner-element spinner-element--top'></div>
            <div className='minispinner-wrapper'>
                <div className='minispinner-element minispinner-element--left'></div>
                <div className='minispinner-element minispinner-element--right'></div>
            </div>
            <div className='spinner-element spinner-element--bottom'></div>
        </div>
    );
}
 
export default Spinner;