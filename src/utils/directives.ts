// @ts-nocheck
import { clickOutside } from './directives/click-outside';

export const registerDirectives = (app) => {
  app.directive('click-outside', clickOutside);
  // Здесь можно регистрировать другие директивы
};

export { clickOutside };