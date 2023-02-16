import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import AppText from '../AppText';

export default function FormTextLink({title}) {

    const {isValid, handleSubmit} = useFormikContext();
  return (
    <TouchableOpacity onPress={handleSubmit} disabled={!isValid}><AppText centered red grey={!isValid} small bold>{title}</AppText></TouchableOpacity>
  )
}

const styles = StyleSheet.create({})