import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Button, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


const Buttons = ({
  onPress, children,
  height,
  width, color, borderRadius, borderWidth, textColor, icon, iconColor, before, size, iconOnly, secondary, label,
}) => (
  <View>
    {secondary ? (
      <Button
        onPress={onPress}
        style={{
          height,
          width,
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius,
          marginBottom: 20,
          backgroundColor: 'white',
          padding: 15,
          borderWidth: 3,
        }}
      >

        {iconOnly
          ? (
            <Icon
              name={icon}
              color={iconColor}
              size={size}
            />
          ) : null
            }

        {before ? (
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name={icon}
              color={iconColor}
              size={size}
            />
            <Text>{' '}</Text>

            <Text>{children}</Text>
          </View>

        ) : (
          <View style={{ flexDirection: 'row' }}>

            <Text>{children}</Text>

            <Text>{' '}</Text>
            <Icon
              name={icon}
              color={iconColor}
              size={size}
            />
          </View>
        )}

      </Button>
    )

      : (
        <Button
          onPress={onPress}
          style={{
            height,
            width,
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius,
            marginBottom: 20,
            backgroundColor: color,
            padding: 15,
            borderWidth,
          }}
        >

          {iconOnly
            ? (
              <Icon
                name={icon}
                color={iconColor}
                size={size}
              />
            ) : null
      }

          {before ? (
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name={icon}
                color={iconColor}
                size={size}
              />
              <Text>{' '}</Text>
              <Text style={{
                color: textColor,
                textAlign: 'center',
                fontWeight: '200',
              }}
              >
                {label}
              </Text>
            </View>

          ) : (
            <View style={{ flexDirection: 'row' }}>
              <Text style={{
                color: textColor,
                textAlign: 'center',
                fontWeight: '200',
              }}
              >
                {label}
              </Text>
              <Text>{' '}</Text>
              <Icon
                name={icon}
                color={iconColor}
                size={size}
              />
            </View>
          )}

        </Button>
      )}
  </View>

);


export default Buttons;
