import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";
import { PostTitle } from "./PostTitle";

const postFilters = [
  <>
    <TextInput source="q" label="Search" alwaysOn />
    <ReferenceInput source="userId" label="User" reference="users" />
  </>
];


export const PostList = () => {
  return (  
    <List filters={postFilters}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
 )
};

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
      <SimpleForm>
          <TextInput source="id" disabled />
          <ReferenceInput source="userId" reference="users" link="show" />
          <TextInput source="title" />
          <TextInput source="body" multiline rows={5} />
      </SimpleForm>
  </Edit>
);