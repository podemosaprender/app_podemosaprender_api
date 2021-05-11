import * as PaApi from './pa-api.js'; //U: importar la API del mismo lugar donde cargaste esta pagina

window.PaApi= PaApi; //DBG: para poder llamarla desde la consola

export * from './pa-api.js'; //A: re exporto, asi alcanza con cambiar entre import pa-api-consola e import pa-api

