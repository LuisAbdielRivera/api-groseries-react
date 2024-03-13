import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { studentForm } from './StudentFormScreen';

const HomeScreen = ({ navigation }) => {

    

  return (
    <View>
        <Button title='Nuevo'onPress={() => navigation.navigate('StudentFormScreen')}/>
        <View style={styles.studentList}>
                {studentForm.map((student, index) => (
                    <View key={index} style={styles.studentItem}>
                        <Text style={styles.label}>Matricula: {student.tuition}</Text>
                        <Text style={styles.label}>Nombre: {student.name}</Text>
                        <Text style={styles.label}>Apellido: {student.lastName}</Text>
                        <Text style={styles.label}>Grado: {student.grade}</Text>
                        <Text style={styles.label}>Promedio: {student.average}</Text>
                        <Button title='Editar'onPress={() => navigation.navigate('EditStudentFormScreen')}/>
                        <Button title='Eliminar'/>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    studentList: {
        marginTop: 20,
    },
    studentItem: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        marginBottom: 10,
    },
});

export default HomeScreen;
