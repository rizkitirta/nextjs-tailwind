import db from "../../../../app/libs/dbConnect";

export default async (req, res) => {
    try {
        const data = await db.collection('tags').doc(req.body.id).update({
            name: req.body.name,
            created: new Date().toISOString(),
        });
        res.status(200).json({ success: true, message: 'Data created successfully', data });

    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}
