// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Pressable,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';

// const COLORS = {
//   background: '#000000',
//   card: '#ffffff',
//   input: '#f3f3f3',
//   border: '#d9d9d9',
//   primary: '#000000',
//   primaryDark: '#111111',
//   text: '#111111',
//   muted: '#5b5b5b',
//   white: '#ffffff',
//   error: '#d32f2f',
// };

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const validate = () => {
//     let valid = true;

//     setEmailError('');
//     setPasswordError('');

//     if (!email.trim()) {
//       setEmailError('Email or username is required');
//       valid = false;
//     } else if (
//       email.includes('@') &&
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//     ) {
//       setEmailError('Enter a valid email address');
//       valid = false;
//     }

//     if (!password) {
//       setPasswordError('Password is required');
//       valid = false;
//     } else if (password.length < 6) {
//       setPasswordError('Password must contain at least 6 characters');
//       valid = false;
//     }

//     return valid;
//   };

//   const handleLogin = () => {
//     if (!validate()) {
//       return;
//     }

//     setLoading(true);

//     // Replace this with your API call.
//     setTimeout(() => {
//       setLoading(false);

//       Alert.alert('Login Successful', `Welcome back, ${email}!`);
//     }, 1500);
//   };

//   const handleForgotPassword = () => {
//     Alert.alert('Forgot Password', 'Password reset functionality goes here.');
//   };

//   const handleCreateAccount = () => {
//     if (navigation?.navigate) {
//       navigation.navigate('Register');
//     } else {
//       Alert.alert('Create Account', 'Registration screen goes here.');
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Logo / Branding */}
//         <View style={styles.brandContainer}>
//           <View style={styles.logo}>
//             <Text style={styles.logoText}>P</Text>
//           </View>

//           <Text style={styles.title}>Welcome Back</Text>

//           <Text style={styles.subtitle}>
//             Sign in to continue to your account
//           </Text>
//         </View>

//         {/* Login Card */}
//         <View style={styles.card}>
//           {/* Email */}
//           <View style={styles.field}>
//             <Text style={styles.label}>EMAIL OR USERNAME</Text>

//             <TextInput
//               value={email}
//               onChangeText={text => {
//                 setEmail(text);
//                 setEmailError('');
//               }}
//               placeholder="Enter your email or username"
//               placeholderTextColor="#6f6873"
//               style={[styles.input, emailError && styles.inputError]}
//               autoCapitalize="none"
//               autoCorrect={false}
//               keyboardType="email-address"
//               editable={!loading}
//               returnKeyType="next"
//             />

//             {emailError ? (
//               <Text style={styles.errorText}>{emailError}</Text>
//             ) : null}
//           </View>

//           {/* Password */}
//           <View style={styles.field}>
//             <Text style={styles.label}>PASSWORD</Text>

//             <View
//               style={[
//                 styles.passwordContainer,
//                 passwordError && styles.inputError,
//               ]}
//             >
//               <TextInput
//                 value={password}
//                 onChangeText={text => {
//                   setPassword(text);
//                   setPasswordError('');
//                 }}
//                 placeholder="Enter your password"
//                 placeholderTextColor="#6f6873"
//                 style={styles.passwordInput}
//                 secureTextEntry={!showPassword}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 editable={!loading}
//                 returnKeyType="done"
//                 onSubmitEditing={handleLogin}
//               />

//               <Pressable
//                 onPress={() => setShowPassword(!showPassword)}
//                 style={styles.showButton}
//                 disabled={loading}
//               >
//                 <Text style={styles.showText}>
//                   {showPassword ? 'HIDE' : 'SHOW'}
//                 </Text>
//               </Pressable>
//             </View>

//             {passwordError ? (
//               <Text style={styles.errorText}>{passwordError}</Text>
//             ) : null}
//           </View>

//           {/* Remember + Forgot */}
//           <View style={styles.optionsRow}>
//             <Pressable
//               style={styles.rememberContainer}
//               onPress={() => setRememberMe(!rememberMe)}
//               disabled={loading}
//             >
//               <View
//                 style={[styles.checkbox, rememberMe && styles.checkboxActive]}
//               >
//                 {rememberMe ? <Text style={styles.checkmark}>✓</Text> : null}
//               </View>

//               <Text style={styles.rememberText}>Remember me</Text>
//             </Pressable>

//             <Pressable onPress={handleForgotPassword} disabled={loading}>
//               <Text style={styles.forgotText}>Forgot password?</Text>
//             </Pressable>
//           </View>

//           {/* Login */}
//           <Pressable
//             onPress={handleLogin}
//             disabled={loading}
//             style={({ pressed }) => [
//               styles.loginButton,
//               pressed && styles.buttonPressed,
//               loading && styles.buttonDisabled,
//             ]}
//           >
//             {loading ? (
//               <View style={styles.loadingContainer}>
//                 <ActivityIndicator size="small" color={COLORS.white} />

