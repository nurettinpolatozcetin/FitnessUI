import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Icons} from '../../../assets';
import {LoginButton} from '../../../components';

const App = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#bb1636', '#311939']}
      style={{flex: 1}}>
      <TouchableOpacity style={Style.header}>
        <Image source={Icons.menu} style={Style.menu} />
      </TouchableOpacity>
      <View style={Style.logopos}>
        <Image source={Icons.dumbell} style={Style.logo} />
        <Text style={Style.logotxt}>FITNESS CLUB</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 150}}>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: '#ffff'}}>
          Welcome Back
        </Text>
      </View>
      <View style={Style.buttonspos}>
        <LoginButton title="SIGN IN" />
      </View>
      <View style={Style.buttonspos}>
        <LoginButton title="SIGN UP" />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 90,
        }}>
        <Text style={{color: '#ffff', fontSize: 20, fontWeight: '700'}}>
          Login With Social Media
        </Text>
      </View>
      <View style={Style.alternativesign}>
        <TouchableOpacity style={Style.alternativelogosback}>
          <Image source={Icons.insta} style={Style.alternativelogos} />
        </TouchableOpacity>
        <TouchableOpacity style={Style.alternativelogosback}>
          <Image source={Icons.face} style={Style.alternativelogos} />
        </TouchableOpacity>
        <TouchableOpacity style={Style.alternativelogosback}>
          <Image source={Icons.google} style={Style.alternativelogos} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default App;
