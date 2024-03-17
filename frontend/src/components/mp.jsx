
import React, { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const YourComponent = ({preferenceID}) => {
    useEffect(() => {
      initMercadoPago(import.meta.env.MP_PUBLIC_KEY || 'APP_USR-b304d38d-d38f-49e6-b8c1-eb808b2be0df', { locale: 'es-AR' });
    }, []);

    return (
      <div>
        <Wallet initialization={{ preferenceId: `${preferenceID}` }} customization={{ texts:{ valueProp: 'smart_option'}}} />
      </div>
    );
};

export default YourComponent;
        
