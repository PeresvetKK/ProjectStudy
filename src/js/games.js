import '../scss/games.scss';
import * as $ from 'jquery';
import {tabs} from '../vendors/script';
import 'slick-carousel';
import slick from '../../node_modules/slick-carousel/slick/slick.scss';
$(() => {
    $('.games-slider').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
    tabs();
});

