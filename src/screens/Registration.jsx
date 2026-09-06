import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const Registration = () => {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>Registration Form</Text>

            <TextInput
                style={styles.input}
                placeholder='Enter Name'
            />

            <TextInput
                style={styles.input}
                placeholder='Enter Mobile'
            />

            <TextInput
                style={styles.input}
                placeholder='Enter email'
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <Text style={styles.loginText}> Already have an Account</Text>
            </TouchableOpacity>

        </View>


    )
}

export default Registration;

const styles = StyleSheet.create({

    container: {
        padding: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        height: 370,
        width: 300
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 12,
        marginBottom: 15,
        borderRadius: 10
    },
    button: {
        backgroundColor: "skyblue",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",

    },
    buttonText: {
        fontSize: 15,
    },
    loginText: {
        marginTop: 20,
        textAlign: 'center'
    }


})