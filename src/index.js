import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Picker } from '@react-native-community/picker'
import { Text, View, Image, TouchableWithoutFeedback, Animated, Platform, StyleSheet } from 'react-native'
import ToggleBox from 'react-native-togglebox'
import styles from './styles.js'

class TogglePicker extends Component {
  renderPicker = () => (
    <Picker
      {...this.props}
      style={Platform.OS === 'ios' ? [styles.iosPicker, this.props.iosPickerStyle] : [styles.androidPicker, this.props.androidPickerStyle]}
    >
      {this.props.children}
    </Picker>
  )

  renderIos = () => (
    <ToggleBox
      arrowDownType={this.props.arrowDownType}
      arrowUpType={this.props.arrowUpType}
      label={this.props.label}
      value={this.props.value}
      style={StyleSheet.flatten([styles.toggleBox, this.props.iosBoxStyle])}
      labelStyle={this.props.labelStyle}
    >
      <View style={this.props.iosPickerWrapperStyle}>
        {this.renderPicker()}
      </View>
    </ToggleBox>
  )

  renderAndroid = () => (
    <View style={[styles.androidBoxStyle, this.props.androidBoxStyle]}>
      <Text>
        {this.props.label}
      </Text>
      <View style={StyleSheet.flatten([styles.androidPickerWrapper, this.props.androidPickerWrapper])}>
        {this.renderPicker()}
      </View>
    </View>
  )

  render() {
    return (
      Platform.OS === 'ios' ?
        this.renderIos() : this.renderAndroid()
    )
  }
}

TogglePicker.propTypes = {
  ...Picker.propTypes,
  androidBoxStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  androidPickerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  androidPickerWrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  arrowColor: PropTypes.string,
  arrowDownType: PropTypes.string,
  arrowSize: PropTypes.number,
  arrowUpType: PropTypes.string,
  enabled: PropTypes.bool,
  expanded: PropTypes.bool,
  iosBoxStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  iosPickerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  iosPickerWrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  onValueChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.any.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
}

TogglePicker.defaultProps = {
  androidBoxStyle: {},
  androidPickerStyle: {},
  androidPickerWrapperStyle: {},
  androidBoxStyle: {},
  arrowColor: 'rgb(178, 178, 178)',
  arrowDownType: 'keyboard-arrow-down',
  arrowSize: 30,
  arrowUpType: 'keyboard-arrow-up',
  expanded: false,
  iosBoxStyle: {},
  iosPickerStyle: {},
  iosPickerWrapperStyle: {},
  value: '',
  labelStyle: {},
}

export default TogglePicker
