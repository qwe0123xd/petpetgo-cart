import { UserIdentity } from 'petpetgocart/contexts/UserContext/interfaces';

export interface UserTableProps {
	users: UserIdentity[];
	deleteUser: (rowIndex: number) => void;
}
