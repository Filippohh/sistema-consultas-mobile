// src/components/StatusBadge.tsx

import React from 'react';

import { View, Text } from 'react-native';

import { StatusConsulta } from '../types/statusConsulta';

import { styles } from '../styles/statusBadge.styles';
 
export function StatusBadge({ status }: { status: StatusConsulta }) {

  return (
<View style={[

      styles.badge,

      status === "confirmada" && styles.confirmada,

      status === "cancelada" && styles.cancelada,

    ]}>
<Text style={styles.texto}>{status.toUpperCase()}</Text>
</View>

  );

}
 