import { feedback } from "../route";


// Basic Get Fuction
export async function GET(request) {
    return Response.json(feedback)
}

// Basic Post function
export async function POST(request) {

    const { message } = await request.json();

    if (!message || typeof message !== "string") {
        return Response.json({
            status: 400,
            message: "Send a Text Message"
        })
    }

    const newFeedback = { message, id: feedback.length + 1 }
    feedback.push(newFeedback);

    return Response.json({
        acknowledgement: true,
        insertedId: newFeedback.id,
    })
}
