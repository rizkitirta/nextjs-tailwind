import db from "../../../../app/libs/dbConnect";

export default async (req, res) => {
    try {
        const tags = await db.collection('tags').get();
        const entriesData = tags.docs.map(entry => {
            const data = entry.data();
            const id = entry.id;

            return {id,...data}
        });

        res.status(200).json({ success: true, message: 'Data retrieved successfully', data: entriesData });
    } catch (error) {
        res.status(400).json({ success: false, message: e.message }).end();
    }
}