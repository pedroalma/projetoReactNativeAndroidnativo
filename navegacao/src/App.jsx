import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TextoCentral from "./components/TextoCentral";

export default props =>{
    return(
        <SafeAreaView corFundo="#DFFF00" style={{flex: 1,}} >
            <TextoCentral corTexto="#CD5C5C">App</TextoCentral>
        </SafeAreaView>
    )
}