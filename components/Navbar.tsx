import { UserButton } from "@clerk/nextjs";
import  MobileSidebar  from "@/components/mobile-sidebar";
import { Button } from "./ui/button";
import{Menu} from "lucide-react";
const Navbar = async () => {

    return ( 
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className=" flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>

        </div>
     );
}
 
export default Navbar;
<div>

</div>