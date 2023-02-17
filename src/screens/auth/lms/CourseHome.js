import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { useAuth } from "../../../contexts/Auth";
import Constants from "expo-constants";
import AppText from "../../../components/AppText";
import CourseCard from "../../../components/lms/CourseCard";
import colors from "../../../constants/colors";

const courses = [
  {
    id: 1,
    category_id: 1,
    title: "introduction to web development",
    description: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi
tiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur
i sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mol
litia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita 
distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit qu
o minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor r
epellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus sae
pe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum reru
m hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur
 aut perferendis doloribus asperiores repellat`,
    banner:
      "https://i.im.ge/2022/11/05/2JdP8P.3d-casual-life-chart-and-statistics.png",
    price: 300000,
    ratings: 0,
    difficulty_level: "beginner",
  },
  {
    id: 2,
    category_id: 1,
    title: "introduction to web development",
    description: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi
tiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur
i sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mol
litia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita 
distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit qu
o minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor r
epellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus sae
pe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum reru
m hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur
 aut perferendis doloribus asperiores repellat`,
    banner:
      "https://i.im.ge/2022/11/05/2JdP8P.3d-casual-life-chart-and-statistics.png",
    price: 300000,
    ratings: 0,
    difficulty_level: "beginner",
  },
  {
    id: 3,
    category_id: 1,
    title: "introduction to web development",
    description: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi
tiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur
i sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mol
litia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita 
distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit qu
o minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor r
epellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus sae
pe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum reru
m hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur
 aut perferendis doloribus asperiores repellat`,
    banner:
      "https://i.im.ge/2022/11/05/2JdP8P.3d-casual-life-chart-and-statistics.png",
    price: 300000,
    ratings: 0,
    difficulty_level: "beginner",
  },
];
export default function CourseHome() {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };
  return (
    <View style={styles.container}>
      <AppText bold dark>
        Assigned Tasks
      </AppText>

      <View style={styles.wrap}>
        {courses.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </View>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
