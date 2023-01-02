const asyncHandler = require('express-async-handler')
// get blogs 
const getBlogs = asyncHandler(async function (req, res)
{
 res.json({ message: "get blogs" })
})

// get blogs 
const addBlog = asyncHandler(async function (req, res)
{
 if (Object.values(req.body).length != 3) res.json({ msg: "fill all fields" })
 else throw new Error('fill all fields')
})

// get blogs 
const getBlog = asyncHandler(async function (req, res)
{
 res.json({ message: "get singel blog with id of : " + req.params.id })
})

// get blogs 
const deleteBlog = asyncHandler(async function (req, res)
{
 res.json({ message: "delete blog with id of : " + req.params.id })
})


module.exports = {
 getBlogs,
 addBlog,
 getBlog,
 deleteBlog
}