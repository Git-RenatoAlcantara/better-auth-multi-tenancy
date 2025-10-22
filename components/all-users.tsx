import { User } from "@/lib/generated/prisma";
import { Button } from "./ui/button";

interface AllUsersProps {
    users: User[]
}

export default function AllUsers({
    users
}: AllUsersProps){

    return (
        <div>
            <h2 className="text-2xl font-bold">All Users</h2>
            <div className="flex flex-col gap-2">
                {users.map((user) => (
                    <div key={user.id}>
                        {user.name} <Button>Add to organization</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}