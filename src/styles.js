import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  iosPicker: {
    borderColor: 'rgb(178,181,189)',
    borderTopWidth: StyleSheet.hairlineWidth,
    padding: 0,
  },
  androidBoxStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  androidPicker: {
    flex: 1,
    alignItems: 'center'
  },
  androidPickerWrapper: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(178,181,189)'
  },
  toggleBox: {
    borderColor: 'rgb(178,181,189)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default styles;
