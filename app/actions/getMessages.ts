import prisma from "@/app/libs/prismadb";

const getMesssages = async (
    conversationId: string
) => {
    try {
        const messages = await prisma.message.findMany({
            where: {
                converationId: conversationId
            },
            include: {
                sender: true,
                seen: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return messages;
    } catch (error: any) {
        return []
    }
}

export default getMesssages;