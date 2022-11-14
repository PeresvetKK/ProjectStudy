import '../scss/leaders.scss';
import * as $ from 'jquery';
import {dropDown} from '../vendors/script';

$(() => {
    dropDown('.dropdown', '.dropdown-content');
});

