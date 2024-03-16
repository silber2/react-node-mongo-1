
import React, { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const YourComponent = ({preferenceID}) => {
    useEffect(() => {
      initMercadoPago(import.meta.env.MP_PUBLIC_KEY, { locale: 'es-AR' });
    }, []);

    return (
      <div>
        <Wallet initialization={{ preferenceId: `${preferenceID}` }} customization={{ texts:{ valueProp: 'smart_option'}}} />
      </div>
    );
};

export default YourComponent;
        
