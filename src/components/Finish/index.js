import React from 'react';
import "./styles.css";

import Button from '@material-ui/core/Button';

const finishImg = require('../../resources/images/purchase.png');


const Finish = () => (
    <div className="container">
    <div className="mainFinish">
        <div className="titleFinish">
            <p>Fulano de Tal</p>
        </div>
        <div className="textFinish">
            <p>Sua compra no valor de <span className="priceFinish">R$ 299,00</span> foi finalizada com sucesso</p>
        </div>
        <div className="imageFinish">
            <img src={finishImg} />
        </div>
        <div className="buttonFinish">
            <Button>
                Iniciar Nova Compra
            </Button>
        </div>

    </div>

    </div>
);

export default Finish;