import Page1 from './menuScenes/menu1';
import Payment from './menuScenes/Payment.js';
import CarListing from './menuScenes/carListing';
import Trips from './menuScenes/Trips';
import Register from "./menuScenes/RegisterProfile.js";
import SideMenu from './SideMenu';
import {DrawerNavigator} from 'react-navigation';

export default DrawerNavigator({
  Page1: {
    screen: Page1
  },
  Payment: {
    screen: Payment
  },
  CarListing: {
    screen: CarListing
  },
  Register:{
    screen:Register
  },
  Trips:{
    screen:Trips
  }


}, {
   contentComponent: SideMenu,
   drawerWidth: 300,
   drawerOpenRoute: "DrawerOpen",
   drawerCloseRoute: "DrawerClose",
   drawerToggleRoute: "DrawerToggle",
});