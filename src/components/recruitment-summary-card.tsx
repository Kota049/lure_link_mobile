import { type Recruitment } from "@/types";
import dayjs from "dayjs";
import { View, StyleSheet } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import Icon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

export const RecruitmentSummaryCard = (props: Recruitment) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.wstackWithGap}>
          <Avatar.Text size={36} label="A" />
          <View style={styles.vstack}>
            <Text variant="titleLarge">
              {dayjs(props.startDateTime).format("YYYY/MM/DD HH:mm")}
            </Text>
            <View style={styles.wstackWithoutGap}>
              <View style={styles.vstack}>
                <View style={styles.wstackWithoutGap}>
                  <FontAwesome6Icon
                    name="people-group"
                    size={20}
                    color="#000"
                  />
                  <Text variant="bodyMedium">{`${props.depaturePrefecture} ${props.depatureAddress}`}</Text>
                </View>
                <View style={styles.wstackWithoutGap}>
                  <EntypoIcon name="location-pin" size={20} color="#000" />
                  <Text variant="bodyMedium">{`${props.destinationPrefecture} ${props.destinationAddress}`}</Text>
                </View>
              </View>
              <View style={styles.vstack}>
                <View style={styles.wstackWithoutGap}>
                  <Icon name="jpy" size={20} color="#000" />
                  <Text variant="bodyMedium">{`${props.budget}JPY`}</Text>
                </View>
                <View style={styles.wstackWithoutGap}>
                  <Text variant="bodyLarge">参加状況</Text>
                  <Text variant="bodyMedium">{`${
                    props.applyingProjectionUpdater.filter(
                      (item) => item.status === "DETERMINE"
                    ).length
                  } / ${props.maxParticipant}人`}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
  wstackWithGap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  vstack: { display: "flex", flexDirection: "column" },
  wstackWithoutGap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
