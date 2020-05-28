import React from 'react';
import { Component } from 'react';
import { Button } from 'react-native-paper';
import { AppRegistry, Text, View, StyleSheet, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import jar from './jar.json';
import light from './light.json';
//import { Card } from 'react-native-paper';



class MainApp extends Component {
	constructor(props) {
		super(props);
		// Binding the function of opening the Smart Jar to open the smart jar
		this.FunctionToOpenSmartJar = this.FunctionToOpenSmartJar.bind(this);
		// Same with the Light Controller
		this.FunctionToOpenLightControl = this.FunctionToOpenLightControl.bind(this);

	}
	
	// To navigate to the Smart Jar page

	FunctionToOpenSmartJar() {
		this.props.navigation.navigate('Jar');
	}

	// To navigate to the Light Control Page

	FunctionToOpenLightControl() {
		this.props.navigation.navigate('Light');
	}

	render() {
		return (
			<React.Fragment>
			<View style={styles.container}>
			 <Text 
			 style={styles.paragraph}>
		 	 Welcome to Smart Home Systems!!!! 
			 </Text>
			
			{/* Creating buttons for the purpose of navigation */}

			<Button type='submit' value="submit" variant="outline-primary" onPress={this.FunctionToOpenSmartJar} title='Smart Jar'>Smart Jar
			</Button>
			<Button type='submit'	value="submit"	onPress={this.FunctionToOpenLightControl} title='Light Control'>Light Control
			</Button>
			</View>
			</React.Fragment>

		);
	}
}

// Class to determine what happens inside the Smart Jar Page

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
			
			{/* To list the Shopping list */}

			<FlatList 
			data={jar}
			showsVerticalScrollIndicator={false}
			renderItem={({item}) => 
				<View>

				{/* To fetch the item with the keyword 'id' and display the same in the output */}
				<Text>{item.id}</Text>
				</View>
			}

			/* Convert the array to a string and display the output in a string format */

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
				
				{/* To fetch the item with the keryword 'name' and display the same in the output */}

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

// Matching the keywrods used above in class definition to the respective pages

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

// Improving the User Interface

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

