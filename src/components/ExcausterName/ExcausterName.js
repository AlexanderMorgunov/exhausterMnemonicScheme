import './ExcausterName.css';

const ExcausterName = ({name}) => {
    return(
        <div className='excausterName_wrapper'><div className="excausterName_box">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"></path></svg>
        </div> Эксгаустер {name}</div>
    )
}
export default ExcausterName;
