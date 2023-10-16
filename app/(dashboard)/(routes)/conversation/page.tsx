"use client"
import * as z from "zod";
import Heading from "@/components/Heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
const ConversationPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            prompt:""
        }
    })
    const isLoading = form.formState.isSubmitting;

    return (
     <div>
           <Heading
           titel="Conversation"
           description="This our Chat AI ask it what ever you want."
           icon={MessageSquare}
           iconColor="text-violet-500"
           bgColor="bg-violet-500/10"
           />
           <div className="px-4 lg:px-8">

           </div>
    </div> 
    );
}
 
export default ConversationPage;