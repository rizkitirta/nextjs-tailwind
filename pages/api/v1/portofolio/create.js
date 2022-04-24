// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../../../app/libs/dbConnect";
import formidable from 'formidable'
// import { promises as fs } from 'fs'
import fs from 'fs';

var mv = require('mv');


export const config = {
    api: {
        bodyParser: false,
    }
};

export default async (req, res) => {
    try {
        const form = new formidable.IncomingForm();
        form.parse(req, async function (err, fields, files) {
            console.log(files)
            let path = await saveFile(files.files);
            const data = await db.collection('portofolios').add({
                name: fields.name,
                deskripsi: fields.deskripsi,
                tags: fields.tags,
                images: path,
                created: new Date().toISOString(),
            });

            res.status(200).json({ success: true, message: 'Data created successfully', data });
        });

    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}


const saveFile = async (file) => {
    const data = fs.readFileSync(file.filepath);
    fs.writeFileSync(`./public/uploads/${file.newFilename}.jpeg`, data);
    await fs.unlinkSync(file.filepath);
    // console.log('ok')
    return `${file.newFilename}.jpeg`;
};