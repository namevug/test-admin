import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostEdit, PostList } from "./posts";
import { UserList } from "./users";

export const App = () => (
<Admin dataProvider={dataProvider}>
  <Resource name="posts" list={PostList} edit={PostEdit} />
  <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
</Admin>
)