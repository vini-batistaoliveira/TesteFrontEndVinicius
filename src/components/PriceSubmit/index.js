import React from 'react';
import "./styles.css";
import Price from './price';

import Buttom from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const PriceSubmit = (props) => (
    // <Grid className="gridDiv" container spacing={1}>
        <Grid className="gridDiv" item>

            <div className="mainDiv">
                <div className="sub">
                    <div className="price">
                        <Price />
                    </div>

                    <div className="submit">
                        <Buttom variant="contained">
                            Finalizar Compra
                </Buttom>
                    </div>
                </div>
            </div>

        </Grid>

    // </Grid>

);

export default PriceSubmit;