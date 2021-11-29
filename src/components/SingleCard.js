
import './SingleCard.css';
export default function SingCard ({card, handleChoice, flipped, disabled}){

    return (
        <div className="card">
            <div className={ flipped? "flipped": "" }>
                <img className="front" src={card.src} alt="card" />
                <img 
                className="back" 
                src="/img/cover.png" 
                alt="card" 
                onClick={()=>{!disabled && handleChoice(card)}}
                />
            </div>
        </div>
    )
}