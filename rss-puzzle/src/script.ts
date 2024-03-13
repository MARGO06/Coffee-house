import { AllPages } from './pages/all-pages';
import { SaveElements } from './functions/login-pages-action';
import './style.css';

AllPages.renderPage('login');
SaveElements.saveLocalStorage();
