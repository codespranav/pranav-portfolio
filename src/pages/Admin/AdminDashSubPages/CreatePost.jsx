import React, { useState } from 'react'
import AdminLayout from '../../../components/Admin/AdminLayout'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CloudUploadIcon } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
    const [postTitle, setPostTitle] = useState("")
    const [category, setCategory] = React.useState('');
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

      const fileInputChangeHandler = (event)=>{
            const file = event.target.files[0];
            if(file){
                setSelectedFile(file)
            }
            const reader = new FileReader();
            reader.onload = ()=>{
                setPreviewUrl(reader.result)
            }
            reader.readAsDataURL(file);
            console.log(file)
      }

      const clearImage = (e)=>{
        e.preventDefault();
        setSelectedFile(null)
        setPreviewUrl(null)
      }

      const handleOnValueChange = (event)=>{
        setValue(event)
        console.log(value)
      }
  return (
    <AdminLayout>
      <h1 className="text-xl text-center font-bold">Create Post</h1>
      <div className=" max-w-5xl mx-auto min-h-screen">
        <form action="" className="flex flex-col gap-4 mt-[40px]">
          <div className="col1 w-full flex justify-between flex-row gap-4">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Post Title"
              variant="outlined"
              value={postTitle}
              onChange={(event) => {
                setPostTitle(event.target.value);
              }}
            />
            <FormControl className=" w-96">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => {
                fileInputChangeHandler(e);
              }}
            />
          </Button>
            {previewUrl &&  (
                <div>
          <img src={previewUrl} alt="Preview" style={{ width: '300px', height: 'auto' }} />
          <button onClick={clearImage}>Clear Image</button>
        </div>
            )}

            <ReactQuill theme="snow" value={value} onChange={(e)=>{handleOnValueChange(e)}} className=' h-fit' required />
            <button className='font-bold bg-gray-400 p-2 rounded-md'>Publish</button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default CreatePost
