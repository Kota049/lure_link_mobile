import { type Recruitment } from "@/types";
import dayjs from "dayjs";
import { View, StyleSheet } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import Icon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";

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

export const RecruitmentSummaryCardSkeleton = (props: { key: string }) => {
  return (
    <Card style={styles.card} {...props}>
      <Card.Content>
        <ContentLoader
          speed={2}
          width={400}
          height={85} // todo: この値は後で調整する
          viewBox="0 0 400 85"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <Circle cx="24" cy="24" r="24" />
          <Rect x="60" y="15" rx="4" ry="4" width="200" height="10" />
          <Rect x="60" y="35" rx="4" ry="4" width="150" height="10" />
          <Rect x="60" y="60" rx="4" ry="4" width="300" height="10" />
          <Rect x="60" y="80" rx="4" ry="4" width="250" height="10" />
        </ContentLoader>
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
