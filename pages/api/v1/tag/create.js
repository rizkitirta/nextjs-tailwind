import db from "../../../../app/libs/dbConnect";

export default async (req, res) => {
    const doc = await db.collection('tags').doc(id).get();
    if (!doc.exists) {
        res.status(404).end();
    } else {
        res.status(200).json(doc.data());
    }
}