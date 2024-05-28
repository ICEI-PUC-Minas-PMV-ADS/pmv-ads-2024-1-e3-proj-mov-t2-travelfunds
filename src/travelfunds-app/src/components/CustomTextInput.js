// import React, { useState } from 'react';
// import { TextInput, View, StyleSheet, Text } from 'react-native';

// const CustomTextInput = ({ label, value, onChangeText, style }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={[styles.input, isFocused && styles.inputFocused, style]}
//         value={value}
//         onChangeText={onChangeText}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//       />
//       <View
//         style={[
//           styles.labelline,
//           isFocused || value ? styles.labellineFocused : null,
//         ]}
//       >
//         <Text
//           style={[styles.labelText, isFocused ? styles.labelTextFocused : null]}
//         >
//           {label}
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     height: 80,
//   },
//   input: {
//     position: 'absolute',
//     width: '100%',
//     fontSize: 22,
//     paddingHorizontal: 30,
//     paddingVertical: 10,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#f0ffff',
//     backgroundColor: 'transparent',
//     zIndex: 1,
//     color: '#f0ffff',
//   },
//   labelline: {
//     backgroundColor: '#012B53',
//     paddingHorizontal: 10,
//     position: 'absolute',
//     top: 10,
//     left: 5,
//     zIndex: 2,
//     justifyContent: 'center',
//     transform: [{ scale: 0.88 }],
//   },
//   labellineFocused: {
//     top: -20,
//     transform: [{ scale: 0.9 }],
//   },
//   labelText: {
//     color: '#42627F',
//     fontSize: 20,
//   },
//   labelTextFocused: {
//     color: '#f0ffff',
//   },
// });

// export default CustomTextInput;

import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const CustomTextInput = ({ label, value, onChangeText, style }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused, style]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {!value && !isFocused && (
          <Text style={[styles.labelText]}>{label}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative', // Needed for absolute positioning of label
  },
  input: {
    flex: 1,
    fontSize: 22,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f0ffff',
    backgroundColor: 'transparent',
    color: '#f0ffff',
  },
  labelText: {
    color: '#8196AA',
    fontSize: 20,
    position: 'absolute',
    left: 30,
    top: 12, // Adjust this value according to your preference
  },
  inputFocused: {
    borderColor: '#fff', // Example of changing border color when focused
  },
});

export default CustomTextInput;
