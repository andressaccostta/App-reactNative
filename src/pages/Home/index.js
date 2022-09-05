import React, {useContext} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import AuthContext from '../../contexts/auth';

function Home ({navigation}){

    const {logout,usuario} = useContext(AuthContext);

        function handlerLogout (){
            logout();
        }
        
    return ( 
        <View style={styles.container}>

            <Text style={styles.text}>Tela Principal</Text>

                <Button
                    title="Logout"
                    onPress={handlerLogout}>
                </Button>
          
        </View> 
    );       
}


const styles = StyleSheet.create({
    container: {
        flex:1
    } ,
    text : {
        fontSize: 40,
        textAlign: 'center',
        color: 'pink'
    } ,
   
    
})


export default Home