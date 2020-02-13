import React from 'react';
import { Component } from 'react';
import { Button } from 'react-native-paper';
import { AppRegistry, Text, View, StyleSheet, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import jar from './jar.json';
import light from './light.json';
import { Card } from 'react-native-paper';


class MainApp extends Component {
	constructor(props) {
		super(props);
		this.FunctionToOpenSmartJar = this.FunctionToOpenSmartJar.bind(this);
		this.FunctionToOpenLightControl = this.FunctionToOpenLightControl.bind(this);

	}

	FunctionToOpenSmartJar() {
		this.props.navigation.navigate('Jar');
	}

	FunctionToOpenLightControl() {
		this.props.navigation.navigate('Light');
	}

	render() {
		return (
			<React.Fragment>
			<View style={styles.container}>
			<Text style={styles.paragrapgh}>
			Welcome to Smart Home Systems
			</Text>

			<Button type='submit' value="submit" variant="outline-primary" onPress={this.FunctionToOpenSmartJar} title='Smart Jar'>Smart Jar
			</Button>
			<Button type='submit'	value="submit"	onPress={this.FunctionToOpenLightControl} title='Light Control'>Light Control
			</Button>
			</View>
			</React.Fragment>

		);
	}
}

class SmartJar extends Component { 
	
	static navigationOptions = {
		title: 'SmartJar',
	};

	render() {
		return (
			<React.Fragment>
			<View style={styles.container}>
			<Text style={styles.paragraph}>
			Shopping List
			</Text>
			<FlatList 
			data={jar}
			showsVerticalScrollIndicator={false}
			renderItem={({item}) => 
				<View>
				<Text>{item.id}</Text>
				</View>
			}
			keyExtractor={(item, index) => index.toString()}
			/>
			</View>
			</React.Fragment>
		);
	}
}

class LightControl extends Component {
	
	static navigationOptions = {
		title: 'LightControl',
	};

	render() {
		return (
			<React.Fragment>
			<View style={styles.container}>
			<Text style={styles.paragraph}>
			 Light Control
			</Text>
			<FlatList 
			data={light}
			showsVerticalScrollIndicator={false}
			renderItem={({item}) => 
				<View>
				<Text>{item.name}</Text>
				</View>
			}
			keyExtractor={(item, index) => index.toString()}
			/>
			</View> 
			</React.Fragment>
		);
	}
}

const RootStack = createStackNavigator(
	{
		Main:MainApp,
		Jar: SmartJar,
		Light: LightControl,
	},
	{
		initialRouteParams: 'MainApp',
	}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <AppContainer />
	}
}

const styles = StyleSheet.create( {
	paragraph: {
		marginLeft: 14,
		marginTop: 20,
		marginVertical: 50,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	container: {
		flex: 1,
		alignContent: 'center',
		padding: 8,
	},

});

