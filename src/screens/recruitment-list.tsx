import React from "react";
import { Text, useTheme } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import { FlatList, SafeAreaView } from "react-native";
import { fetchRecruitmentList } from "@/api";
import {
  RecruitmentSummaryCard,
  RecruitmentSummaryCardSkeleton,
} from "@/components/recruitment-summary-card";

// 一覧ページのコンポーネント
export const RecruitmentList = () => {
  const theme = useTheme();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["data"],
    queryFn: fetchRecruitmentList,
  });

  if (isLoading) {
    // ローディング中はスケルトン表示
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={[...Array(5).keys()]}
          renderItem={(item) => (
            <RecruitmentSummaryCardSkeleton key={item.index.toString()} />
          )}
        />
      </SafeAreaView>
    );
  }
  if (isError || !data) {
    console.log(error);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          データがありません。
        </Text>
      </SafeAreaView>
    );
  }
  console.log(data);

  // データ読み込み後の表示
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <RecruitmentSummaryCard {...item} key={item.recruitmentId} />
        )}
        keyExtractor={(item) => item.recruitmentId.toString()}
      />
    </SafeAreaView>
  );
};
