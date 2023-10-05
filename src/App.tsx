import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";
import { PostList, PostEdit } from "./components/Post/Posts";
import { UserList } from "./components/User/Users";

export const App = () => (
<Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource 
          name="posts"
          list={PostList}
          edit={PostEdit}
          // create={PostCreate}
          icon={PostIcon}
        />
        <Resource
          name="users"
          list={UserList}
          show={ShowGuesser}
          recordRepresentation="name"
          icon={UserIcon}
        />
</Admin>
)