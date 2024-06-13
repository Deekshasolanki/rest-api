const express = require("express");
const { categoryController } = require('../controllers'); // Ensure the path is correct
const multer = require("multer");
const path = require("path");
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, "./uploads/category/thumbnail")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage });

router.post("/category",upload.single("thumbnail"),categoryController.store);
router.get("/category", categoryController.index);
router.put("/category/:id", categoryController.update);



module.exports = router;
