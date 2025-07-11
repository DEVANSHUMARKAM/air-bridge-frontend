import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@mui/material';

const FileDropZone = ({ onFilesAdded }) => {
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onFilesAdded(acceptedFiles);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #888',
        borderRadius: 4,
        p: 4,
        width: '320px',
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.6)',
        cursor: 'pointer',
        backdropFilter: 'blur(4px)',
      }}
    >
      <input {...getInputProps()} />
      <Typography variant="body1">Drag & drop files here, or click to select</Typography>
    </Box>
  );
};

export default FileDropZone;
