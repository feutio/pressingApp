import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeBottomTabs from "./homeBottomTabs";
import ReviewOrder from "../Components/reviewOrder";
import SelectAddress from "../Components/selectAddress";
import Payment from "../Components/payment";
import OrderDetails from "../Components/orderDetails";
import Cloths from "../Components/cloths";
import Login from "./loginStack";
import PickDelivery from "../Components/pickDelivery";
import PressingStack from './pressingStack'

const clientStack = createStackNavigator();

export default function InOutStack(){
    return (
        <clientStack.Navigator
            screenOptions = {{
                headerShown:  false
            }}
        >
            <clientStack.Screen name = 'login'  component = {Login} />
            <clientStack.Screen name = 'Home'  component = {HomeBottomTabs} />
            <clientStack.Screen name = 'Cloth'  component = {Cloths} />
            <clientStack.Screen name = 'ReviewOrders'  component = {ReviewOrder} />
            <clientStack.Screen name = 'SelectAddress'  component = {SelectAddress} />
            <clientStack.Screen name = 'PickDelivery'  component = {PickDelivery} />
            <clientStack.Screen name = 'Payment'  component = {Payment} />
            <clientStack.Screen name = 'pressing'  component = {PressingStack} />
            <clientStack.Screen name = 'OrderDetails'  component = {OrderDetails} />
        </clientStack.Navigator>
    )
}