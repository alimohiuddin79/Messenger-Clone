// this is async server components because we will fetch users
// only /users route share this layout
import getUsers from "../actions/getUser";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

export default async function UsersLayout({
    children
}: {
    children: React.ReactNode
}) {
    const users = await getUsers();
    return (
        // if async server components can't render or show error use the below comment
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <UserList items={users}/>
                {children}
            </div>
        </Sidebar>
    )
}