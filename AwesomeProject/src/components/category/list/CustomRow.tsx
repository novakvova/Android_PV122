import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import Icon from "../../icon/Icon";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },

    container_buttons: {
        flex: 0,
        flexDirection: 'column',
        marginRight: 2,
        justifyContent: 'flex-end',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

interface IProps {
    title: string,
    description: string;
    image_url: string
}

const CustomRow: FC<IProps> = ({ title, description, image_url }) => (
    <View style={styles.container}>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>

        <View style={styles.container_buttons}>
            <Text style={styles.title}>

                <Icon
                    type={"edit"}
                    size={35}
                    focused={false}
                    isDark={false}
                />
                <Icon
                    type={"delete"}
                    size={35}
                    focused={false}
                    isDark={false}
                />
            </Text>
        </View>

    </View>
);

export default CustomRow;