import { type ParameterList } from "@/param-types";
import { type RouteProp } from "@react-navigation/native";
import { View, Text } from "react-native";

// ルートの型を定義
type DetailsScreenRouteProp = RouteProp<ParameterList, "RecruitmentDetail">;

// Props の型を定義
type Props = {
  route: DetailsScreenRouteProp;
};

// コンポーネントの定義
export const RecruitmentDetail = ({ route }: Props) => {
  const { id } = route.params; // パラメータを取得
  return (
    <View>
      <Text>募集 {id}</Text>
    </View>
  );
};
