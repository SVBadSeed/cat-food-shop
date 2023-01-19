import './css/App.css'
import './css/libs/normalize.css'
import ProductCard from "./cards/ProductCard"
import cards from './assets/cards.json'


function App() {
    return (
        <div className=' App'>
            <div className='wrapper'>
                <h1 className='title'>Ты сегодня покормил кота?</h1>
                <div className='container'>
                    <div className='product-cards'>
                        {cards.map((card) => (
                            <ProductCard key={card.id} {...card}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
