import React from 'react';
import { Camera, Permissions } from 'expo';
import { FaceDetector } from 'expo';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  
  state = {
    Quiz : {
      results : []
    },
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
 
  }

  static navigationOptions = {
    header: null,
  };
async handleFacesDetected()
  {
//   return  await console.log("ok");
  }
 async startQuiz()
  {
    const {Quiz} =this.state;
let data = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
let data1 =await data.json();
 this.setState({Quiz : data1 }); 
  }
  render() {
    const {Quiz}=this.state;
    Quiz.results.length && console.log("Quiz",this.state.Quiz.results)
     
    return (
        <View style={{ flex: 1,flexDirection: 'column',justifyContent: 'center', alignItems: 'stretch',}}>
    <TouchableOpacity  style={styles.button} onPress={this.startQuiz.bind(this)}>
  <Text>Start Quiz</Text>
</TouchableOpacity>
</View>
       )

    }

 


  }
      

      
  //      <Camera   onFacesDetected={this.handleFacesDetected.bind(this)}
  // faceDetectorSettings={{
  //   mode: FaceDetector.Constants.Mode.fast,
  //   detectLandmarks: FaceDetector.Constants.Mode.none,
  //   runClassifications: FaceDetector.Constants.Mode.none,
  // }} style={{ flex: 1 }} type={this.state.type}>
  //           <View
  //             style={{
  //               flex: 1,
  //               backgroundColor: 'transparent',
  //               flexDirection: 'row',
  //             }}>
  //             <TouchableOpacity
  //               style={{
  //                 flex: 0.1,
  //                 alignSelf: 'flex-end',
  //                 alignItems: 'center',
  //               }}
  //               onPress={() => {
  //                 this.setState({
  //                   type: this.state.type === Camera.Constants.Type.back
  //                     ? Camera.Constants.Type.front
  //                     : Camera.Constants.Type.back,
  //                 });
  //               }}>
  //               <Text
  //                 style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
  //                 {' '}Flip{' '}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //         </Camera> 
        
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
