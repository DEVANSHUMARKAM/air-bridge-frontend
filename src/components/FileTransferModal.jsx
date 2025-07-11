import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogContent, Tabs, Tab,
  Box, TextField, Button, Typography, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatBytes } from '../utils/formatBytes';

const FileTransferModal = ({ open, onClose, selectedFiles, onDeleteFile, onFilesAdded }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    senderEmail: '',
    senderName: '',
    recipientEmail: '',
    subject: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const senderValid = emailRegex.test(formData.senderEmail.trim());
    const recipientValid = emailRegex.test(formData.recipientEmail.trim());
    setIsFormValid(senderValid && recipientValid);
  }, [formData]);

  const handleTabChange = (e, newValue) => setActiveTab(newValue);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleAddMoreFiles = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.onchange = (e) => {
      if (e.target.files.length) {
        onFilesAdded(Array.from(e.target.files));
      }
    };
    input.click();
  };

  const handleAddFolders = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.webkitdirectory = true; // important: enables folder selection
    input.multiple = true;
    input.onchange = (e) => {
      if (e.target.files.length) {
        onFilesAdded(Array.from(e.target.files));
      }
    };
    input.click();
  };

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          onClose();
        }
      }}
      maxWidth="md"
      fullWidth
    >
      <DialogContent sx={{ display: 'flex', gap: 2, bgcolor: 'rgba(255,255,255,0.95)' }}>
        
        {/* Left: Form */}
        <Box sx={{ flex: 1 }}>
          <Tabs value={activeTab} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
            <Tab label="Send files" />
            <Tab label="Create a link" />
          </Tabs>

          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Your email address"
              required
              size="small"
              value={formData.senderEmail}
              onChange={handleChange('senderEmail')}
              error={formData.senderEmail && !emailRegex.test(formData.senderEmail)}
              helperText={formData.senderEmail && !emailRegex.test(formData.senderEmail) ? 'Invalid email' : ''}
            />
            <TextField
              label="Sender name (optional)"
              size="small"
              value={formData.senderName}
              onChange={handleChange('senderName')}
            />
            <TextField
              label="Recipient(s) email"
              required
              size="small"
              value={formData.recipientEmail}
              onChange={handleChange('recipientEmail')}
              error={formData.recipientEmail && !emailRegex.test(formData.recipientEmail)}
              helperText={formData.recipientEmail && !emailRegex.test(formData.recipientEmail) ? 'Invalid email' : ''}
            />
            <TextField
              label="Subject (optional)"
              size="small"
              value={formData.subject}
              onChange={handleChange('subject')}
            />
            <TextField
              label="Your message (optional)"
              multiline
              rows={2}
              size="small"
              value={formData.message}
              onChange={handleChange('message')}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, borderRadius: 3 }}
            disabled={!isFormValid}
          >
            Transfer
          </Button>
        </Box>

        {/* Right: File details */}
        <Box sx={{ flex: 1, bgcolor: 'rgba(255,255,255,0.6)', p: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Button variant="outlined" size="small" onClick={handleAddMoreFiles}>Add more files</Button>
            <Button variant="outlined" size="small" onClick={handleAddFolders}>Add folders</Button>
          </Box>

          <Typography variant="body2" sx={{ mb: 1 }}>
            {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} (
              {formatBytes(selectedFiles.reduce((acc, f) => acc + f.size, 0))})
          </Typography>

          {selectedFiles.map((file, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="body2">{file.name}</Typography>
              <IconButton size="small" color="error" onClick={() => onDeleteFile(index)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>

      </DialogContent>
    </Dialog>
  );
};

export default FileTransferModal;
