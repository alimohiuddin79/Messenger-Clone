// this is async server components because we will fetch users
// only /users route share this layout
import Sidebar from "../components/sidebar/Sidebar";

export default async function UsersLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        // if async server components can't render or show error use the below comment
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
            {children}
            </div>
        </Sidebar>
    )
}