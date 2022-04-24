import db from "../../../../app/libs/dbConnect";

export default async (req, res) => {
    try {
        console.log(req.body)
        const data = await db.collection('tags').doc(req.body.id).delete();
        res.status(200).json({ success: true, message: 'Data deleted successfully', data: null});
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}
