import { useState } from 'react'
import {View,StyleSheet ,Dimensions ,Keyboard, Alert} from 'react-native'
import uuid from 'react-native-uuid'
import AddTask from './src/components/AddTask'
import ListTasks from './src/components/ListTasks'

//
import CustomAlert from './src/components/AlertPrimary'

const App = () => {
  const [taskTitle,setTaskTitle] = useState("")
  const [tasks,setTasks] = useState([])
  const screenWidth = Dimensions.get('window').width
  //
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState(null); 


  const addTask = () =>{

    if(taskTitle.trim().length == 0){
      Alert.alert('Alerta', 'El título está vacío.');
      return;
    }
    const newTask = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
      completed:false,
      title:taskTitle.trim(),
    }

    setTasks([...tasks,newTask])
    setTaskTitle("")
    Keyboard.dismiss()
  }

  const onHandlerTitle = (t) =>{
    setTaskTitle(t)
  }

  //const onHandlerModaDelete = (task) => {
    /*
    Alert.alert(
       'Confirmación de eliminación',
       `¿Estás seguro de que quieres eliminar la tarea: ${task.title}?`,
       [
          {text: 'Sí', onPress: () => deleteTask(task)},
          {text: 'No' , style: 'cancel'},
       ],
       { cancelable: false }
    )*/

    /*
    <CustomAlert
    title='Confirmación de eliminación'
    message={`¿Estás seguro de que quieres eliminar la tarea: ${task.title}?`}
    onConfirm={deleteTask}
    //onCancel={handleCancel}
    visible={isAlertVisible}
  />*/
//}
  const onHandlerModaDelete = (task) => {
    //ACA ENBTRA AL USAR LA X
    setTaskSelected(task); // Guarda la tarea seleccionada para su posterior eliminación
    setIsAlertVisible(true); // Muestra la alerta personalizada
  };

  const handleConfirm = () => {
    if (taskSelected) {
      deleteTask(taskSelected); // Elimina la tarea seleccionada
    }
    setIsAlertVisible(false); // Oculta la alerta personalizada
  };

  const handleCancel = () => {
    setIsAlertVisible(false); // Oculta la alerta personalizada
  };
   
   

   
   const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id));
   }
   

  const updateTaskCompleted = (id) => {
    setTasks(tasks.map(task =>{
      if(task.id === id) return {...task,...{completed:!task.completed}}
      return task
    }))
  }

  return( 
    <View style={styles.container} >
      <AddTask taskTitle= {taskTitle}
               onHandlerTitle= {onHandlerTitle}
               addTask = {addTask}
      />
      <ListTasks 
        tasks={tasks} 
        onHandlerModaDelete={onHandlerModaDelete}
        screenWidth={screenWidth}
        updateTaskCompleted={updateTaskCompleted}
      />
       <CustomAlert
        isVisible={isAlertVisible}
        title="Confirmación de eliminación"
        message={`¿Estás seguro de que quieres eliminar la tarea: ${taskSelected?.title}?`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        visible={isAlertVisible}
      />

  </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F2E4F6",
    flex:1,
    paddingTop:30
  },


})