import { StyleSheet, Text, View ,Modal,Button,Alert } from 'react-native'

const AlertDeleteTask = ({taskSelected,
                          deleteTask,
                          onHandlerModaDelete,
                          modalVisible}) => {

    return (
        Alert.alert(
            'Confirmación de eliminación',
            `¿Estás seguro de que quieres eliminar la tarea: ${taskSelected.title}?`,
            [
               {text: 'No', onPress: () => onHandlerModaDelete({}), style: 'cancel'},
               {text: 'Sí', onPress: deleteTask},
            ],
            { cancelable: false }
           )
  )
}

export default AlertDeleteTask

const styles = StyleSheet.create({


})