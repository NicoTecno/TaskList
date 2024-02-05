import { StyleSheet, Text, View,Switch} from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'


const cambiarColorCard = (t) => {
  //Completar
}


const CartTaskList = ({item,onHandlerModaDelete,screenWidth,updateTaskCompleted}) => {
  return (
             <View style={[styles.taskCard,{backgroundColor:item.completed ? 'green' : '#872FF5'}]}>
               <Text style={styles.text}>{item.title}</Text>
                 {/*
                 <Text style={styles.text}>Creacion: {item.createAt}</Text>
                 <Text style={styles.text}>Actuliazacion: {item.updateAt}</Text>
                 <Text style={styles.text}>Descripcion: {item.description}</Text>
                  */}
                 <View style={styles.completedContainer}>
                     <Switch
                         value={item.completed}
                         onValueChange={() => updateTaskCompleted(item.id)}
                     />
                 </View>
                  <Text style={styles.textCompleted}>{item.completed ? "Completada" : "Pendiente" }</Text>
                 <ButtonPrimary title='X' onPress={() => onHandlerModaDelete(item)} />
             </View>
  )
 }
 
 export default CartTaskList
 
 const styles = StyleSheet.create({
     taskCard:{
        width:"100%",
        backgroundColor:"#872FF5",
        flexDirection:"row", 
        //justifyContent:"center",
        //justifyContent:"space-between",
        alignItems:"center",
        borderRadius:6,
        padding:1,
        marginTop:10
        //margin:5,
        //flex:3
        //gap:25
       },
       text:{
        color:"white",
        fontSize:18,
        flex:3,
        
        //paddingRight:"5%"
       },
       completedContanier:{
        //width:"100%",
        //flexDirection:"row",
        alignItems:"center",
        //felx:2
        //justifyContent:"flex-start",
        //gap:15
     },
     textCompleted:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        flex:2
        //paddingRight:"5%"
     }
 })
 