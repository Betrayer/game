import React, { FC } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addScore } from '../../redux/reducers/score';

const Main: FC = () => {
	const score = useAppSelector((state) => state.scoreSlice.score);
	const dispatch = useAppDispatch();

	return (
		<View style={styles.container}>
			<Text>{score}</Text>
			<TouchableOpacity onPress={() => dispatch(addScore())}>
				<Text>csore</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Main;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#a5a5a5',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
