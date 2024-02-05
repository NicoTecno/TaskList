import { StyleSheet, TextInput, View, Text } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const AddTask = ({taskTitle,
                  onHandlerTitle,
                  taskDescripcion,
                  onHandlerDescription,
                  addTask}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textoInicio}>Gestor de Tareas</Text>
        
        <View style={styles.contrenedor2}>
        <TextInput 
            value={taskTitle} 
            onChangeText={onHandlerTitle}  
            placeholder='Ingresar titulo' 
            placeholderTextColor="white"
            maxLength={12}
            style={styles.input}
            />
            {/* 
        <TextInput 
        value={taskDescripcion} 
        onChangeText={onHandlerDescription}  
        placeholder='Ingresar descripcion' 
        placeholderTextColor="white"
        multiline
        numberOfLines={4}
        maxLength={100}
        style={styles.input}/>
      */}
        <ButtonPrimary title="+" onPress={addTask}/>
      </View>
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#6A24BF",
        alignItems:"center",
        justifyContent:"space-around",
        padding:10,
        
      },
      input:{
        width:"80%",
        borderWidth:2,
        borderColor:"white",
        marginHorizontal:10,
        marginVertical:5,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5,
        color:"white",
        fontSize:16,
        textAlignVertical:"top",
        flexDirection:"row"
      },
      textoInicio:{
        color:"white",
        fontSize:30, 
      },
      contrenedor2:{
        flexDirection:"row"
      }

})