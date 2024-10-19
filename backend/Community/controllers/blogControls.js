const express = require('express')
const Post = require('../models/postModel')
const router = express.Router();


const getPosts = async(req, res)=>{
    try{
    const posts = await Post.find()
    res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }  
}

const createPost = async (req, res)=>{
    try{
    const newPost = new Post(req.body)
    const upPosts = await newPost.save()
    res.status(200).send(`New post successfully published by ${upPosts.postBy}!`)
    }
    catch(err){
    res.status(400).json({ Error: err.message })
    }
}

const updateLikes = async(req, res)=>{
    try{
    const id = req.params.id
    const newLikes = req.body.newValue
    console.log(newLikes);
    
    const upposts = await Post.findByIdAndUpdate(id)
    if(!upposts){
        res.status(404).json({ error: 'Post not found! '})
    }
    upposts.likes = newLikes 
    await upposts.save()
    res.status(200).send('Likes updated successfully!')
}
    catch(err){
    res.status(400).json({ Error: err.message })
    }
}

const deletePost = async(req, res)=>{
    try{
    const id = req.params.id
    const posts = await Post.findByIdAndDelete(id)
    if(!posts){
        res.status(404).json({ error: 'Post not found!' })
    }
    res.status(201).send('Post successfully removed!')
    }
    catch(err){
    res.status(400).json({ error: err.message })
    }
}





exports.router = router
exports.getPosts = getPosts
exports.createPost = createPost
exports.updateLikes = updateLikes
exports.deletePost = deletePost