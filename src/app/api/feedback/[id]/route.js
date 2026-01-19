import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("FirstNext")
export async function GET(request, {params}) {
    const { id } = await params;

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: "Id not correct"
        })
    }

    const query = {_id: new ObjectId(id)}

   const result = await feedbackCollection.findOne(query)

    return Response.json(result)
}


// Delete Function
export async function DELETE(request, {params}) {
    const { id } = await params;

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: "Id not correct"
        })
    }

    const query = {_id: new ObjectId(id)}

   const result = await feedbackCollection.deleteOne(query)

    return Response.json(result)
}




// Patch Function
export async function PATCH(request, {params}) {
    const { id } = await params;
    const { message } = await request.json();

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: "Id not correct"
        })
    }

    if (!message || typeof message !== "string") {
        return Response.json({
            status: 400,
            message: "Send a Text Message"
        })
    }

    const query = { _id: new ObjectId(id) }
    const newData = {
        $set: {
            message
        }
    }

   const result = await feedbackCollection.updateOne(query, newData)

    return Response.json(result)
}
