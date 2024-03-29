import './styles.css';

import ProductImg from 'assets/images/product.png';
import ButtonIcon from 'components/ButtonIcon';

const ProductCard = () => {

    return (
        <div className="base-card container product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h2>Audi Supra TT</h2>
            </div>
            <div className="card-bottom-container">
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</h3>
            </div>
            <div className="card-button">
                <ButtonIcon text="comprar" />
            </div>
        </div>
    );
}

export default ProductCard;