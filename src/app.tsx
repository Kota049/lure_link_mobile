import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { createStackNavigator } from "@react-navigation/stack";
import { type ParameterList } from "./param-types";
import React from "react";
import { RecruitmentList } from "./screens/recruitment-list";
import { RecruitmentDetail } from "./screens/recruitment-detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Stack = createStackNavigator<ParameterList>();
const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={RecruitmentList} />
            <Stack.Screen
              name="RecruitmentDetail"
              component={RecruitmentDetail}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}
registerRootComponent(App);
