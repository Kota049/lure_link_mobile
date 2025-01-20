import { NavigationRouteContext } from "@react-navigation/native";
import { FlatList, View, Text } from "react-native";

export const RecruitmentList = (): React.JSX.Element => {
  return (
    <FlatList
      data={[1, 2, 3]}
      renderItem={(item) => {
        return (
          <View>
            <Text>募集{item.item}</Text>
          </View>
        );
      }}
      keyExtractor={(item) => item.toString()}
    />
  );
};
