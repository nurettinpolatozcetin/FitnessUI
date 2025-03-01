import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Icons} from '../../../assets';
import LoginButtons from '../../../components/LoginButtons';
import SignUp from '../../../components/SignUp';
import Alreadyacc from '../../../components/Alreadyacc';

const App = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#bb1636', '#311939']}
      style={{flex: 1}}>
      <View style={Style.header}>
        <View>
          <Text style={{fontSize: 45, color: '#ffff', fontWeight: '400'}}>
            Hello
          </Text>
          <Text style={{fontSize: 45, color: '#ffff', fontWeight: '400'}}>
            Sign in!
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={Icons.menu} style={Style.menu} />
        </TouchableOpacity>
      </View>
      <View style={Style.middlepos}>
        <View style={Style.middle}>
          <View style={{marginTop: 80, marginLeft: 30}}>
            <View>
              <SignUp
                name="Gmail"
                placeholder="joydeo@gmail.com"
                yes={false}
                source={Icons.tick}
              />
            </View>
            <View style={{marginTop: 30}}>
              <SignUp
                name="Password"
                placeholder="********"
                yes={true}
                source={Icons.show}
              />
            </View>
          </View>
          <TouchableOpacity style={{marginLeft: 230, marginTop: 15}}>
            <Text style={{fontSize: 18}}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', margin: 25}}>
            <LoginButtons title="SIGN IN" />
          </View>
          <View style={{marginRight: 10, marginTop: 100}}>
            <Alreadyacc title="Don't have account?" title2="Sign Up" />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default App;
