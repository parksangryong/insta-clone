import React from 'react'
import { StyleSheet } from 'react-native'
import { View, TextInput } from 'react-native'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const SearchInput = () => {
    const styles = StyleSheet.create({
        main: {justifyContent: 'center', alignItems: 'center', width: '100%', paddingVertical: 10, position: 'relative'},
        icon: {opacity: 0.7, position: 'absolute', zIndex: 1, left: 25},
        input: {width: '94%', backgroundColor: '#EBEBEB', borderRadius: 10, alignItems: 'center', fontSize: 15, padding: 4, paddingLeft: 40},
    })

    return(
        <View style={styles.main}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size={18} style={styles.icon} />
            <TextInput placeholder='search' placeholderTextColor="#909090" style={styles.input} />
        </View>
    )
}

export default SearchInput