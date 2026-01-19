
export const feedback = [
    {
        id: 1,
        message: "Khabar khub valo chilO"
    },
    {
        id: 2,
        message: "আর ভালো হতে হবে"
    },
]



export async function GET(request) {

    return Response.json({
        status: 200,
        message: "API Created with Next.js"
    })

}