//                 <Text style={styles.loginButtonText}>SIGNING IN...</Text>
//               </View>
//             ) : (
//               <Text style={styles.loginButtonText}>SIGN IN</Text>
//             )}
//           </Pressable>
//         </View>

//         {/* Register */}
//         <View style={styles.registerContainer}>
//           <Text style={styles.registerText}>Don't have an account?</Text>

//           <Pressable onPress={handleCreateAccount} disabled={loading}>
//             <Text style={styles.registerLink}>Create account</Text>
//           </Pressable>
//         </View>

//         {/* Terms */}
//         <Text style={styles.terms}>
//           By continuing, you agree to our Terms of Service and Privacy Policy.
//         </Text>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//   },

//   scrollContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 24,
//     paddingVertical: 40,
//   },

//   brandContainer: {
//     alignItems: 'center',
//     marginBottom: 32,
//   },

//   logo: {
//     width: 72,
//     height: 72,
//     borderRadius: 36,
//     backgroundColor: COLORS.white,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,

//     shadowColor: '#ffffff',
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 16,
//     elevation: 8,
//   },

//   logoText: {
//     color: COLORS.primary,
//     fontSize: 34,
//     fontWeight: '800',
//   },

//   title: {
//     color: COLORS.white,
//     fontSize: 30,
//     fontWeight: '700',
//     marginBottom: 8,
//   },

//   subtitle: {
//     color: '#d9d9d9',
//     fontSize: 15,
//     textAlign: 'center',
//     lineHeight: 22,
//   },

//   card: {
//     width: '100%',
//     backgroundColor: COLORS.card,
//     borderRadius: 20,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: 'rgba(0, 0, 0, 0.08)',
//   },

//   field: {
//     marginBottom: 20,
//   },

//   label: {
//     color: COLORS.muted,
//     fontSize: 11,
//     fontWeight: '700',
//     letterSpacing: 1,
//     marginBottom: 8,
//   },

//   input: {
//     height: 54,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: COLORS.border,
//     backgroundColor: COLORS.input,
//     paddingHorizontal: 16,
//     color: COLORS.text,
//     fontSize: 15,
//   },

//   passwordContainer: {
//     height: 54,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: COLORS.border,
//     backgroundColor: COLORS.input,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   passwordInput: {
//     flex: 1,
//     height: 54,
//     paddingHorizontal: 16,
//     color: COLORS.text,
//     fontSize: 15,
//   },

//   showButton: {
//     paddingHorizontal: 16,
//     height: '100%',
//     justifyContent: 'center',
//   },

//   showText: {
//     color: COLORS.primary,
//     fontSize: 11,
//     fontWeight: '700',
//     letterSpacing: 0.5,
//   },

//   inputError: {
//     borderColor: COLORS.error,
//   },

//   errorText: {
//     color: COLORS.error,
//     fontSize: 12,
//     marginTop: 6,
//   },

//   optionsRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },

//   rememberContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   checkbox: {
//     width: 20,
//     height: 20,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: COLORS.border,
//     backgroundColor: COLORS.input,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 8,
//   },

//   checkboxActive: {
//     backgroundColor: COLORS.primaryDark,
//     borderColor: COLORS.primaryDark,
//   },

//   checkmark: {
//     color: COLORS.white,
//     fontSize: 13,
//     fontWeight: '700',
//   },

//   rememberText: {
//     color: COLORS.muted,
//     fontSize: 13,
//   },

//   forgotText: {
//     color: COLORS.primary,
//     fontSize: 13,
//     fontWeight: '600',
//   },

//   loginButton: {
//     height: 56,
//     borderRadius: 14,
//     backgroundColor: COLORS.primaryDark,
//     alignItems: 'center',
//     justifyContent: 'center',

//     shadowColor: COLORS.primaryDark,
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 7,
//   },

//   buttonPressed: {
//     opacity: 0.8,
//     transform: [{ scale: 0.99 }],
//   },

//   buttonDisabled: {
//     opacity: 0.65,
//   },

//   loginButtonText: {
//     color: COLORS.white,
//     fontSize: 15,
//     fontWeight: '700',
//     letterSpacing: 1,
//   },

//   loadingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },

//   registerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 28,
//   },

//   registerText: {
//     color: COLORS.muted,
//     fontSize: 14,
//     marginRight: 5,
//   },

//   registerLink: {
//     color: COLORS.primary,
//     fontSize: 14,
//     fontWeight: '700',
//   },

//   terms: {
//     color: '#a3a3a3',
//     fontSize: 11,
//     lineHeight: 17,
//     textAlign: 'center',
//     marginTop: 28,
//     paddingHorizontal: 20,
//   },
// });
