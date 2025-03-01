import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons} from '../../../assets';
import LinearGradient from 'react-native-linear-gradient';
import SignUp from '../../../components/SignUp';
import LoginButtons from '../../../components/LoginButtons';
import Alreadyacc from '../../../components/Alreadyacc';

const App = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#bb1636', '#311939']}
      style={{flex: 1}}>
      <View style={Style.header}>
        <Text style={{fontSize: 45, color: '#ffff', fontWeight: '400'}}>
          Create Your Account
        </Text>
        <TouchableOpacity>
          <Image source={Icons.menu} style={Style.menu} />
        </TouchableOpacity>
      </View>
      <View style={Style.middlepos}>
        <View style={Style.middle}>
          <View style={{marginTop: 30}}>
            <View style={Style.signinfopos}>
              <SignUp
                placeholder="John Smith"
                name="Full Name"
                yes={false}
                source={Icons.tick}
              />
            </View>
            <View style={Style.signinfopos}>
              <SignUp
                placeholder="joydeo@gmail.com"
                name="Phone or Mail"
                yes={false}
                source={Icons.tick}
              />
            </View>
            <View style={Style.signinfopos}>
              <SignUp
                placeholder="******"
                name="Password"
                yes={true}
                source={Icons.show}
              />
            </View>
            <View style={Style.signinfopos}>
              <SignUp
                placeholder="******"
                name="Confirm Password"
                yes={true}
                source={Icons.show}
              />
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <LoginButtons title="SIGN UP" />
          </View>
          <View>
            <Alreadyacc title="Already have account?" title2="Sign In" />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default App;
