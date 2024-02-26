import App from './components/app/app';
import './global.css';
import { changeTheme } from './types/change_theme';

const app = new App();
app.start();
changeTheme();
