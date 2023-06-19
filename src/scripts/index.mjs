
import '../styles/style.css';
import '../styles/scss/main.scss';

import * as bootstrap from 'bootstrap'

import logo from '../public/Logo.png';

import main from './main.js';

// document.getElementById('logo-image').setAttribute('src', logo);

document.getElementById('logo-image').src = logo;

document.addEventListener('DOMContentLoaded', main);
