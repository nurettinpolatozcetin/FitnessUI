import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';

const Alreadyacc = ({title, title2}) => {
  return (
    <View style={{alignItems: 'flex-end', marginRight: 20, marginTop: 60}}>
      <Text style={{color: 'grey', fontWeight: 700}}>{title}</Text>
      <TouchableOpacity>
        <Text style={{color: 'rgb(52, 0, 0)', fontWeight: '900', fontSize: 20}}>
          {title2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
Alreadyacc.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string,
};
export default Alreadyacc;
