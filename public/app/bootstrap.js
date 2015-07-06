import angular from 'angular';
import { wrappController } from './controller/wrappController';

window.app = window.app || 'electron app';

var app = angular.module('my-app',[]);
    app.controller('wrappController', wrappController);
