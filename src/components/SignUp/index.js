import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';
import {Icons} from '../../assets';
const SignUp = ({name, placeholder, yes, source}) => {
  return (
    <View>
      <View>
        <Text style={{color: 'red', fontSize: 18, fontWeight: 'bold'}}>
          {name}
        </Text>
        <View style={Style.inputpos}>
          <View style={Style.input}>
            <TextInput placeholder={placeholder} secureTextEntry={yes} />
            <TouchableOpacity>
              <Image source={source} style={Style.icons} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

SignUp.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  yes: PropTypes.bool,
  source: PropTypes.number,
};

export default SignUp;
