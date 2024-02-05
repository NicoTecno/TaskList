import React, { useState } from 'react';
import { Modal, Text, Pressable, View, Platform, StyleSheet } from 'react-native';

const CustomAlert = ({ isVisible ,title, message, onConfirm, onCancel }) => {

 const handleConfirm = () => {
    onConfirm();
 };

 const handleCancel = () => {
    onCancel();
 };
 

 return (
  <Modal
    animationType="slide"
    transparent={true}
    visible={isVisible}
    onRequestClose={handleCancel}
  >
    <View style={styles.overlay}>
      <View style={styles.alertContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleConfirm} style={styles.confirmButton}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </Pressable>
          <Pressable onPress={handleCancel} style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </Modal>
);
};

const styles = StyleSheet.create({
overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
alertContainer: {
  backgroundColor: 'white',
  width: '80%',
  borderRadius: 10,
  padding: 20,
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
},
message: {
  marginTop: 10,
  fontSize: 16,
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 10,
},
confirmButton: {
  backgroundColor: '#4EAE4E',
  borderRadius: 5,
  padding: 10,
},
cancelButton: {
  backgroundColor: '#CC0000',
  borderRadius: 5,
  padding: 10,
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
});

export default CustomAlert;
