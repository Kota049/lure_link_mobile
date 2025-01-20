import React from "react";
import {
  Text,
  ActivityIndicator,
  useTheme,
  Card,
  Avatar,
} from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import { View, StyleSheet } from "react-native";

// TODO:別ファイルに切り出す
const fetchData = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => resolve("データが正常に読み込まれました！"), 10000); // 3秒後に解決
  });

// 一覧ページのコンポーネント
export const RecruitmentList = () => {
  const theme = useTheme();
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });

  if (isLoading) {
    // ローディング中はスケルトン表示
    return (
      <View
        style={[
          styles.skeletonContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <ActivityIndicator
          animating={true}
          size="large"
          color={theme.colors.primary}
        />
      </View>
    );
  }

  // データ読み込み後の表示
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.wstack}>
          <Avatar.Text size={36} label="A" />
          <View style={styles.vstack}>
            <Text variant="titleLarge">{data}</Text>
            <Text variant="titleLarge">{data}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    margin: 16,
  },
  wstack: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  vstack: { display: "flex", flexDirection: "column" },
});
