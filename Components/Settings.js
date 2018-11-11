import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Settings extends React.Component{
	render(){
		return(
			<View style={styles.container}>
				<Image
            	style={{alignItems: 'center', width: 150, height:150, marginBottom: 5, marginTop:10, }}
            	source={{uri: 'https://www.spotteron.net/images/icons/user60.png'}}
            	/>
				
                <Text style={styles.edit}>Nama : Yohanna Tania Hartanto </Text>
                <Text style={styles.edit}>Kelas : XI RPL 4 </Text>
                <Text style={styles.edit}>SMK TELKOM PURWOKERTO </Text>
				<Text style={{ marginBottom : 100}}></Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000066',
  },

  edit : {
	color : "#fff",
	fontSize : 14,
	}
});