
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-b304d38d-d38f-49e6-b8c1-eb808b2be0df' });

const preference = new Preference(client);

export default preference