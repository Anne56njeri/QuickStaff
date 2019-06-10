import React from 'react';
import {Spinner, View} from "native-base";

export default class Loader extends React.Component{
    render() {
        return(

            <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                <Spinner style={{height: 80}} size="large" color='tomato'/>

            </View>
        )
    }
}
