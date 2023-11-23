import React from "react";
import { SvgXml } from "react-native-svg";
import { StyleSheet, View } from "react-native";

import { addIcon, educationIcon, profileIcon, scheduleIcon } from "./Icons";
import { deleteIcon } from "./Icons";
import { commentIcon } from "./Icons";
import { arrowLeftIcon } from "./Icons";
import { trashIcon } from "./Icons";
import { photoIcon } from "./Icons";
import { settingsIcon } from "./Icons";
import { locationIcon } from "./Icons";
import { logoutIcon } from "./Icons";
import { gridIcon } from "./Icons";
import { userIcon } from "./Icons";
import { houseIcon } from "./Icons";
import { arrowUpIcon } from "./Icons";
import { langIcon } from "./Icons";
import { createIcon } from "./Icons";

export default function Icon({ type, focused, size = 30, inversia, isDark }: { type: any, focused: any, size?: number, inversia?: any, isDark: boolean }) {
    let xml: any;
    switch (type) {
        case "add":
            xml = addIcon(focused);
            break;
        case "delete":
            xml = deleteIcon(focused);
            break;
        case "comment":
            xml = commentIcon(focused);
            break;
        case "arrowLeft":
            xml = arrowLeftIcon(focused);
            break;
        case "settings":
            xml = settingsIcon(focused, isDark);
            break;
        case "location":
            xml = locationIcon(focused);
            break;
        case "logout":
            xml = logoutIcon(focused);
            break;
        case "grid":
            xml = gridIcon(focused, isDark);
            break;
        case "house":
            xml = houseIcon(focused, isDark);
            break;
        case "profile":
            xml = profileIcon(focused, isDark);
            break;
        case "trash":
            xml = trashIcon(focused);
            break;
        case "user":
            xml = userIcon(focused, isDark);
            break;
        case "photo":
            xml = photoIcon(focused, inversia);
            break;
        case "arrowUp":
            xml = arrowUpIcon(focused);
            break;
        case "lang":
            xml = langIcon(focused);
            break;
        case "education":
            xml = educationIcon(focused, isDark);
            break;
        case "schedule":
            xml = scheduleIcon(focused, isDark);
            break;
        case "createIcon":
            xml = createIcon(focused, isDark);
            break;
    }

    const PlusIcon = ({ focused, size = 30, inversia, isDark }: { focused: any, size?: number, inversia?: any, isDark: boolean }) => {
        return (
            <View style={styles.btnPlus}>
                <SvgXml xml={xml} width={size} height={size} />
            </View>
        );
    };

    return (
        <>
            <SvgXml xml={xml} width={size} height={size} />
            {(type === "plus" || type === "user") && focused && (
                <PlusIcon focused={focused} isDark={isDark} />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    btnPlus: {
        backgroundColor: "#FF6C00",
        borderRadius: 20,
        width: 70,
        maxHeight: 40,
    },
});