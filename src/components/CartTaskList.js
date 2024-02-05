import { StyleSheet, Text, View,Switch} from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const CartTaskList = ({item,onHandlerModaDelete,updateTaskCompleted}) => {
  return (
             <View style={[styles.taskCard,{backgroundColor:item.completed ? 'green' : '#872FF5'}]}>
               <Text style={styles.text}>{item.title}</Text>
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
        alignItems:"center",
        borderRadius:6,
        padding:1,
        marginTop:10
       },
       text:{
        color:"white",
        fontSize:18,
        flex:3,
       },
       completedContanier:{
        alignItems:"center",
     },
     textCompleted:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        flex:2
     }
 })
 