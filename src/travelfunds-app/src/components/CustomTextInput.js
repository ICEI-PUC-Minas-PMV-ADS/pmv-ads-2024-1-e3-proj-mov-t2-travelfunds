import { TextInput, View, StyleSheet, Text } from 'react-native';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  style,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#42627F"
          style={[styles.input, style]}
          value={value}
          onChangeText={onChangeText}
        />
        <Text style={[styles.labelText]}>{label}</Text>
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
    position: 'relative',
  },
  input: {
    flex: 1,
    fontSize: 22,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f0ffff',
    backgroundColor: 'transparent',
    color: 'white',
  },
  labelText: {
    color: '#8196AA',
    fontSize: 20,
    position: 'absolute',
    left: 30,
    top: 12,
  },
  inputFocused: {
    borderColor: '#fff',
  },
});

export default CustomTextInput;
