import React, { FC } from 'react';
import { View, Text } from 'react-native';

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const SettingsSection: FC<Props> = ({ title = '', children = null }) => (
  <View style={{ marginBottom: 24, width: '100%' }}>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 0.2,
      borderBottomColor: 'rgba(255, 255, 255, 0.8)',
      marginBottom: 16,
      paddingBottom: 8
    }}>
      <Text style={{
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '500',
        opacity: 0.6,
        fontSize: 15
      }}>
        {title?.toUpperCase() || ''}
      </Text>
    </View>
    <View style={{ paddingHorizontal: 24 }}>
      {children}
    </View>
  </View>
);

export default SettingsSection;
