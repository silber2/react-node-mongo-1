
import React, { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const YourComponent = ({preferenceID}) => {
    useEffect(() => {
      initMercadoPago("APP_USR-b304d38d-d38f-49e6-b8c1-eb808b2be0df", { locale: 'es-AR' });
    }, []);

    return (
      <div>
       {preferenceID && <Wallet initialization={{ preferenceId: `${preferenceID}`, redirectMode: 'blank'}}/> }
      </div>
    );
};
// customization={{ texts:{ valueProp: 'smart_option'}}}
export default YourComponent;
        
