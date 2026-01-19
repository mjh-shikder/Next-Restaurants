import { connect } from "@/app/lib/dbConnect";
import { feedback } from "../route";


const feedbackCollection = connect("FirstNext")
// Basic Get Fuction
export async function GET(request) {

    const result = await feedbackCollection.find().toArray();
    return Response.json(result)

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

    const newFeedback = { message, date: new Date().toISOString };
    
    const result = await feedbackCollection.insertOne(newFeedback)

    return Response.json(result)
}
