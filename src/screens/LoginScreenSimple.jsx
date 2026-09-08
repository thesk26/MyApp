import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
  
const LoginScreenSimple = ({navigation}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

const handleLogin = () => {
  console.log('Login clicked');
};

return (

    <View style={styles.screen}>
      <View style={styles.container}>
        {/* LOGO */}
        <View style={styles.logo}>
          <Text style={styles.logoText}>P</Text>
        </View>

        {/* WELCOME TITLE */}
        <Text style={styles.welcomeTitle}>Welcome Back</Text>

        {/* SUBTITLE */}
        <TouchableOpacity>
          <Text style={styles.subtitle}>Sign in to continue to your account</Text>
        </TouchableOpacity>

        {/* LOGIN CONTAINER */}
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Login Here</Text>

          {/* EMAIL */}
          <Text style={styles.label}>EMAIL/USERNAME</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email or username"
            placeholderTextColor="#85818A"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          {/* PASSWORD */}
          <Text style={styles.label}>PASSWORD</Text>

          {/* PASSWORD INPUT + SHOW */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              placeholderTextColor="#85818A"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              activeOpacity={0.6}
            >
              <Text style={styles.showText}>{showPassword ? 'HIDE' : 'SHOW'}</Text>
            </TouchableOpacity>
          </View>

          {/* REMEMBER ME + FORGOT PASSWORD */}
          <View style={styles.optionsRow}>
            <TouchableOpacity style={styles.rememberRow}>
              <View style={styles.checkbox} />
              <Text style={styles.rememberText}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          {/* SIGN IN */}
          <TouchableOpacity
            style={styles.signInButton}
            activeOpacity={0.8}
            onPress={handleLogin}
          >
            <Text style={styles.signInText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

        {/* SIGN UP */}
        <TouchableOpacity 
            onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupText}>Don't have an account?</Text>
        </TouchableOpacity>

        {/* TERMS */}
        <Text style={styles.terms}>
          By continuing, you agree to our Terms of Service and Privacy
          {'/'}
          Policy.
        </Text>
      </View>
    </View>
  );
};

export default LoginScreenSimple;


const styles = StyleSheet.create({

  // SCREEN

  screen: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },

  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },


// LOGO

  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 27,
  },

  logoText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#111111',
    textAlign: 'center',
  },

  // WELCOME

  welcomeTitle: {
    marginBottom: 0,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 17,
    color: '#d8d6d6',
    textAlign: 'center',
  },

  // LOGIN CONTAINER

  loginContainer: {
    width: '87%',
    marginTop: 37,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 30,
    paddingVertical: 24,
  },

// TITLE

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#111111',
  },

  // LABEL

  label: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#666666',
    marginBottom: 9,
  },

  // EMAIL INPUT

  input: {
    height: 60,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 14,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 17,
    fontSize: 16,
    color: '#222222',
    marginBottom: 22,
  },

  // PASSWORD CONTAINER

  passwordContainer: {
    height: 60,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 14,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 17,
    marginBottom: 20,
  },

  passwordInput: {
    flex: 1,
    height: 60,
    fontSize: 16,
    color: '#222222',
  },

  showText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#222222',
  },

// OPTIONS

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
  },

  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    backgroundColor: '#F3F3F3',
    marginRight: 9,
  },

  rememberText: {
    fontSize: 14,
    color: '#666666',
  },

  forgotText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
  },

  // SIGN IN BUTTON

  signInButton: {
    height: 61,
    backgroundColor: '#151515',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },

  signInText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1.5,
  },

// SIGN UP

  signupText: {
    marginTop: 33,
    fontSize: 14,
    color: '#e4dfdf',
    textAlign: 'center',
  },
// TERMS

  terms: {
    marginTop: 32,
    marginHorizontal: 50,
    fontSize: 11,
    lineHeight: 17,
    color: '#dbd7d7',
    textAlign: 'center',
  },

});
