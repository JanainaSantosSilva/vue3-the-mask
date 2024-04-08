import { createApp, h } from 'vue';
import TheMaskTemplate from '../src/component.vue';
import directive from '../src/directive';

const app = createApp();

app.config.globalProperties.$createElement = h;

const TheMaskComponent = app.component('the-mask', TheMaskTemplate);
const TheMaskInstance = new TheMaskComponent({ props: { mask: '#.#' } });
TheMaskInstance.value = '123';

test('null value should not throw error', () => {
  TheMaskInstance.value = null;
});

test('directive should accept array', () => {
  directive({ tagName: 'INPUT', dispatchEvent: function() {} }, { value: ['#.#', '##.#'] });
});
