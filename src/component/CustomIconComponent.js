import React from 'react';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export const CustomIconComponent = ({name, size, color}) => {
  return (
    <View style={{marginRight: -30}}>
      <Entypo
        style={{alignSelf: 'center', paddingLeft: 2}}
        name={name}
        size={size}
        color={color}
      />
    </View>
  );
};

export default CustomIconComponent;
