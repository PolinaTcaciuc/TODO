import '../index.html';
import '../scss/style.scss';
import './modules/variables';
import localsettings from './modules/localsettings';
import './modules/Task';
import './modules/add';
import './modules/call';
import './modules/footer';

window.addEventListener('DOMContentLoaded', () => {
  localsettings();
});
