import tokens from './tokens'; // Importe os tokens, presumivelmente de um arquivo tokens.js
import mask from './directive'; // Importe a diretiva mask de um arquivo directive.js
import TheMask from './component.vue'; // Importe o componente TheMask de um arquivo component.vue
import  { h } from 'vue'

const install = (app) => {
  app.component(TheMask.name, TheMask); // Registre o componente globalmente
  app.directive('mask', mask); // Registre a diretiva globalmente
  app.config.globalProperties.$createElement = h;
}

export default install;
export { TheMask, mask, tokens };

// Instale por padrão se incluído de uma tag de script
if (typeof window !== 'undefined' && window.app) {
  install(window.app);
}

