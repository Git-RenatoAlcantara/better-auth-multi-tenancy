import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Member, User } from "@/lib/generated/prisma"
import { Button } from "./ui/button"
import MembersTableAction from "./members-table-action"

interface MembersTableProps {
    members: MembersWithUser[]
}


type MembersWithUser = Member & {
    user: User
}

export default function MembersTable({
    members
}: MembersTableProps){

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
               {members.map((member) => (
                <TableRow key={member.id}>
                    <TableCell>{member.user.name}</TableCell>
                    <TableCell>{member.user.email}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell className="text-right">
                        <MembersTableAction memberId={member.id} organizationId={member.organizationId}/>
                    </TableCell>
                </TableRow>
               ))}
            </TableBody>
        </Table>
    )
}