/* @flow */

import React, { Component } from 'react';
import {
    Provider as PaperProvider,
    DefaultTheme,
} from 'react-native-paper';

import { DrawerNavigator } from 'react-navigation';

import RootNavigator from './examples_paper/RootNavigator';

const Navigator = DrawerNavigator(
    { Home: { screen: RootNavigator } }
);

export default class App extends React.Component<{}, State> {
    render() {
        return (
            <PaperProvider theme={DefaultTheme}>
                <Navigator />
            </PaperProvider>
        );
    }
}
