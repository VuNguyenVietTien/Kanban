import "dotenv/config"
import { insertUser, deleteUser, getUserById, getAllUser, updateUser } from "./query";
async function main() {
    await insertUser();
}
main()
