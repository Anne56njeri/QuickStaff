import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './Button';
import styles from './Button.styles';


storiesOf('button', module)
  .addDecorator(getStory => (

    <View style={{ justifyContent: 'center', padding: 15, flex: 1 }}>{getStory()}</View>

  ))
  .addDecorator(withKnobs)
  .add('Standard', () => (
    <Button base onPress={action('pressed')}>Standard</Button>
  ))
  .add('Primary', () => (
    <Button primary primaryText={styles.primaryText} onPress={action('pressed')}>Primary</Button>
  ))
  .add('Secondary', () => (
    <Button secondary onPress={action('pressed')}>Secondary</Button>
  ))
  .add('Full Width Btn', () => (
    <Button fullWidth onPress={action('pressed')}>Full Width Button</Button>
  ))
  .add('Danger', () => (
    <Button danger onPress={action('pressed')}> Danger</Button>
  ))
  .add('Success', () => (
    <Button success onPress={action('pressed')}>Success</Button>
  ))
  .add('Disabled button', () => (
    <Button disabled onPress={action('pressed')}>Load More</Button>
  ))
  .add('Login example', () => (
    <Button logIn onPress={action('pressed')}>Login</Button>
  ))
  .add('Icon only', () => (
    <Button primary icon="heart" iconColor="red" size={25} onPress={action('pressed')} />
  ))
  .add('With rounded border', () => (
    <Button withBorder onPress={action('pressed')}>Border Radius</Button>
  ));
