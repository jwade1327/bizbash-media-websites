import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';

const ImageSlider = () => import(/* webpackChunkName: "common-image-slider" */ './image-slider.vue');
const ContactUsForm = () => import(/* webpackChunkName: "common-contact-us" */ './contact-us-form.vue');

export default (Browser) => {
  DefaultTheme(Browser);
  Inquiry(Browser);

  // @todo this should be removed once contact us is moved to core.
  Browser.register('CommonContactUsForm', ContactUsForm);
  Browser.register('CommonImageSlider', ImageSlider);
};
