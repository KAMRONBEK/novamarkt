import {
	BorderedLikeIcon,
	BorderedStarIcon,
	CommentIcon,
	ContactIcon,
	ExitIcon,
	MessageIcon,
	PaymentIcon,
	PhoneIcon,
	QuestionMarkIcon,
	ShopIcon,
	UserMarkIcon,
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, View } from "react-native";
import SettingsItem from "./components/SettingsItem";
import { styles } from "./style";

const SettingsView = ({}) => {
	let navigation = useNavigation();
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.headerText}>Доброе утро</Text>
			<View style={styles.itemsBox}>
				<SettingsItem
					text={"Мои заказы"}
					icon={() => <ShopIcon fill={COLORS.defaultBlack} />}
				/>
				<SettingsItem
					text={"Отзывы"}
					icon={() => <BorderedStarIcon fill={COLORS.defaultBlack} />}
				/>
				<SettingsItem
					text={"Избранные товары"}
					icon={() => <BorderedLikeIcon fill={COLORS.defaultBlack} />}
				/>
				<SettingsItem
					text={"Мои сообщения"}
					icon={() => <CommentIcon fill={COLORS.defaultBlack} />}
				/>
				<SettingsItem
					text={"Мои платежи"}
					icon={() => <PaymentIcon fill={COLORS.defaultBlack} />}
				/>
				<SettingsItem
					text={"FAQ"}
					icon={() => <QuestionMarkIcon fill={COLORS.defaultBlack} />}
				/>
				<SettingsItem
					onPress={() => navigation.navigate(ROUTES.PROFILE)}
					text={"Мои данные"}
					icon={() => <UserMarkIcon stroke={COLORS.defaultBlack} />}
				/>
				<SettingsItem
					text={"Контакты"}
					icon={() => <ContactIcon stroke={COLORS.defaultBlack} />}
				/>
				<SettingsItem
					text={"Позвонить"}
					icon={() => <PhoneIcon stroke={COLORS.defaultBlack} />}
				/>
				<SettingsItem
					text={"Чат с поддержкой"}
					icon={() => <MessageIcon stroke={COLORS.defaultBlack} />}
				/>
				<SettingsItem
					text={"Выйти"}
					icon={() => <ExitIcon stroke={COLORS.defaultBlack} />}
				/>
			</View>
		</ScrollView>
	);
};

export default SettingsView;