import getConversationById from "@/app/actions/getConversationById";
import getMesssages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";

interface IParams {
    conversationId: string
};

const conversationId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId);
    const messages = await getMesssages(params.conversationId);

    if (!conversation) {
        return (
            <div
                className="lg:pl-80 h-full"
            >
                <div className="h-full flex flex-col">
                    <EmptyState />
                </div>
            </div>
        )
    }


    return (
        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
                <Header conversation={conversation} />
                <Body />
            </div>
        </div>
    )
}

export default conversationId;