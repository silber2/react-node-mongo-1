
import React, { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const YourComponent = ({preferenceID}) => {
    useEffect(() => {
      initMercadoPago(import.meta.env.MP_PUBLIC_KEY || 'TEST-378f6ad9-5dfe-4379-bbfd-29c649e9e0a1', { locale: 'es-AR' });
    }, []);

    return (
      <div>
        <Wallet initialization={{ preferenceId: `${preferenceID}` }} customization={{ texts:{ valueProp: 'smart_option'}}} />
      </div>
    );
};

export default YourComponent;
        
