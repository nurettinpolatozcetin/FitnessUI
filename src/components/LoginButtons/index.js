import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';

const LoginButtons = ({title}) => {
  return (
    <View>
      <TouchableOpacity style={Style.buttonbar}>
        <Text style={{color: '#ffff', fontWeight: '800', fontSize: 25}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

LoginButtons.propTypes = {
  title: PropTypes.string,
};
export default LoginButtons;
